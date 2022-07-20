import { gql } from "graphql-request";
import { mapBurns, mapMints, mapSwaps } from "./helper";

import { infoClient } from "../../../utils/graphql";

/**
 * Data to display transaction table on Token page
 */

const SWAP0_TRANSACTION = gql`
  query tokenTransactions($address: Bytes!, $skip: Int!) {
    swapsAs0: swaps(
      first: 100
      skip: $skip
      orderBy: timestamp
      orderDirection: desc
      where: {
        token0: $address
        to: "0x000000000000000000000000000000000000dead"
      }
    ) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      to
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
  }
`;

const SWAP1_TRANSACTION = gql`
  query tokenTransactions($address: Bytes!, $skip: Int!) {
    swapsAs1: swaps(
      first: 100
      skip: $skip
      orderBy: timestamp
      orderDirection: desc
      where: {
        token1: $address
        to: "0x000000000000000000000000000000000000dead"
      }
    ) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      to
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
  }
`;


const fetchTokenTransactions = async (address) => {
  console.log("33333");
  try {
    let swaps0 = [];
    let skip = 0;
    while (true) {
      const data = await infoClient.request(SWAP0_TRANSACTION, {
        address,
        skip,
      });
      skip += 100;
      const sw0 = data.swapsAs0.map(mapSwaps);
      swaps0 = swaps0.concat(sw0);
      if (sw0.length < 100) {
        break;
      }
    }

    let swaps1 = [];
    skip = 0;
    while (true) {
      const data = await infoClient.request(SWAP1_TRANSACTION, {
        address,
        skip,
      });
      skip += 100;
      const sw1 = data.swapsAs1.map(mapSwaps);
      swaps1 = swaps1.concat(sw1);
      if (sw1.length < 100) {
        break;
      }
    }

    let arr = [...swaps0, ...swaps1]
    arr.sort(function(a,b){
      if(a.timestamp >= b.timestamp){
        return 1;
      }else{
        return -1;
      }
    })
    return {
      data: arr,
      error: false,
    };
  } catch (error) {
    console.error(`Failed to fetch transactions for token ${address}`, error);
    return {
      error: true,
    };
  }
};

export default fetchTokenTransactions;
