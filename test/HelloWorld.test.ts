import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("HelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners()

    const HelloWorld = await ethers.getContractFactory("HelloWorld")
    const helloWorld = await HelloWorld.deploy()

    return { helloWorld, owner, otherAccount }
  }

  it("Should get message", async function () {
    const { helloWorld, owner, otherAccount } = await loadFixture(deployFixture)
    const message = await helloWorld.message()
    expect(message).to.equal("Hack the Planet!")
  })

  it("Should set message", async function () {
    const { helloWorld, owner, otherAccount } = await loadFixture(deployFixture)
    await helloWorld.setMessage("Hello World")
    const message = await helloWorld.message()
    expect(message).to.equal("Hello World")
  })
})
