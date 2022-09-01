require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");


async function main() {
    const daiToken = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const quickCashToken = "0xDD2955B7b00cFcDE3C49dc212709a97Da182eF3e";
    const uniRouter = "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a";
    

    //user

    const QCUser = "0x854464cd68d68C688B58FdB52eFd9586b32edAfC";

    await helpers.impersonateAccount(QCUser);
    const impersonateAccount1 = await ethers.getSigner(QCUser);


    const Uniswap = await ethers.getContractAt("IUniswap", uniRouter, impersonateAccount1);

    const QC = await ethers.getContractAt("IERC20", quickCashToken, impersonateAccount1);
    const DAI = await ethers.getContractAt("IERC20", daiToken);


    const Bal = await QC.balanceOf(QCUser);
    const BalDai = await DAI.balanceOf(QCUser);
    console.log(`balance before swapping QC: ${Bal} and for DAI: ${BalDai}`);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });