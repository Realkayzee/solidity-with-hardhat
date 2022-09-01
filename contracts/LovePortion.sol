// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ERC20TOKEN is ERC20("Love Portion", "LP") {

    constructor(address _addr){
        _mint(_addr, 1000000e18);
    }
}