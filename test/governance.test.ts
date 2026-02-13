import { expect } from "chai";
import { ethers } from "hardhat";

describe("Governance", function () {

  it("Should deploy contracts", async function () {
    const Token = await ethers.getContractFactory("GovernanceToken");
    const token = await Token.deploy();
    expect(await token.totalSupply()).to.equal(1000000n * 10n**18n);
  });

});
