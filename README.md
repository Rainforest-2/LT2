# AEGIS SKYDRIVE

## 概要
GitHub Pagesで動作する、iPad Safari向け縦スクロールSTG。

## 重要修正
- タイトルでタップしても進まない問題を修正（pointerdown/touchstart/clickの複線化）
- Scene管理を `boot/title/mainMenu/hangar/settings/gameplay/pause/result/gameOver` で整理

## 操作
- gameplay中: 相対ドラッグ移動
- WPN: 武器切替
- SKILL: ゲージ満タン発動
- BOMB: 弾消去＋全体ダメージ

## メニュー
- START MISSION
- HANGAR
- SETTINGS
- HOW TO PLAY
- CREDITS

## 公開
1. push
2. GitHub Pages設定でbranch root公開

## チェック
```bash
./tools_check_conflicts.sh
node --check main.js
```
