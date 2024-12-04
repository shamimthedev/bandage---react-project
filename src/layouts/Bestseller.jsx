import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import BestSellerSidebar from "../assets/images/bestseller-side-image.png";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Text from "../components/Text";
import Button from "../components/Button";
import Product from "../components/Product";

const Bestseller = () => {
  return (
    <>
      <div id="bestSellerSection" className="py-12 font-primary">
        <Container>
          <Flex className={'justify-between space-x-8'}>
            <div className="bestseller-img-container">
              <Image imgSrc={BestSellerSidebar} className={'max-w-96'}/>
            </div>
            <div className="bestseller-product-part">
              <div className="bestseller-heading-wrapper">
                <div className="bestseller-category pb-3 border-b-2 border- flex items-center space-x-9">
                  <div className="bestseller-btn flex items-center font-bold text-sm">
                    <Text
                      text={"BESTSELLER PRODUCTS"} as={'p'}
                      className={
                        "w-52 text-textColor leading-6 tracking-[0.1px]"
                      }
                    />
                    <Button
                      bText={"Men"}
                      className={
                        "px-5 py-3 bg-white text-primaryColor leading-6 tracking-[0.2px]"
                      }
                    />
                    <Button
                      bText={"Women"}
                      className={
                        "px-5 py-3 bg-white text-secondTextColor leading-6 tracking-[0.2px]"
                      }
                    />
                    <Button
                      bText={"Accessories"}
                      className={
                        "px-5 py-3 bg-white text-secondTextColor leading-6 tracking-[0.2px]"
                      }
                    />
                  </div>
                  <div className="bestseller-slider-icon flex space-x-4">
                    <TfiArrowCircleRight className="w-10 h-10 text-mutedColor" />
                    <TfiArrowCircleRight className="w-10 h-10 text-secondTextColor" />
                  </div>
                </div>
                <div className="bestseller-products-part pt-5">
                    <Flex className={'py-6 mb-6 justify-between space-x-8'}>
                        <Product/>
                        <Product/>
                        <Product/>
                    </Flex>
                    <Flex className={'pt-4 pb-6 justify-between space-x-8'}>
                        <Product/>
                        <Product/>
                        <Product/>
                    </Flex>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Bestseller;
