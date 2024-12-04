import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import FlashDealOne from "../assets/images/flash-deal-one.png";
import FlashDealTwo from "../assets/images/flash-deal-two.png";
import FlashDealThree from "../assets/images/flash-deal-three.png";

const FlashDeal = () => {
  return (
    <>
      <div id="flashDealSection" className="py-20 bg-flashDealBgColor">
        <Container>
          <Flex className={'justify-between'}>
            <Image imgSrc={FlashDealOne} />
            <Image imgSrc={FlashDealTwo} />
            <Image imgSrc={FlashDealThree} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default FlashDeal;
