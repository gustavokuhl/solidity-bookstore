// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string public message = "Hack the Planet!";

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
