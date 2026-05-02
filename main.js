const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const waveEl = document.getElementById('wave');
const hpFill = document.getElementById('hpFill');
const bombEl = document.getElementById('bomb');
const msg = document.getElementById('msg');

const state = {
  running: false, t: 0, score: 0, wave: 1, bombs: 3,
  player: {x:0,y:0,r:16,speed:5,hp:100,maxHp:100,cooldown:0},
  bullets: [], enemies: [], enemyBullets: [], particles: [], stars: []
};

const input = {moveX:0, moveY:0, fire:false};
let leftId=null,rightId=null,leftOrigin={x:0,y:0};

function resize(){
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  canvas.style.width = innerWidth+'px'; canvas.style.height = innerHeight+'px';
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
}
addEventListener('resize', resize); resize();

function reset(){
  Object.assign(state,{t:0,score:0,wave:1,bombs:3,bullets:[],enemies:[],enemyBullets:[],particles:[]});
  state.player = {x:innerWidth*0.5,y:innerHeight*0.8,r:16,speed:5,hp:100,maxHp:100,cooldown:0};
  state.stars = Array.from({length:80},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,s:1+Math.random()*2}));
  updateHud();
}

function updateHud(){scoreEl.textContent=state.score; waveEl.textContent=state.wave; bombEl.textContent=state.bombs; hpFill.style.width=`${(state.player.hp/state.player.maxHp)*100}%`;}

function spawnWave(){
  const count = 3 + state.wave;
  for(let i=0;i<count;i++){
    state.enemies.push({x:40+Math.random()*(innerWidth-80),y:-60-i*70,r:14,hp:20+state.wave*8,vy:1.2+state.wave*0.2,vx:(Math.random()*2-1)*1.2,shoot:80+Math.random()*80});
  }
}

function explode(x,y,c='#ffb347',n=18){ for(let i=0;i<n;i++) state.particles.push({x,y,vx:(Math.random()*2-1)*3,vy:(Math.random()*2-1)*3,l:40+Math.random()*25,c}); }

function start(){ if(state.running) return; reset(); state.running=true; msg.style.display='none'; spawnWave(); loop(); }

canvas.addEventListener('pointerdown',(e)=>{
  if(!state.running){start(); return;}
  if(e.clientX < innerWidth*0.5 && leftId===null){ leftId=e.pointerId; leftOrigin={x:e.clientX,y:e.clientY}; }
  else if(rightId===null){ rightId=e.pointerId; input.fire=true; }
});
canvas.addEventListener('pointermove',(e)=>{
  if(e.pointerId===leftId){
    const dx=e.clientX-leftOrigin.x, dy=e.clientY-leftOrigin.y; const len=Math.hypot(dx,dy)||1;
    input.moveX=Math.abs(dx)<8?0:dx/len; input.moveY=Math.abs(dy)<8?0:dy/len;
  }
});
function clearPointer(id){ if(id===leftId){leftId=null;input.moveX=input.moveY=0;} if(id===rightId){rightId=null;input.fire=false;} }
canvas.addEventListener('pointerup',(e)=>clearPointer(e.pointerId));
canvas.addEventListener('pointercancel',(e)=>clearPointer(e.pointerId));

canvas.addEventListener('dblclick',()=>useBomb());
function useBomb(){
  if(state.bombs<=0 || !state.running) return;
  state.bombs--; updateHud(); explode(state.player.x,state.player.y,'#8ef',50);
  state.enemies.forEach(en=>{en.hp-=60;});
  state.enemyBullets=[];
}

addEventListener('keydown',(e)=>{
  if(e.code==='Space') input.fire=true;
  if(e.code==='KeyB') useBomb();
});
addEventListener('keyup',(e)=>{ if(e.code==='Space') input.fire=false; });

function step(){
  state.t++;
  const p=state.player;
  p.x = Math.max(p.r,Math.min(innerWidth-p.r,p.x + input.moveX*p.speed));
  p.y = Math.max(p.r,Math.min(innerHeight-p.r,p.y + input.moveY*p.speed));
  if(input.fire && p.cooldown<=0){ state.bullets.push({x:p.x,y:p.y-20,vy:-8,r:4}); p.cooldown=8; }
  p.cooldown--;

  state.stars.forEach(s=>{s.y+=s.s;if(s.y>innerHeight){s.y=0;s.x=Math.random()*innerWidth;}});

  if(state.enemies.length===0){ state.wave++; updateHud(); spawnWave(); }

  for(const en of state.enemies){
    en.x += en.vx; en.y += en.vy;
    if(en.x<en.r||en.x>innerWidth-en.r) en.vx*=-1;
    en.shoot--; if(en.shoot<0){ en.shoot=70+Math.random()*90; const dx=p.x-en.x,dy=p.y-en.y,d=Math.hypot(dx,dy)||1; state.enemyBullets.push({x:en.x,y:en.y,vx:dx/d*3,vy:dy/d*3,r:4}); }
  }

  state.bullets.forEach(b=>b.y+=b.vy);
  state.enemyBullets.forEach(b=>{b.x+=b.vx;b.y+=b.vy;});

  for(const b of state.bullets){
    for(const en of state.enemies){
      if((b.x-en.x)**2+(b.y-en.y)**2<(b.r+en.r)**2){ b.hit=true; en.hp-=10; if(en.hp<=0){ en.dead=true; state.score+=100; explode(en.x,en.y); } }
    }
  }
  for(const b of state.enemyBullets){ if((b.x-p.x)**2+(b.y-p.y)**2<(b.r+p.r)**2){ b.hit=true; p.hp-=8; explode(p.x,p.y,'#ff6',8);} }
  for(const en of state.enemies){ if((en.x-p.x)**2+(en.y-p.y)**2<(en.r+p.r)**2){ en.dead=true; p.hp-=20; explode(en.x,en.y,'#f66',24); } }

  state.bullets = state.bullets.filter(b=>!b.hit && b.y>-20);
  state.enemyBullets = state.enemyBullets.filter(b=>!b.hit && b.y<innerHeight+20 && b.x>-20 && b.x<innerWidth+20);
  state.enemies = state.enemies.filter(e=>!e.dead && e.y<innerHeight+80);
  state.particles = state.particles.filter(pt=>--pt.l>0).map(pt=>({...pt,x:pt.x+pt.vx,y:pt.y+pt.vy,vy:pt.vy*0.98,vx:pt.vx*0.98}));

  if(p.hp<=0){ state.running=false; msg.innerHTML=`<h1>GAME OVER</h1><p>Score: ${state.score}<br>タップで再開</p>`; msg.style.display='block'; }
  updateHud();
}

function draw(){
  ctx.fillStyle='#020813'; ctx.fillRect(0,0,innerWidth,innerHeight);
  for(const s of state.stars){ ctx.fillStyle='rgba(170,220,255,.7)'; ctx.fillRect(s.x,s.y,s.s,s.s*2); }
  const p=state.player;
  ctx.save(); ctx.translate(p.x,p.y); ctx.fillStyle='#7fe8ff'; ctx.beginPath(); ctx.moveTo(0,-20); ctx.lineTo(12,16); ctx.lineTo(0,8); ctx.lineTo(-12,16); ctx.closePath(); ctx.fill(); ctx.restore();
  ctx.fillStyle='#8ef'; state.bullets.forEach(b=>{ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#ff5d66'; state.enemies.forEach(e=>{ctx.beginPath();ctx.ellipse(e.x,e.y,e.r*1.2,e.r,0,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#ffcc66'; state.enemyBullets.forEach(b=>{ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();});
  state.particles.forEach(pt=>{ctx.fillStyle=pt.c;ctx.fillRect(pt.x,pt.y,2,2);});
}

function loop(){ if(!state.running){draw(); return;} step(); draw(); requestAnimationFrame(loop); }
draw();
