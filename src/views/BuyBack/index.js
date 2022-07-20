import Hero from "./components/Hero";
import Page from "../../components/Layout/Page";
import styled from "styled-components";
import { Flex } from "@pancakeswap/uikit";
import BuyBackCard from "./components/BuyBackCard";
import BuyBackTable from "./components/BuyBackTable";
import Card from "./components/Card";
import {
  useBuyBack,
  useTokenTransactions,
} from "../../store/slices/buyback-slice/hooks";
import { useWeb3React } from "@web3-react/core";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import Web3 from "web3";
import { useState, useEffect } from "react";
const CardBox = styled(Flex)`
  margin-bottom: 24px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

function BuyBack() {
  const { transactions } = useTokenTransactions(
    "0x9cae753b661142ae766374cefa5dc800d80446ac"
  );
  console.log("transcations = ", transactions);
  let noOfBuybackAndBurn = null;

  if (transactions) {
    noOfBuybackAndBurn = 0;
    transactions.forEach((transaction) => {
      noOfBuybackAndBurn += Math.abs(transaction.amountToken0);
    });
  }

  return (
    <>
      <Hero />
      <Page>
        <CardBox justifyContent="space-between">
          <BuyBackCard noOfBuybackAndBurn={noOfBuybackAndBurn} />
        </CardBox>
        <BuyBackTable transactions={transactions}></BuyBackTable>
      </Page>
    </>
  );
}
export default BuyBack;
