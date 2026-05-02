# DESIGN

## Scene設計
boot -> title -> mainMenu -> (hangar/settings/how/credits) -> gameplay -> result/gameOver

## Input設計
- 相対ドラッグ方式
- pointerdownでstart finger/player位置保存
- pointermoveで delta*sensitivity を player に直適用
- pointerup/cancelで停止

## UI設計
- styles.cssへ分離
- ガラス風パネル + ネオン線
- gameplay中HUDと右下操作UI

## Rendering
- Canvas2D
- 敵6タイプは形状分離（丸/楕円禁止）
- ボス2種名ローテ + 3フェーズ
- warning演出、glow弾

## 保存
- localStorage: difficulty/sensitivity/shake/flash/hitbox/quality/volume
