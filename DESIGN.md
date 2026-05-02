# DESIGN

## 入力設計
- 相対ドラッグ方式（仮想スティック禁止）
- Input.activePointerId/startX/startY/startPlayerX/startPlayerY/sensitivity/dragging
- pointerup/cancelで必ず停止

## ゲーム状態
- mode: ready/running/warning/clear/gameover
- stage進行、4面ごとボス

## 描画設計
- Canvas2Dのみ
- 多層背景（色調切替）
- 自機/敵/弾をglow付きで描画
- flash/shake/warning演出

## 弾幕設計
- 道中: 編隊＋色分け弾
- ボスphase1放射、phase2狙い撃ち、phase3交差高速

## 安定化方針
- requestAnimationFrame + delta time
- loop内try/catch
- resizeでDPR対応
- __LT2_BOOT_OK__フラグ維持
