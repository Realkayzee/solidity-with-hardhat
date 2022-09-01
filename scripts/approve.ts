require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");


async function main() {
  let provider = {
    PrivateKey: process.env.PRIVATE_KEY as BytesLike,
    URL: process.env.INFURA_ROPSTEN_API_URL,
  };
  const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);

  // An instance of wallet creation because the contract does not have a payable deposit function
  // let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
   const _value = ethers.utils.parseEther("0.2");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  // Point of interaction with the deployed contract
  // taking in contract address and Interface of multisig
  const MULTISIG = await ethers.getContractAt("IMultisig", CONTRACTADDRESS);
  // where we instantiated the transaction after creating wallet instance
   // await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalanc", await MULTISIG.contractBalance());
  // where we check for the contract balance
    const contractBal = await MULTISIG.contractBalance();
    console.log(contractBal);
  // where we instantiated withdrawal function in our contract interaction
  //await MULTISIG.withdrawEther(_value); 

  // await MULTISIG.Approve(7);
  const [address1, address2, address3, address4, address5, address6, address7, address8] = [
    "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7",
    "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",
    "0x85f20a6924A61904AB44243C7e2c771B3bE46734",
    "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf",
    "0x5D63564EeF4657F360343196A7bd86ae18d3a92A",
    "0x12896191de42EF8388f2892Ab76b9a728189260A",
    "0x924843c0c1105b542c7e637605f95F40FD07b4B0",
    "0xB632cAf3119860599ce162Fad8753fc4198037b4"]

  await helpers.impersonateAccount(address1);
  await helpers.impersonateAccount(address2);
  await helpers.impersonateAccount(address3);
  await helpers.impersonateAccount(address4);
  await helpers.impersonateAccount(address5);
  await helpers.impersonateAccount(address6);
  await helpers.impersonateAccount(address7);
  await helpers.impersonateAccount(address8);


  const impersonateAccount1 = await ethers.getSigner(address1);
  const impersonateAccount2 = await ethers.getSigner(address2);
  const impersonateAccount3 = await ethers.getSigner(address3);
  const impersonateAccount4 = await ethers.getSigner(address4);
  const impersonateAccount5 = await ethers.getSigner(address5);
  const impersonateAccount6 = await ethers.getSigner(address6);
  const impersonateAccount7 = await ethers.getSigner(address7);
  const impersonateAccount8 = await ethers.getSigner(address8);

  await MULTISIG.connect(impersonateAccount1).withdrawEther(_value);

  await MULTISIG.connect(impersonateAccount2).Approve(8);
  await MULTISIG.connect(impersonateAccount3).Approve(8);
  await MULTISIG.connect(impersonateAccount4).Approve(8);
  await MULTISIG.connect(impersonateAccount5).Approve(8);
  await MULTISIG.connect(impersonateAccount6).Approve(8);
  await MULTISIG.connect(impersonateAccount7).Approve(8);
  await MULTISIG.connect(impersonateAccount8).Approve(8);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});