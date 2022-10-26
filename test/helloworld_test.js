const helloworld = artifacts.require("helloworld");

contract("helloworld", accounts => {
    it("contructor should set the message correctly",  async () => {
        let instance = await helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "hello world constructor");
    })
    it("owner should be accounts[0]", async() => {
        let instance = await helloworld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0])
    })
})