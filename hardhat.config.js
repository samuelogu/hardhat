require("@nomiclabs/hardhat-waffle")
require('dotenv').config()
// const fs = require('fs')
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const privateKey = process.env.privateKey;
const infuraKey = process.env.infuraKey;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
