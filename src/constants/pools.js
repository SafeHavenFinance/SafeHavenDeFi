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
    pid: 6,
    stakeSymbol: "SLT",
    lpAddresses: {
      97: "",
      56: "0xd45ca0E8a8d977D906D1959D3B0DBab298aB41EC",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0x0265b31d31FeC00778C5d8F19C08697e52Fe7AF0",
  },
  {
    pid: 7,
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
    strat: "0x9620fe358aEd1e6ed9C476A7a0F2f9146bC5dcAB",
  },
];

export default pools;
