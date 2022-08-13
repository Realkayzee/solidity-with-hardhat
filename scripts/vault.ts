import { ethers } from "hardhat";

async function main() {
    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();
    await vault.deployed();
    console.log(`The Vault contract is deployed to: ${vault.address}`)
}  
// This to properly handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})