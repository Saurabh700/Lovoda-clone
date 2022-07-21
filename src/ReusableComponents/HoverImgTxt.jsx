import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/HoverImgTxt.module.css";

const HoverImgTxt = () => {
  return (
    <div>
      <Grid
        className={styles.wrapper}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={2} bg="tomato" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="papayawhip" />
        <GridItem colSpan={1} bg="tomato" />
        <GridItem colSpan={1} bg="tomato" />
        <GridItem colSpan={2} rowSpan={2} bg="tomato" />
        <GridItem colSpan={1} rowSpan={1} bg="tomato" />
        <GridItem colSpan={1} rowSpan={1} bg="tomato" />
        <GridItem colSpan={1} rowSpan={1} bg="tomato" />
      </Grid>
    </div>
  );
};

export default HoverImgTxt;
