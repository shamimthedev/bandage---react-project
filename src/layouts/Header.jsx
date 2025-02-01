import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo from "../assets/images/logo.png";
import Menu from "../components/Menu";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Text from "../components/Text";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="headerSection" className="py-8 font-primary font-bold text-sm">
        <Container>
          <Flex className={"items-center justify-between"}>
            <div className="nav-logo w-[20%]">
              <Link to={"/"}>
                <Image imgSrc={Logo} imgAlt={Logo} />
              </Link>
            </div>
            <div className="nav-links w-[50%]">
              <Menu
                className={"flex space-x-5 justify-center text-secondTextColor"}
              >
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                <Link to={"/bestseller"} className='group'>
                  <li className="inline-flex items-center ">
                    Shop
                    <IoIosArrowDown className="ml-1 transition-all duration-500 group-hover:rotate-180" />
                  </li>
                </Link>
                <Link to={"/bestseller"}>
                  <li>About</li>
                </Link>
                <Link to={"/"}>
                  <li>Blog</li>
                </Link>
                <Link to={"/flash-deal"}>
                  <li>Service</li>
                </Link>
                <Link to={"/most-popular"}>
                  <li>Contact</li>
                </Link>
              </Menu>
            </div>
            <div className="nav-icons w-[30%] text-primaryColor">
              <Flex className={"items-center justify-end space-x-5"}>
                <div className="login-btn flex items-center">
                  <FaRegUser />
                  <Text
                    as={"span"}
                    text={"Login / Register"}
                    className={"ml-1"}
                  />
                </div>
                <IoSearchOutline />
                <div className="cart-icon flex items-center">
                  <IoCartOutline />
                  <Text as={"span"} text={"1"} className={"ml-1 font-normal"} />
                </div>
                <div className="wishlist flex items-center">
                  <IoMdHeartEmpty />
                  <Text as={"span"} text={"1"} className={"ml-1 font-normal"} />
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
