import styled from "styled-components";
import {
  Text,
  Flex,
  Box,
  Radio,
  Skeleton,
  LinkExternal,
  ArrowForwardIcon,
  ArrowBackIcon,
} from "@pancakeswap/uikit";
import truncateHash from "../../../utils/truncateHash";
import { getBscScanLink } from "../../../utils/getBscScanLink";
import { formatAmount } from "../../../utils/formatInfoNumbers";
import { Fragment, useEffect, useMemo, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
export const ClickableColumnHeader = styled(Text)`
  cursor: pointer;
`;

export const TableWrapper = styled(Flex)`
  width: 100%;
  padding-top: 16px;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.card.background};
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding: 20px;
`;

export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`;

export const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`;

export const Break = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  width: 100%;
`;

const ResponsiveGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  align-items: center;
  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);
  padding: 0 24px;
  @media screen and (max-width: 940px) {
    grid-template-columns: 2fr repeat(4, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 2fr repeat(2, 1fr);
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 2fr 1fr;
    & > *:nth-child(5) {
      display: none;
    }
    & > *:nth-child(3) {
      display: none;
    }
    & > *:nth-child(4) {
      display: none;
    }
    & > *:nth-child(2) {
      display: none;
    }
  }
`;
const SORT_FIELD = {
  amountUSD: "amountUSD",
  timestamp: "timestamp",
  sender: "sender",
  amountToken0: "amountToken0",
  amountToken1: "amountToken1",
};

const TableLoader = () => {
  const loadingRow = (
    <TableRow>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
    </TableRow>
  );
  return (
    <>
      {loadingRow}
      {loadingRow}
      {loadingRow}
    </>
  );
};

const DataRow = ({ transaction }) => {
  const abs0 = Math.abs(transaction.amountToken0);
  const abs1 = Math.abs(transaction.amountToken1);
  const outputTokenSymbol =
    transaction.amountToken0 < 0
      ? transaction.token0Symbol
      : transaction.token1Symbol;
  const inputTokenSymbol =
    transaction.amountToken1 < 0
      ? transaction.token0Symbol
      : transaction.token1Symbol;

  return (
    <TableRow>
      <TableCell>
        <LinkExternal href={getBscScanLink(transaction.hash, "transaction")}>
          <Text>BuyBack and Burn</Text>
        </LinkExternal>
      </TableCell>
      <TableCell>
        <Text>${transaction.amountUSD}</Text>
      </TableCell>
      <TableCell>
        <Text>
          <Text>{`${abs0} ${transaction.token0Symbol}`}</Text>
        </Text>
      </TableCell>
      <TableCell>
        <Text>
          <Text>{`${abs1} ${transaction.token1Symbol}`}</Text>
        </Text>
      </TableCell>
      <TableCell>
        <LinkExternal>{truncateHash(transaction.sender)}</LinkExternal>
      </TableCell>
      <TableCell>
        <Text>
          {formatDistanceToNowStrict(
            parseInt(transaction.timestamp, 10) * 1000
          )}
        </Text>
      </TableCell>
    </TableRow>
  );
};

const BuyBackTable = ({ transactions }) => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [sortField, setSortField] = useState(SORT_FIELD.timestamp);
  const [sortDirection, setSortDirection] = useState(true);
  const [txFilter, setTxFilter] = useState(undefined);
  const sortedTransactions = useMemo(() => {
    const toBeAbsList = [SORT_FIELD.amountToken0, SORT_FIELD.amountToken1];
    return transactions
      ? Array.from(transactions)
          .slice()
          .sort((a, b) => {
            if (a && b) {
              const firstField = a[sortField];
              const secondField = b[sortField];
              const [first, second] = toBeAbsList.includes(sortField)
                ? [Math.abs(firstField), Math.abs(secondField)]
                : [firstField, secondField];
              return first > second
                ? (sortDirection ? -1 : 1) * 1
                : (sortDirection ? -1 : 1) * -1;
            }
            return -1;
          })
          .slice(10 * (page - 1), page * 10)
      : [];
  }, [transactions, page, sortField, sortDirection, txFilter]);

  // Update maxPage based on amount of items & applied filtering
  useEffect(() => {
    if (transactions) {
      console.log("ss=", transactions.length);

      const filteredTransactions = transactions;
      if (transactions.length % 10 === 0) {
        setMaxPage(Math.floor(transactions.length / 10));
      } else {
        setMaxPage(Math.floor(transactions.length / 10) + 1);
      }
    }
  }, [transactions]);

  return (
    <TableWrapper>
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "transparent" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Action
                </Text>
              </TableCell>
              <TableCell>
                {" "}
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Total Value
                </Text>
              </TableCell>
              <TableCell>
                {" "}
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Token Amount
                </Text>
              </TableCell>
              <TableCell>
                {" "}
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Token Amount
                </Text>
              </TableCell>
              <TableCell>
                {" "}
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Account
                </Text>
              </TableCell>
              <TableCell>
                {" "}
                <Text
                  color="success"
                  fontSize="12px"
                  bold
                  textTransform="uppercase"
                >
                  Time
                </Text>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions ? (
              <>
                {sortedTransactions.map((transaction, index) => {
                  if (transaction) {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <Fragment key={index}>
                        <DataRow transaction={transaction} />
                        <Break />
                      </Fragment>
                    );
                  }
                  return null;
                })}
                {sortedTransactions.length === 0 ? (
                  <Flex justifyContent="center">
                    <Text>No Transactions</Text>
                  </Flex>
                ) : undefined}
              </>
            ) : (
              <>
                <TableLoader />
                {/* spacer */}
                <Box />
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {transactions && (
        <PageButtons>
          <Arrow
            onClick={() => {
              setPage(page === 1 ? page : page - 1);
            }}
          >
            <ArrowBackIcon color={page === 1 ? "textDisabled" : "primary"} />
          </Arrow>

          <Text>
            Page {page} of {maxPage} page{" "}
          </Text>
          <Arrow
            onClick={() => {
              setPage(page === maxPage ? page : page + 1);
            }}
          >
            <ArrowForwardIcon
              color={page === maxPage ? "textDisabled" : "primary"}
            />
          </Arrow>
        </PageButtons>
      )}
    </TableWrapper>
  );
};

export default BuyBackTable;
