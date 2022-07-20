import { serializeTokens } from "./tokens";

const serializedTokens = serializeTokens();

const pools = [
  {
    pid: 2,
    lpSymbol: "WBNB-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
    strat: "0x826e77074eD5E5d11d185CA601Afd0af38Cc0a4F",
  },
 
  {
    pid: 9,
    stakeSymbol: "SLT",
    lpAddresses: {
      97: "",
      56: "0x41a7b4f3bf16b710f1ba14c51c32fc0d6e6bab2d",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0x8B422Ef96979f8F2bA3D720a78C64dad443DF332",
  },
  {
    pid: 13,
    stakeSymbol: "WBNB",
    lpAddresses: {
      97: "",
      56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.wbnb,
    strat: "0xed8bfa42BBF7de963068AC807bE72d73a61C980e",
  },
  {
    pid: 8,
    stakeSymbol: "BUSD",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
    strat: "0x64a98754c5B0f043E3d18f89772e2108a1B413bA",
  },
];

export default pools;
