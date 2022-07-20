import { serializeTokens } from './tokens'

const serializedTokens = serializeTokens()

const pools = [
  {
    sousId: 1,
    stakingToken: serializedTokens.slt,
    earningToken: serializedTokens.busd,
    contractAddress: {
      97: '',
      56: '0x1b8fc2245B63EC8275d94036bfa5DF376098Fd88',
    },
    isFinished: false,
  }
]

export default pools
