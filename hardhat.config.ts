require("dotenv").config({path: ".env"});
import "@nomiclabs/hardhat-ethers";




const GOERLI_API_URL = process.env.ALCHEMY_GOERLI_API_URL;

const PRIVATE = process.env.PRIVATE_KEY;

const ROPSTEN_URL_API = process.env.INFURA_ROPSTEN_API_URL;

const MAINET_URL_API = process.env.MAINNET_API_URL;


module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: MAINET_URL_API,
      }
    },
    goerli: {
      url: GOERLI_API_URL,
      accounts: [PRIVATE],
    },
    ropsten: {
      url: ROPSTEN_URL_API,
      accounts: [PRIVATE]
    }
  }
}