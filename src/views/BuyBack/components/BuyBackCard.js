import React from "react";
import styled from "styled-components";
import { Text, Skeleton } from "@pancakeswap/uikit";


const StyledCard = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.card.background};
  padding: 40px;
  border-radius: 32px;
  width: 100%;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 48%;
    margin-bottom: 0;
  }
`;

const Title = styled(Text)`
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: bold;
`;

const Value = styled(Text)`
  font-size: 18px;
  font-weight: 22px;
`;

const BuyBackCard = ({noOfBuybackAndBurn }) => {
  return (
    <StyledCard>
      <Title color="text">Total buyback and burn</Title>
        <Value color="lightText">
          {noOfBuybackAndBurn || noOfBuybackAndBurn === 0  ? (noOfBuybackAndBurn + " $HAVEN") : <Skeleton width={100} />}
        </Value>
    </StyledCard>
  );
};

export default BuyBackCard;
