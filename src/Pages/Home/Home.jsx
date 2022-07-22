import styles from "./Home.module.css";
import { Box } from "@chakra-ui/react";
import React from "react";
import data from "../../ReusableComponents/ImgCard/ImgCard1/switchBoxData.json";
import SwitchBox from "./SwitchBox";
import HoverImgComponent from "../../ReusableComponents/ImgCard/ImgCard2/HoverImgComponent";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Box>
        <div className={styles.banner}>
          <h1>NEW NEW NEW</h1>
          <h2>Check out the new beauties!</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={styles.btn}>
              <NavLink to="/collections/allproducts">Shop All</NavLink>
            </button>
          </div>
        </div>
      </Box>
      {/* ---------------------------------- */}
      <Box className={styles.grid}>
        {data.map((item) => (
          <SwitchBox key={item.id} {...item} />
        ))}
      </Box>

      {/* <Box className={styles.grid}>
        {data.map((item) => (
          <div key={item.id}>
            <NavLink to={`/${item.id}`}>
              <SwitchBox key={item.id} {...item} />
            </NavLink>
          </div>
        ))}
      </Box> */}

      {/* ----------------------------------- */}
      <Box>
        <h1 className={styles.shopfeed}>SHOP THE FEED</h1>
        <p className={styles.tag}>Tag us on instagram @LavodaShop or #Lavoda</p>
        <div className={styles.hoverComponent}>
          <HoverImgComponent />
        </div>
      </Box>
    </div>
  );
};

export default Home;
