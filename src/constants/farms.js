import { serializeTokens } from "./tokens";

const serializedTokens = serializeTokens();

const farms = [
  {
    pid: 0,
    lpSymbol: "SLT-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0xd45ca0E8a8d977D906D1959D3B0DBab298aB41EC",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0x43439eee1805351cD639d734E1B33e90A61B7F23",
  },
  {
    pid: 1,
    lpSymbol: "SLT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0xBdEe59544B4EcDB326Be39B309f8Ab2E1c98777C",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.busd,
    strat: "0xab6048a033F9a8Ae43674578715Cbe18e2334d14",
  },
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
    pid: 3,
    lpSymbol: "USDT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
    strat: "0x626a7bA0dFAB0034f3365073B7B4CDee8a95a4CD",
  },
  {
    pid: 4,
    lpSymbol: "USDC-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1",
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
    strat: "0x6C2Ca8Bf4c62e2decC0fB48dc3DFdD3Eeb3cC268",
  },
  {
    pid: 5,
    lpSymbol: "CAKE-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
    strat: "0x4F5F49e404cFDa8E3d0195e3f6B884754De5e479",
  },
];

export default farms;
