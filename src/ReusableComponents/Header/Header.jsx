import { Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

// const Path = [
//   {
//     to: "/",
//     title: "Home",
//   },
//   {
//     to: "/collections/new",
//     title: "New",
//   },
//   {
//     to: "/collections/allproducts",
//     title: "Shop All",
//   },
//   {
//     to: "/collections/earrings",
//     title: "Earrings",
//   },
//   {
//     to: "/collections/necklaces",
//     title: "Necklaces",
//   },
//   {
//     to: "/collections/bracelet",
//     title: "Bracelet",
//   },
//   {
//     to: "/collections/rings",
//     title: "Rings",
//   },
//   {
//     to: "/collections/shopsocial",
//     title: "Shop Social",
//   },
//   {
//     to: "/account/login",
//     title: "Login",
//   },
//   {
//     to: "/account/register",
//     title: "Register",
//   },
//   {
//     to: "/cart",
//     title: "Cart",
//   },
// ];

const activeStyle = {
  fontSize: "14px",
  letterSpacing: "0.5px",
  borderBottom: "1px solid black",
};

const baseStyle = {
  borderBottom: "1px solid white",
  fontSize: "14px",
  letterSpacing: "0.5px",
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Flex className={styles.top}>
          Free Shipping on Orders Over $75 and Free Returns (US ONLY)
        </Flex>
      </div>
      <hr />
      <div>
        <Flex
          lineHeight="28.8px"
          position="relative"
          h="101px"
          px="170px"
          //   py="20px"
          width="full"
          bg="rgb(255, 255, 255)"
          //   alignItems="flex-end"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex alignItems="flex-end">
            <Heading
              color="whiteAlpha.900"
              mr="30px"
              fontSize="14px"
              letterSpacing="1.5px"
            >
              <img
                className={styles.logo}
                src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264"
                alt=""
              />
            </Heading>
            <HStack
              className={styles.routes}
              alignItems="center"
              color="rgba(18, 18, 18, 0.85)"
              spacing="22px"
              fontWeight="400"
              letterSpacing="1px"
              fontSize="12px"
              p="10px"
            >
              {/* {Path.map((item) => (
                <NavLink to={item.to} key={item.to} className={styles.link}>
                  {item.title}
                </NavLink>
              ))} */}
              <NavLink
                to="/"
                // activeClassName={styles.activeStyle}
                // className={styles.baseStyle}
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              >
                Home
              </NavLink>
              <NavLink
                // onFocus={styles.activeStyle}
                // activeClassName={styles.activeStyle}
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // className={styles.baseStyle}
                to="/collections/new"
              >
                New
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                className={styles.specialWidth}
                to="/collections/allproducts"
              >
                Shop All
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                // className={styles.baseStyle}
                to="/collections/earrings"
              >
                Earrings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                // className={styles.baseStyle}
                to="/collections/necklaces"
              >
                Necklaces
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                // className={styles.baseStyle}
                to="/collections/bracelet"
              >
                Bracelet
              </NavLink>
              <NavLink
                to="/collections/rings"
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                // className={styles.baseStyle}
              >
                Rings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                // activeClassName={styles.activeStyle}
                className={styles.specialWidth2}
                // className={styles.baseStyle}
                to="/collections/shopsocial"
              >
                Shop Social
              </NavLink>
            </HStack>
          </Flex>
          <Icon
            className={styles.icon}
            mb="5px"
            ml="260px"
            color="rgba(18, 18, 18, 0.75)"
            as={AiOutlineSearch}
            h={5}
            w={5}
          />
          <Icon
            className={styles.icon}
            mb="5px"
            color="rgba(18, 18, 18, 0.75)"
            as={AiOutlineUser}
            h={5}
            w={5}
          />
          <Icon
            className={styles.icon}
            mb="5px"
            color="rgba(18, 18, 18, 0.75)"
            as={BsBag}
            h={5}
            w={5}
          />
        </Flex>
      </div>
      <hr />
    </div>
  );
};

export default Header;
