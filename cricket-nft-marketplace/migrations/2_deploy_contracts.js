const CricketCollectible = artifacts.require("CricketCollectible");
module.exports = function (deployer) {
  deployer.deploy(CricketCollectible);
};