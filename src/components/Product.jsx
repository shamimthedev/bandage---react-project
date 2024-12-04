import React from "react";
import Image from "./Image";
import ProductImage from "../assets/images/single-product.png";
import Heading from "./Heading";
import Text from "./Text";

const Product = () => {
  return (
    <>
      <div id="product" className="font-primary font-bold">
        <div className="product-img-wrapper">
          <Image imgSrc={ProductImage} className={'mx-auto'}/>
        </div>
        <div className="product-details p-7 text-center">
          <Heading
            as={"h3"}
            text={"Graphic Design"}
            className={"mb-3 text-textColor leading-6 tracking-[0.1px]"}
          />
          <Text
            as={"p"}
            text={"English Department"}
            className={
              "mb-3 text-secondTextColor text-sm leading-6 tracking-[0.2px]"
            }
          />
          <Text
            as={"span"}
            text={"$16.48"}
            className={"mb-3 text-mutedColor leading-6 tracking-[0.1px]"}
          />
          <Text
            as={"span"}
            text={"$6.48"}
            className={"ml-2 text-primaryColor leading-6 tracking-[0.1px]"}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
