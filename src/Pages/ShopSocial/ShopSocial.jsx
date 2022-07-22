import React from "react";
import HoverImgComponent from "../../ReusableComponents/ImgCard/ImgCard2/HoverImgComponent";
import styles from "./ShopSocial.module.css";

const ShopSocial = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>Shop Social</h1>
        <div className={styles.component}>
          <HoverImgComponent />
        </div>
      </div>
    </div>
  );
};

export default ShopSocial;
