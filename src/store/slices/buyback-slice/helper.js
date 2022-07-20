
export const mapMints = (mint) => {
    return {
      type: 0,
      hash: mint.id.split('-')[0],
      timestamp: mint.timestamp,
      sender: mint.to,
      token0Symbol: mint.pair.token0.symbol,
      token1Symbol: mint.pair.token1.symbol,
      token0Address: mint.pair.token0.id,
      token1Address: mint.pair.token1.id,
      amountUSD: parseFloat(mint.amountUSD),
      amountToken0: parseFloat(mint.amount0),
      amountToken1: parseFloat(mint.amount1),
    }
  }
  
  export const mapBurns = (burn) => {
    return {
      type: 1,
      hash: burn.id.split('-')[0],
      timestamp: burn.timestamp,
      sender: burn.sender,
      token0Symbol: burn.pair.token0.symbol,
      token1Symbol: burn.pair.token1.symbol,
      token0Address: burn.pair.token0.id,
      token1Address: burn.pair.token1.id,
      amountUSD: parseFloat(burn.amountUSD),
      amountToken0: parseFloat(burn.amount0),
      amountToken1: parseFloat(burn.amount1),
    }
  }
  export const mapSwaps = (swap) => {
    return {
      type: 2,
      hash: swap.id.split('-')[0],
      timestamp: swap.timestamp,
      sender: swap.from,
      token0Symbol: swap.pair.token0.symbol,
      token1Symbol: swap.pair.token1.symbol,
      token0Address: swap.pair.token0.id,
      token1Address: swap.pair.token1.id,
      amountUSD: parseFloat(swap.amountUSD),
      amountToken0: parseFloat(swap.amount0In) - parseFloat(swap.amount0Out),
      amountToken1: parseFloat(swap.amount1In) - parseFloat(swap.amount1Out),
    }
  }