import { ethers } from "hardhat"

async function main() {
  const lock = await ethers.deployContract("BookDatabase")

  await lock.waitForDeployment()

  console.log("Deploy finished!")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
