// Defining bytecode and abi from original contract on mainnet to ensure bytecode matches and it produces the same pair code hash
// const {
//   bytecode,
//   abi,
// } = require("../abi/UniswapV2Factory.json");

module.exports = async function ({
  ethers,
  getNamedAccounts,
  deployments,
  getChainId,
}) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  let dev ="0xa155D12C5AB84b9b8B6A1cC714cfE911e29f6D9b"

  await deploy("UniswapV2Factory", {
    from: deployer,
    args: [dev],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["UniswapV2Factory", "AMM"];
