// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "../uniswapv2/UniswapV2Pair.sol";

contract EnergyFiSwapPairMock is UniswapV2Pair {
    constructor() public UniswapV2Pair() {}
}