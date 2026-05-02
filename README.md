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


## LT2リサーチ反映メモ
- 1機につき複数武器・スペシャル（App Store表記）
- 旧式danmaku寄りの弾幕密度、ボス重視（App Store / GameFAQs / Metacritic記載）
- ステージ道中→ボスの王道ループ（レビュー群）
# Sky Strike LT2 (GitHub Pages向け)

`Lightning fighter 2`系の縦スクロール戦闘機ゲーム体験を参考にした、
**iPadタッチ操作優先**のシンプルなブラウザゲーム設計・実装です。

## 仕様（設計要点）
- **プラットフォーム:** GitHub Pages (静的ホスティング)
- **入力:** タッチ操作（iPad）
  - 左半分ドラッグ: 自機移動
  - 右半分長押し: 連射
  - ダブルタップ: ボム
- **ゲームループ:** `requestAnimationFrame`
- **ステージ設計:** Wave制（敵数・耐久・弾速が段階増加）
- **戦闘要素:**
  - 自機HP
  - 敵撃破スコア
  - ボムで全体攻撃＋弾消し
  - 衝突ダメージ
- **表示:** Canvas 2D + HUD DOMオーバーレイ

## ファイル構成
- `index.html` : UI/HUD と Canvas
- `main.js` : 入力・ゲームロジック・描画

## GitHub Pages公開手順
1. GitHubにpush
2. Repoの **Settings → Pages** を開く
3. **Deploy from a branch** を選択
4. Branchを `work`（または公開対象）/`root` に設定
5. 保存後、表示されるURLをiPad Safariで開く

## 追加改善候補
- ボス戦と多段攻撃パターン
- パワーアップ（ショット強化、シールド、追尾弾）
- SE/BGM
- スマホ向け仮想スティックUI可視化
