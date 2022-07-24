import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  function SearchDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [query, setQuery] = useState("");

    return (
      <>
        {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button> */}

        <Icon
          onClick={onOpen}
          ref={btnRef}
          className={styles.icon}
          mb="5px"
          ml="260px"
          color="rgba(18, 18, 18, 0.75)"
          as={AiOutlineSearch}
          h={5}
          w={5}
        />
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent h="150px">
            <DrawerCloseButton border="none" mt="-2" />
            <Flex className={styles.top}>
              Free Shipping on Orders Over $75 and Free Returns (US ONLY)
            </Flex>
            <hr />
            <div
              style={{ width: "500px", margin: "auto", height: "150px" }}
              // display="flex"
              // w="500px"
              // m="auto"
              // h="150px"
              // border="1px solid white"
            >
              <div
                style={{
                  position: "relative",
                  width: "70%",
                  top: "35px",
                  margin: "auto",
                  border: "1px solid black",
                }}
              >
                <Input
                  // m="auto"
                  // w="100%"
                  // mt="25px"
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search... "
                  borderRadius="0"
                  onKeyDownCapture={(e) => {
                    console.log(e, "btn");
                    if (e.key === "Enter") {
                      navigate(`/collections/${query}`);
                    }
                  }}
                />
              </div>
              {/* <Button
                disabled={!query}
                w="20px"
                variant="outline"
                mt={7}
                >
              </Button> */}
              <Icon
                onClick={() => navigate(`/collections/${query}`)}
                className={styles.icon}
                mb="5px"
                ml="435px"
                position="relative"
                top="3px"
                color="rgba(18, 18, 18, 0.75)"
                as={AiOutlineSearch}
                h={5}
                w={5}
              />
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
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
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/collections/new"
              >
                New
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                className={styles.specialWidth}
                to="/collections/allproducts"
              >
                Shop All
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/collections/earrings"
              >
                Earrings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/collections/necklaces"
              >
                Necklaces
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to="/collections/bracelet"
              >
                Bracelet
              </NavLink>
              <NavLink
                to="/collections/rings"
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              >
                Rings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                className={styles.specialWidth2}
                to="/collections/shopsocial"
              >
                Shop Social
              </NavLink>
            </HStack>
          </Flex>
          <SearchDrawer />
          {/* <Icon
            className={styles.icon}
            mb="5px"
            ml="260px"
            color="rgba(18, 18, 18, 0.75)"
            as={AiOutlineSearch}
            h={5}
            w={5}
          /> */}
          <NavLink to="/account/login">
            <Icon
              className={styles.icon}
              mt="4px"
              color="rgba(18, 18, 18, 0.75)"
              as={AiOutlineUser}
              h={5}
              w={5}
            />
          </NavLink>
          <NavLink to="/cart">
            <Icon
              className={styles.icon}
              mb="0px"
              color="rgba(18, 18, 18, 0.75)"
              as={BsBag}
              h={5}
              w={5}
            />
          </NavLink>
        </Flex>
      </div>
      <hr />
    </div>
  );
};

export default Header;
