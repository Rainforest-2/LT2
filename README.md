# SKY VECTOR ASSAULT

iPad Safari優先の縦スクロール弾幕STG（HTML/CSS/JSのみ）。

## 操作
- 画面タップ: 開始
- 相対ドラッグ: 自機移動（pointerdown時の自機座標 + 指の移動量×sensitivity）
- 自動射撃: 常時
- WPN: 武器切替（VULCAN/SPREAD/LASER）
- SKILL: ゲージ満タンで全方位スペシャル
- BOMB: 敵弾消去 + 全体ダメージ + フラッシュ

## GitHub Pages
1. push
2. Settings → Pages
3. Deploy from branch
4. branch root を公開

## 競合チェック
```bash
./tools_check_conflicts.sh
```

## 推奨環境
- iPad Safari（touch-action/pointer events最適化済み）
