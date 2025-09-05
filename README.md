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