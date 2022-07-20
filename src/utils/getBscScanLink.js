import { ChainId } from '@pancakeswap/sdk'
const BASE_BSC_SCAN_URLS = {
    [ChainId.MAINNET]: 'https://bscscan.com',
    [ChainId.TESTNET]: 'https://testnet.bscscan.com',
  }
export function getBscScanLink(
    data,
    type,
    chainIdOverride
  ) {
    const chainId = chainIdOverride || 56
    switch (type) {
      case 'transaction': {
        return `${BASE_BSC_SCAN_URLS[chainId]}/tx/${data}`
      }
      case 'token': {
        return `${BASE_BSC_SCAN_URLS[chainId]}/token/${data}`
      }
      case 'block': {
        return `${BASE_BSC_SCAN_URLS[chainId]}/block/${data}`
      }
      case 'countdown': {
        return `${BASE_BSC_SCAN_URLS[chainId]}/block/countdown/${data}`
      }
      default: {
        return `${BASE_BSC_SCAN_URLS[chainId]}/address/${data}`
      }
    }
  }