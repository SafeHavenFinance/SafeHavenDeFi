import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useIsWindowVisible from "../../../hooks/useIsWindowVisible";
import { simpleRpcProvider } from "../../../utils/providers";
import { setBlock } from ".";
import fetchTokenTransactions from "./fetchTokenTransactions"
import {

  updateTokenTransactions,
} from "./actions";
export const usePollBlockNumber = () => {
  const timer = useRef(null);
  const dispatch = useDispatch();
  const isWindowVisible = useIsWindowVisible();

  useEffect(() => {
    if (isWindowVisible) {
      timer.current = setInterval(async () => {
        const blockNumber = await simpleRpcProvider.getBlockNumber();
        dispatch(setBlock(blockNumber));
      }, 6000);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [dispatch, timer, isWindowVisible]);
};

export const useBuyBack = () => {
  return useSelector((state) => state.buyback);
};
export const useTokenTransactions = (address) => {
  const dispatch = useDispatch();
  const buyback = useSelector((state) => state.buyback)

  const { transactions } = buyback
  const [error, setError] = useState(false)
  console.log("buyback = ", transactions)
  useEffect(() => {
    const fetch = async () => {
      console.log("asdf");
      const { error: fetchError, data } = await fetchTokenTransactions(address)
      console.log("error = ", error)
      console.log("data = ", data)
      if (fetchError) {
        setError(true)
      } else if (data) {
        dispatch(updateTokenTransactions({ tokenAddress: address, transactions: data }))
      }
    }
    if ( !error) {
      fetch()
    }
  }, [address, dispatch, error, transactions])

  return transactions
}