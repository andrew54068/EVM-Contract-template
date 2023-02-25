/* Compile And Push To Eth Network */
// import * as hre from "hardhat" 
const hre = require("hardhat");
import * as dotenv from "dotenv"
dotenv.config();

(async () => {
  const contractName = "NFT";
  const contract = hre.ethers.getContractFactory(contractName);
  console.log(`⏳ you are going to deploy contract: ${contractName}`);

  const constructorArguments: any[] = [];
  const deployedContract = await hre.ethers.deployContract(
    contractName,
    constructorArguments
  );

  await deployedContract.deployed()

  console.log(`✅ ${contractName} deployed address: ${JSON.stringify(deployedContract.address, null, '  ')}`);
  console.log(`✅ ${contractName} deployed tx: ${JSON.stringify(deployedContract.deployTransaction.hash, null, '  ')}`);
  console.log(`✅ ${deployedContract.deployTransaction.from} nonce: ${JSON.stringify(deployedContract.deployTransaction.nonce, null, '  ')}`);

  const exec = async () => {
    try {
      await hre.run("verify:verify", {
        address: deployedContract.address,
        constructorArguments,
      });
    } catch (e) {
      console.log(`💥 e: ${e}`);
      console.log(`💥 e json: ${JSON.stringify(e, null, "  ")}`);
    }
  }
  await exec()

})();
