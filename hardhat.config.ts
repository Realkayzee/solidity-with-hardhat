require("dotenv").config({path: ".env"});
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";




const GOERLI_API_URL = process.env.ALCHEMY_GOERLI_API_URL;

const PRIVATE = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    goerli: {
      url: GOERLI_API_URL,
      accounts: [PRIVATE],
    }
  }
};
//0x9DC1f831FA2cb438C07e1a3F3BA0261F7c72eDB8