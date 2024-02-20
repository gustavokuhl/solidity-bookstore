import { ethers } from "hardhat"

async function main() {
  const bookDatabase = await ethers.deployContract("BookDatabase")

  await bookDatabase.waitForDeployment()

  const address = await bookDatabase.getAddress()

  console.log(`Deploy finished at ${address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
