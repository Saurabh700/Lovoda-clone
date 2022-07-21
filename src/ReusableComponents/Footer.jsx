import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import styles from "./Styles/Footer1.module.css";
import React from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

const Footer1 = () => {
  return (
    <div>
      <hr />
      <div className={styles.wrapper}>
        <Flex className={styles.bottom}>
          <Box>
            <h1 className={styles.heading}>Info</h1>
            <Flex className={styles.items}>
              <Link>Search</Link>
              <Link>Terms of Service</Link>
              <Link>Refund policy</Link>
              <Link>Wholesale</Link>
              <Link>Wholesale Signup Form</Link>
              <Link>Shipping</Link>
            </Flex>
            <h1 className={styles.heading}>Subscribe to our emails</h1>
            <Stack className={styles.inputSection} spacing={4}>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={
                    <Icon
                      as={AiOutlineArrowRight}
                      ml="auto"
                      mr="3"
                      h={5}
                      w={5}
                    />
                  }
                />
                <Input
                  className={styles.inputBox}
                  type="text"
                  placeholder="Email"
                />
              </InputGroup>
            </Stack>
          </Box>
          <Box className={styles.rightBox}>
            <h1 className={styles.headingR}>Contact Us!</h1>
            <h2 className={styles.para}>
              Need to talk? Reach us via email, phone or text!
            </h2>
            <h2 className={styles.contact}>
              <p>Email: Customerservice@Lovoda.com</p>
              <p>Phone: (443) 500-1200</p>
              <h2>**Msg & data rates may apply</h2>
            </h2>
          </Box>
          <Flex className={styles.socialIcons}>
            <Icon
              className={styles.icon}
              color="rgba(18, 18, 18)"
              as={AiFillFacebook}
              h={5}
              w={5}
            />
            <Icon
              className={styles.icon}
              color="rgba(18, 18, 18)"
              as={BsPinterest}
              h={5}
              w={5}
            />
            <Icon
              className={styles.icon}
              color="rgba(18, 18, 18)"
              as={AiOutlineInstagram}
              h={5}
              w={5}
            />
            <Icon
              className={styles.icon}
              mb="0px"
              ml="0px"
              color="rgba(18, 18, 18)"
              as={FaTiktok}
              h={5}
              w={5}
            />
          </Flex>
          <hr />
        </Flex>
      </div>
      <hr />
    </div>
  );
};

export default Footer1;
