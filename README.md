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
