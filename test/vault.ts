import { ethers } from "hardhat";


describe("Vault", function(){
    it("Should deposit, check contract balance and withdraw", async function(){
        const [ owner, otherAccount] = await ethers.getSigners();
        const Vault = await ethers.getContractFactory("Vault");
        const vault = await Vault.deploy();
        const amount = ethers.utils.parseEther("1");

        const setDeposit = await vault.deposit(owner.address, {value: amount});

        await setDeposit.wait();

        const contractBalance = await ethers.provider.getBalance(vault.address);

        console.log(contractBalance);

        const setWithdraw = await vault.withdraw();
        await setWithdraw.wait();

        const contractBalanceAfterWithdraw = await ethers.provider.getBalance(vault.address);

        console.log(contractBalanceAfterWithdraw);

        
    })
})