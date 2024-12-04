import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Text from "../components/Text";
import Button from "../components/Button";

const Banner = () => {
  return (
    <>
      <div
        id="bannerSection"
        className="pt-56 pb-40 bg-bannerBackground bg-cover bg-center bg-no-repeat font-primary "
      >
        <Container>
          <div className="banner-content font-primary text-center text-white">
            <Heading
              as={"h1"}
              text={"GROCERIES DELIVERY"}
              className={
                "mb-6 font-bold text-6xl tracking-[0.2px] leading-[80px]"
              }
            />
            <Text
              as={"p"}
              text={
                "We know how large objects will act, but things on a small scale just do not act that way."
              }
              className={
                "max-w-lg mx-auto mb-6 text-xl tracking-[0.2px] leading-[30px]"
              }
            />
            <Button
              bText={"Start Now"}
              className={"px-10 py-4 rounded-md bg-primaryColor text-white"}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
