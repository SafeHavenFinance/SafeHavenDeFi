import { serializeTokens } from "./tokens";

const serializedTokens = serializeTokens();

const farms = [
  {
    pid: 0,
    lpSymbol: "SLT-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x41A7B4f3BF16B710f1Ba14c51c32Fc0D6e6Bab2d",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.wbnb,
    strat: "0xB05141717A188547429B909f70B327CB44D841a0",
  },
  {
    pid: 1,
    lpSymbol: "SLT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x5852C4fabeCf79FCfEA8F5559019c086C08B1CEB",
    },
    token: serializedTokens.slt,
    quoteToken: serializedTokens.busd,
    strat: "0xd495097b5fD3CB1b98D9Cf16fa32bD20dBe05cc9",
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
    strat: "0x826e77074eD5E5d11d185CA601Afd0af38Cc0a4F",
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
    strat: "0x913cA633a3bFFBa9d1265c263597e8d2D612812D",
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
    strat: "0x07B1e283D3904DB44B08db0Fd5fe27f17F6E60D3",
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
    strat: "0xCC5572e251b4BB27dcF6802F42B70842Ff19Bf17",
  },
  {
    pid: 10,
    lpSymbol: "WBNB-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
    strat: "0x25f1d637E43C6995ce39bB0fc6Ce942cd618c681",
  },
  {
    pid: 11,
    lpSymbol: "USDT-BUSD LP",
    lpAddresses: {
      97: "",
      56: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
    strat: "0xaA853dbBb4c99b5f63ec71eF265d0D78f26698B7",
  },
  {
    pid: 12,
    lpSymbol: "CAKE-WBNB LP",
    lpAddresses: {
      97: "",
      56: "0x0eD7e52944161450477ee417DE9Cd3a859b14fD0",
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
    strat: "0x9305AbA88c44286f7E7B545e2a94D08544e8F342",
  },
];

export default farms;
