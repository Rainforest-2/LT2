# AEGIS SKYDRIVE

GitHub Pagesで動く、iPad Safari最適化の縦スクロール弾幕STG。

## 概要
- タイトル/メニュー/ハンガー/ステージ選択/設定/チュートリアル/リザルトを実装
- 相対ドラッグ操作 + 自動射撃
- 3機体、3武器、SKILL、BOMB、ボスフェーズ

## 操作
- 画面ドラッグ: 相対移動（指を止めると機体停止）
- WPN: 武器切替
- SKILL: ゲージ満タンで発動
- BOMB: 弾消し＋全体ダメージ
- PAUSE: 一時停止

## メニュー
- Start Mission
- Hangar
- Stage Select
- Settings（感度/Shake/Flash保存）
- How to Play

## ステージ
- Stage 1-6テーマ色切替、4面ごとボス

## 公開
1. push
2. GitHub Settings > Pages
3. branch rootを公開

## 競合チェック
```bash
./tools_check_conflicts.sh
```

## 備考
- 画像生成は未使用。Canvas procedural描画で代替。
