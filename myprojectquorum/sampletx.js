var SimpleStorage  = artifacts.require("./SimpleStorage");

module.exports = function(done) {
  console.log("Getting deployed version of SimpleStorage...")
  SimpleStorage.deployed().then(function(instance) {
    console.log("Setting value to 65...");
    return instance.set(65, {privateFor: ["4aWRAdFtSd/0hJMz1U7Arm3VWGmFCEU4RPRtTuuXr1E="]});
  }).then(function(result) {
    console.log("Transaction:", result.tx);
    console.log("Finished!");
    done();
  }).catch(function(e) {
    console.log(e);
    done();
  });
};
