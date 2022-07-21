import styles from "./Styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import React from "react";
import data from "./Styles/switchBoxData.json";
import SwitchBox from "../ReusableComponents/SwitchBox";
import HoverImgTxt from "../ReusableComponents/HoverImgTxt";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Box>
        <div className={styles.banner}>
          <h1>NEW NEW NEW</h1>
          <h2>Check out the new beauties!</h2>
          {/* <a>Shop all</a> */}
        </div>
      </Box>
      {/* ---------------------------------- */}
      <Box className={styles.grid}>
        {data.map((item) => (
          <SwitchBox key={item.id} {...item} />
        ))}
      </Box>

      {/* ----------------------------------- */}
      <Box>
        <h1>SHOP THE FEED</h1>
        <p>Tag us on instagram @LavodaShop or #Lavoda</p>
        <HoverImgTxt />
      </Box>
    </div>
  );
};

export default Home;
