// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

/// @title A Vault for Users
/// @author kayzee
/// @dev All functions are currently implemented without side effect
/// @dev The contract takes in users deposit and withdrawal in eth 

contract Vault{


    mapping(address => uint256) UsersBalance;
/// @dev function responsible for user deposit
    function deposit(address _addr) public payable {
        require(_addr != address(0)); /// @dev sanity check
        UsersBalance[_addr] += msg.value;
    }
/// @dev function responsible for user withdrawal
    function withdraw() public {
        require(UsersBalance[msg.sender] > 0, "You have no money in your valut");
        address user = msg.sender;
        uint value = UsersBalance[msg.sender];
        UsersBalance[msg.sender] = 0; /// @dev protection against reentrancy attack
        payable(user).transfer(value);
    }

    /// @dev a function that returns contract balance
    function contractBalance() public view returns(uint){
        return address(this).balance;
    }

}