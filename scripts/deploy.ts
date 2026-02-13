import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  const Governor = await ethers.getContractFactory("MyGovernor");
  const governor = await Governor.deploy(await token.getAddress());
  await governor.waitForDeployment();

  console.log("Token:", await token.getAddress());
  console.log("Governor:", await governor.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
