import {
  Button,
  Flex,
  Icon,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import styles from "./New.module.css";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const New = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.new}>New</div>
      <div className={styles.filter}>
        <div className={styles.align}>
          <p>Filter:</p>
          {/* <Link> */}
          <Menu closeOnSelect={false}>
            <MenuButton>
              <Link>Price </Link>
              <Icon
                className={styles.icon}
                color="rgba(18, 18, 18)"
                as={AiOutlineDown}
                h={3}
                w={3}
              />
            </MenuButton>
            <Portal>
              <MenuList>
                <Flex w={360}>
                  <div w="60%">The highest price is $95.00</div>
                  <div w="15%">
                    <Icon
                      className={styles.icon}
                      color="#c9ac92"
                      as={AiOutlineHeart}
                      h={7}
                      w={7}
                    />
                  </div>
                  <div w="15%">
                    <Link>Reset</Link>
                  </div>
                </Flex>
                <MenuDivider />
                <MenuItem>
                  $ <Input ml={3} mr={10} w={120} />
                  $ <Input ml={3} mr={10} w={120} />
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
          {/*  */}
          {/* </Link> */}
          <Link>
            Availability{" "}
            <Icon
              className={styles.icon}
              color="rgb(18, 18, 18)"
              as={AiOutlineDown}
              h={3}
              w={3}
            />
          </Link>
        </div>
        <div className={styles.align}>
          <p>Sort by:</p>
          <Link>
            Date, new to old{" "}
            <Icon
              className={styles.icon}
              color="rgb(18, 18, 18)"
              as={AiOutlineDown}
              h={3}
              w={3}
            />
          </Link>
          <p>374 products</p>
        </div>
      </div>
    </div>
  );
};

export default New;
