require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    polygon: {
      url: "https://polygon-bor.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80001
    },
    arbitrum_goerli: {
      url: "https://arbitrum-goerli.publicnode.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 421613
    },
    optimism_goerli: {
      url: "https://optimism-goerli.publicnode.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 420
    },
  },
  etherscan: {
    apiKey: process.env.OPTIMISTIC_API_KEY
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
};
