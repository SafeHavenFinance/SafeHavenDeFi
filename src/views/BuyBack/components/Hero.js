import React from "react";
import { Heading } from "@pancakeswap/uikit";
import PageHeader from "../../../components/PageHeader";

const Hero = () => {
  return (
    <PageHeader>
      <Heading
        as="h1"
        scale="xxl"
        color="text"
        mb="16px"
        style={{ userSelect: "none" }}
      >
        BuyBack
      </Heading>
      <Heading scale="lg" color="text" style={{ userSelect: "none" }}>
        BuyBack history of Haven
      </Heading>
    </PageHeader>
  );
};

export default Hero;
