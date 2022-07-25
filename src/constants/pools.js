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
    strat: "0xF2A871b11f2A5f5B5554FF8fC461321b35493012",
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
    strat: "0x498166EBd8cA3bAE11FfDdaCC856FE318333Cfd4",
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
    strat: "0x799044Fec97b74E08D781a6Fa953849fBb3E5656",
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
    strat: "0xCEA45Ad4e85C1B9A480C62b8299b1bD82E60619c",
  },
];

export default pools;
