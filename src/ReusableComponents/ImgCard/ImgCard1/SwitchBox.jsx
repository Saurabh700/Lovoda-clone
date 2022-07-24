import styles from "./SwitchBox.module.css";
import { Icon, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const SwitchBox = (item) => {
  const [toggle, setToggle] = useState(false);
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
      <div onClick={() => setToggle(!toggle)} className={styles.wishBack}></div>
      {!toggle && (
        <Icon
          onClick={() => setToggle(!toggle)}
          className={styles.emptyHeartAlone}
          color="#c9ac92"
          as={AiOutlineHeart}
          h={5}
          w={5}
        />
      )}
      {toggle && (
        <Icon
          onClick={() => setToggle(!toggle)}
          className={styles.filledHeart}
          color="#c9ac92"
          as={AiFillHeart}
          h={5}
          w={5}
        />
      )}
    </div>
  );
};

export default SwitchBox;
