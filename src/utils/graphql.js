import { INFO_CLIENT } from '../constants/endpoints'
import { GraphQLClient } from 'graphql-request'
export const getGQLHeaders = (endpoint) => {
    if (endpoint === INFO_CLIENT) {
      return {
        'X-Sf':
          process.env.NEXT_PUBLIC_SF_HEADER ||
          // hack for inject CI secret on window
          (typeof window !== 'undefined' &&
            // @ts-ignore
            window.sfHeader),
      }
    }
    return undefined
  }
export const infoClient = new GraphQLClient(INFO_CLIENT, { headers: getGQLHeaders(INFO_CLIENT) })