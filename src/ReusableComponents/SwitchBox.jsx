import styles from "./Styles/SwitchBox.module.css";
import { Link } from "@chakra-ui/react";
import React from "react";

const SwitchBox = (item) => {
  return (
    <div>
      <div key={item.id} className={styles.wrapper}>
        <figure className={styles.figure}>
          <div className={styles.hoverAnimation}>
            <img src={item.img2} className={styles.imgBack} alt="img1" />
            <img src={item.img1} className={styles.imgFront} alt="img2" />
          </div>
          <figcaption className={styles.figcaption}>
            <Link className={styles.link}>{item.name}</Link>
            <p>${item.price}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default SwitchBox;
