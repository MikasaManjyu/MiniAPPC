// BASE Mini APP Configuration
export const config = {
  // Network Configuration
  networks: {
    base: {
      name: 'Base',
      rpcUrl: process.env.BASE_RPC_URL || 'https://mainnet.base.org',
      chainId: 8453,
    },
    baseSepolia: {
      name: 'Base Sepolia',
      rpcUrl: process.env.BASE_SEPOLIA_RPC_URL || 'https://sepolia.base.org',
      chainId: 84532,
    }
  },
  
  // Contract Addresses (to be updated)
  contracts: {
    counter: process.env.COUNTER_CONTRACT_ADDRESS || '',
  },
  
  // App Configuration
  app: {
    name: 'BASE Mini APP',
    description: 'Farcaster Frame対応のBASE Mini APP',
    version: '1.0.0',
  },
  
  // Feature Flags
  features: {
    walletAuth: false,      // Phase 2で有効化
    donations: false,       // Phase 3で有効化
    tipping: false,         // Phase 3で有効化
  }
};

export default config;