const helloworld = artifacts.require("helloworld");
const helloworldPermanent = artifacts.require("helloworldPermanent");
module.exports = function(deployer) {
   
    deployer.deploy(helloworld, "hello world constructor").then( async () => {
        let instance = await helloworld.deployed();
        let message = instance.message();
        return deployer.deploy(helloworldPermanent, message)
    });
};