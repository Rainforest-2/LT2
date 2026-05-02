# DESIGN

## Scene設計
- title -> menu -> (hangar/stageSelect/settings/tutorial) -> gameplay -> result
- gameplay中 pause可能

## Input設計
- 相対ドラッグ
- pointerdown時に開始座標 + 自機座標を保存
- pointermoveでdelta*sensitivityを直接反映
- pointerup/cancelで停止

## Rendering設計
- Canvas2D + 多層背景 + glow弾
- stageごとのパレット
- warning / boss / hit feedback

## 機体/敵/ボス
- 3機体、3武器
- 敵6タイプ相当の挙動差
- ボス4種名ローテ、3フェーズ弾幕

## 保存設計
- localStorage: sensitivity, shake, flash

## 安定化
- requestAnimationFrame + delta time
- try/catch loop
- DPR対応resize
