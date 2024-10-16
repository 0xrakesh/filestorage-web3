const FileStorage = artifacts.require("./FileStorage.sol");

module.exports = function(deployed) {
    deployed.deploy(FileStorage);
}