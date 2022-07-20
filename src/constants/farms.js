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
    strat: "0xb7ab5Eb548fd978d90CAF23d48069E541877584E",
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
    strat: "0x421A3d59610270F32aB5042AA0B6c94Bc6a0238D",
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
    strat: "0xe9aC111B9cc68E4FbC5a92B1781cB40Ba66F4d1c",
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
    strat: "0x9875bB549013Ae4fA7d774c484A2158944724BBb",
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
    strat: "0x613586Cd289aC05653f0CF239D945E8ca1561E2d",
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
    strat: "0xF64c6AD16B08696366b72cA4638aA3d89A7A7e65",
  },
];

export default farms;
