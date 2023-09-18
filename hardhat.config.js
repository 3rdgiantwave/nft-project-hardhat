require("@nomicfoundation/hardhat-toolbox");

const fs = require("fs");
let mnemonicChromePhrase = fs.readFileSync(".secret-chrome").toString().trim();
const maticProjectId = fs.readFileSync(".matic").toString().trim();
const polygonscanApiKey = fs.readFileSync(".polygonscan").toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    matic: {
     // provider: () => new HDWalletProvider(mnemonicChromePhrase, `https://rpc-mumbai.maticvigil.com/v1/${maticProjectId}`),
      //host: 'https://rpc-mumbai.matic.today',
      url:`https://rpc-mumbai.maticvigil.com/v1/${maticProjectId}`,
      accounts:{
        mnemonic: mnemonicChromePhrase,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  etherscan: {
    //apiKey: fs.readFileSync(".etherscan").toString().trim(),
    apiKey: {
      polygonMumbai: polygonscanApiKey
    }
  },

};
