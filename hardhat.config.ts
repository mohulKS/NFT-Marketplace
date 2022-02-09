require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "8o-8xnS9th0VuAic9rG_Hd3PBre13aym"

module.exports = {
  networks: {
    hardhat: {
      chainid: 80001
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
