import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import styles from "./Footer2.module.css";
import { BiCopyright } from "react-icons/bi";

const Footer2 = () => {
  return (
    <div className={styles.wrapper}>
      <Flex>
        <img
          className={styles.paymentCard}
          src="https://www.launchtip.com/wp-content/webpc-passthru.php?src=https://www.launchtip.com/wp-content/uploads/2021/04/Screenshot-2021-05-01-at-18.06.24.png&nocache=1"
          alt=""
        />
      </Flex>
      <div className={styles.icon}>
        <Icon color="rgba(18, 18, 18)" as={BiCopyright} h={2} w={2} /> 2022,
        Lovoda Powered by Shopify
      </div>
    </div>
  );
};

export default Footer2;
