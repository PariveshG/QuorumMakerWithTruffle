var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(SimpleStorage, 42  , {privateFor: ["4aWRAdFtSd/0hJMz1U7Arm3VWGmFCEU4RPRtTuuXr1E="]})
};
