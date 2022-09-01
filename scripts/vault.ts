import { ethers } from "hardhat";

async function main() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Vault = await ethers.getContractAt("Vault", );
    const vault = await Vault.deploy();
    await vault.deployed();
    console.log(`The Vault contract is deployed to: ${vault.address}`)
    console.log(owner);
}  
// This to properly handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})