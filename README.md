<<<<<<< HEAD
# BASE Mini APP

Farcaster Frame対応のBASE Mini APPです。Base Japan主催のハンズオンプログラム用に開発されています。

## 機能

### Phase 1 (現在) ✅
- [x] 基本的な「こんにちは」ボタン機能
- [x] Farcaster Frame対応の基本構造
- [x] Base Sepolia testnet設定

### Phase 2 (予定)
- [ ] Walletによる認証ログイン
- [ ] Base Sepolia testnetとの連携

### Phase 3 (予定)  
- [ ] Walletを使ったサイトへの寄付機能
- [ ] Walletを使った投げ銭機能

## 技術スタック

- **Framework**: Next.js 13.5
- **Styling**: Tailwind CSS + shadcn/ui
- **Blockchain**: Base Sepolia Testnet
- **Deployment**: Vercel
- **Frame**: Farcaster Frame

## セットアップ

1. 環境変数の設定
```bash
cp .env.example .env.local
```

2. 必要な環境変数を設定
- `BASE_RPC_URL`: Base mainnet RPC URL
- `BASE_SEPOLIA_RPC_URL`: Base Sepolia testnet RPC URL  
- `COINBASE_API_KEY`: Coinbase Developer Platform API key

3. 開発サーバーの起動
```bash
npm run dev
```

## Farcaster Frame対応

- Manifest: `/.well-known/farcaster.json`
- Webhook: `/api/webhook`

## デプロイ

Vercelでのデプロイを想定しています。

```bash
npm run build
```

## 今後の開発予定

1. `npm create onchain@latest` を使用したonchain機能の追加
2. `npx create-onchain --manifest` によるFarcaster認証の実装
3. Base Sepoliaでのスマートコントラクトデプロイ

## 参考資料

- [Base Documentation](https://docs.base.org/get-started/base)
- [Farcaster Frames](https://docs.farcaster.xyz/learn/what-is-farcaster/frames)
=======
# Farcaster MiniApp - Hello Button

シンプルなFarcaster Frame対応のミニアプリです。

## 機能
- ボタンクリックで「こんにちは」メッセージを表示
- Farcaster Frame仕様に完全準拠
- レスポンシブデザイン

## Vercelデプロイ手順

1. **GitHubリポジトリの作成**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/farcaster-miniapp.git
   git push -u origin main
   ```

2. **Vercelでのデプロイ**
   - [Vercel](https://vercel.com) にアクセス
   - GitHubアカウントでログイン
   - "New Project" をクリック
   - GitHubリポジトリを選択
   - "Deploy" をクリック

3. **デプロイ後の設定**
   - デプロイ完了後、Vercelから提供されるURLを確認
   - `index.html` の `fc:frame:post_url` を実際のVercel URLに更新

## Farcasterでのテスト

1. **Frame Validator**
   - [Warpcast Frame Validator](https://warpcast.com/~/developers/frames)
   - デプロイしたURLを入力してテスト

2. **Warpcastで投稿**
   - WarpcastでURLを投稿
   - Frameとして表示されることを確認

## ローカル開発

```bash
npm install
npm run dev
```

## API エンドポイント

- `/api/frame` - Farcaster Frame API
  - GET: 初期Frame表示
  - POST: ボタンクリック処理
>>>>>>> 62fb4d2 (second commit)
