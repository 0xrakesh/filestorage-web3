// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract FileStorage {

    struct File {
        string name;
        string hash;
    }

    mapping(address => File[]) userFile; 

    function uploadFile(string memory _name, string memory _hash) public payable {
        File memory file = File(_name, _hash);
        userFile[msg.sender].push(file);
    }

    function getFile() public view returns(File[] memory) {
        return userFile[msg.sender];
    } 

}