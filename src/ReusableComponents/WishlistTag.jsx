import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../Pages/Home/Home.module.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export function Wishlist() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        className={styles.rotate}
        ref={btnRef}
        colorScheme="white"
        onClick={onOpen}
      >
        <div
          styles={{
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          WISHLIST
        </div>
        <div
          style={{
            backgroundColor: "#c9ac92",
            // padding: "5px",
            borderRadius: "100%",
            width: "35px",
            paddingLeft: "4px",
            paddingTop: "2px",
            position: "absolute",
            top: "40px",
            left: "20px",
            border: "1px solid black",
          }}
        >
          <Icon
            ml={1.6}
            mt={1}
            mr={1}
            h={6}
            w={6}
            as={AiFillHeart}
            color="white"
          />
        </div>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader p={10} pl={20}>
            Wishlist
          </DrawerHeader>
          <div
            style={{
              backgroundColor: "#c9ac92",
              // padding: "5px",
              borderRadius: "100%",
              width: "35px",
              paddingLeft: "4px",
              paddingTop: "2px",
              position: "absolute",
              top: "40px",
              left: "20px",
            }}
          >
            <Icon
              ml={1.6}
              mt={1}
              mr={1}
              h={6}
              w={6}
              as={AiFillHeart}
              color="white"
            />
          </div>

          <DrawerBody fontWeight={700} textAlign="center">
            SHARE:
          </DrawerBody>
          <div
            style={{
              marginTop: "0px",
              position: "absolute",
              top: "180px",
              display: "flex",
              margin: "auto",
              width: "200px",
            }}
          >
            <Icon
              borderRadius="50%"
              border="1px solid grey"
              color="grey"
              h={8}
              w={8}
              p={2}
              ml={20}
              as={FaFacebookF}
            />
            <Icon
              borderRadius="50%"
              border="1px solid grey"
              color="grey"
              h={8}
              w={8}
              p={2}
              ml={4}
              as={AiOutlineTwitter}
            />
            <Icon
              borderRadius="50%"
              border="1px solid grey"
              color="grey"
              h={8}
              w={8}
              p={2}
              ml={4}
              as={FaPinterestP}
            />
            <Icon
              borderRadius="50%"
              border="1px solid grey"
              color="grey"
              h={8}
              w={8}
              p={2}
              ml={4}
              as={AiOutlineMail}
            />
          </div>
          <div style={{ display: "flex", margin: "auto" }}>
            <button
              style={{
                border: "none",
                width: "200px",
                justifyContent: "flex-start",
                position: "absolute",
                left: "70px",
                height: "40px",
                backgroundColor: "#c9ac92",
                top: "250px",
                color: "white",
              }}
            >
              + ADD A NEW LIST
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
