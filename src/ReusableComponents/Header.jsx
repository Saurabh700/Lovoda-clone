import { Flex, Heading, HStack, Icon, Link } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import React from "react";
import styles from "./Styles/Header.module.css";

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
              <Link className={styles.link}>Home</Link>
              <Link className={styles.link}>New</Link>
              <Link className={styles.link}>Shop All</Link>
              <Link className={styles.link}>Earrings</Link>
              <Link className={styles.link}>Necklaces</Link>
              <Link className={styles.link}>Bracelet</Link>
              <Link className={styles.link}>Rings</Link>
              <Link className={styles.link}>Shop Social</Link>
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
