import { serializeTokens } from './tokens'

const serializedTokens = serializeTokens()

const pools = [
  {
    sousId: 1,
    stakingToken: serializedTokens.slt,
    earningToken: serializedTokens.busd,
    contractAddress: {
      97: '',
      56: '0xD1dbF594c3617FF4FAbBFf1eD49a130Dc86940c4',
    },
    isFinished: false,
  }
]

export default pools
