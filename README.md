# Lightning Sky Assault（LT2強参照・iPad特化）

LT2系のテンポ感・弾幕密度・ウェーブ進行・ボス制を強く意識して、
GitHub Pagesだけで動く**本気仕様の2D戦闘機シューティング**を実装。

## 主な設計
- **操作（iPad前提）**
  - 左画面ドラッグ: 8方向移動
  - 右画面長押し: 連射
  - 右下 `BOMB`: 全体攻撃＋敵弾消し
  - 右下 `WPN`: 武器切替（Vulcan / Spread / Laser）
- **戦闘システム**
  - HP + Shield 2層耐久
  - スコア倍率（連続撃破で上昇）
  - ドロップ（スコア/シールド/ボム/武器）
  - エース機・通常機の差分弾パターン
- **進行**
  - Stage制（4面ごとボス）
  - ボスは周回移動＋放射＋狙い撃ちの複合弾幕
  - 機数制（ライフ）

## 技術
- 純HTML/CSS/JS
- Canvas 2D描画
- requestAnimationFrameゲームループ
- 追加ライブラリ不要

## GitHub Pages公開
1. push
2. Settings → Pages
3. Deploy from branch
4. Branch: `work` / root
5. 公開URLをiPad Safariで開く

## 次段階（プロ水準拡張）
- 敵編隊のスクリプト化（S字/急降下/包囲）
- 武器の育成段階と機体ごとの性能差
- ボス多段フェーズ（部位破壊）
- BGM/SE・ヒットストップ・画面シェイク
