import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import MostPopularImage from "../assets/images/most-popular-image.png";
import Heading from "../components/Heading";
import Text from "../components/Text";
import MostPopularMeat from "../assets/images/most-popular-meat.png";

const MostPopular = () => {
  return (
    <>
      <div id="mostPopularSection" className="font-primary mb-5">
        <Container>
          <Flex className={'items-center space-x-7 justify-between bg-flashDealBgColor'}>
            <div className="most-popular-img-wrapper ">
              <Image imgSrc={MostPopularImage} className={'w-full max-w-2xl'}/>
            </div>
            <div className="most-popular-right-content w-[30%] text-center">
              <Heading
                as={"h2"}
                text={"Most Popular"}
                className={
                  "mb-5 font-bold text-2xl text-textColor leading-8 tracking-[0.1px]"
                }
              />
              <Text
                as={"p"}
                text={
                  "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                }
                className={
                  "max-w-72 mx-auto text-secondTextColor text-sm leading-5 tracking-[0.2px]"
                }
              />
              <Image imgSrc={MostPopularMeat} className={'mx-auto'}/>
              <Text
                as={"p"}
                text={"English Department"}
                className={
                  "mb-3 text-secondTextColor font-bold text-sm leading-6 tracking-[0.2px]"
                }
              />
              <Text
                as={"span"}
                text={"$16.48"}
                className={"mb-3 text-mutedColor font-bold leading-6 tracking-[0.1px]"}
              />
              <Text
                as={"span"}
                text={"$6.48"}
                className={"ml-2 text-secondaryColor font-bold leading-6 tracking-[0.1px]"}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default MostPopular;
