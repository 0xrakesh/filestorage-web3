## Description
A Decentralized Application for storing the file using blockchain and IPFS. 

## Works
A React app get file from user, then the file is uploaded on IPFS network and store the result on blockchain.

## Installation
- Compile and Migrate the contract on blockchain network. `truffle migrate --reset`.
- Copy the compiled json file from build\contracts to app\src\hooks. `cp build\contracts\FileStorage.js app\src\hooks\FileStorage.js`.
- Navigate to app directory. `cd app`.
- Start the ganache and IPFS on local machine.
- Install the dependencies for the react app. `npm install .`.
- Start the react app. `npm start`.

## Tech stack
- Solidity for smart contract.
- Ethereum for blockchain.
- Ganache for local blockchain network.
- React.js for front-end application.
- Web3.js for act as bridge between front-end and blockchain network.
- IPFS for storing the files.
