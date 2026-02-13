import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
    ],
  },
  paths: {
    tests: "test",
    sources: "contracts",
    scripts: "scripts",
  },
};

export default config;
