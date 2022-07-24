import { Box, Flex, Link, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./ShopAll.module.css";
import data from "./ShopAllData.json";
import SwitchBox from "../../ReusableComponents/ImgCard/ImgCard1/SwitchBox";
import { NavLink } from "react-router-dom";
import { Wishlist } from "../../ReusableComponents/WishlistTag";

const ShopAll = () => {
  const [prodData, setProdData] = useState(data);
  const handleChange = (e) => {
    let val = e.target.value;
    if (val === "lth") {
      setProdData([...data.sort((a, b) => a.price - b.price)]);
    }
    if (val === "htl") {
      setProdData([...data.sort((a, b) => b.price - a.price)]);
    }
    if (val === "a2z") {
      setProdData([...data.sort((a, b) => a.id - b.id)]);
    }
    if (val === "z2a") {
      setProdData([...data.sort((a, b) => b.id - a.id)]);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.new}>All Products</div>
      <div className={styles.filter}>
        <div className={styles.align}>
          <p>Sort by:</p>
          <Select onChange={handleChange} mt={0} w={150} fontSize="14px">
            <option value="htl">Featured</option>
            <option value="lth">Best selling</option>
            <option value="a2z">Alphabetically, A-Z</option>
            <option value="z2a">Alphabetically, Z-A</option>
            <option value="lth">Price, low to high</option>
            <option value="htl">Price, high to low</option>
            <option selected value="a2z">
              Date, old to new
            </option>
            <option value="z2a">Date, new to old</option>
          </Select>
          <p>374 products</p>
        </div>
      </div>

      {/* -------------------- */}

      {/* <Box className={styles.grid}>
        {data.map((item) => (
          <SwitchBox key={item.id} {...item} />
        ))}
      </Box> */}
      <Box className={styles.grid}>
        {prodData.map((item) => (
          <div key={item.id}>
            <NavLink to={`/collections/allproducts/${item.id}`}>
              <SwitchBox key={item.id} {...item} />
            </NavLink>
          </div>
        ))}
      </Box>
      <Flex justifyContent="center">
        <Link p={5}>1</Link>
        <Link
          onClick={() =>
            setProdData([...data.sort((a, b) => a.price - b.price)])
          }
          p={5}
        >
          2
        </Link>
        <Link
          onClick={() =>
            setProdData([...data.sort((a, b) => b.price - a.price)])
          }
          p={5}
        >
          3
        </Link>
        <div style={{ marginTop: "20px", marginLeft: "5px" }}>...</div>
        <Link p={5}>23</Link>
      </Flex>
      <Wishlist />
    </div>
  );
};

export default ShopAll;
