import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import styles from "./HoverImgComponent.module.css";
import data from "./HoverImgData.json";
import HoverImgCard from "./HoverImgCard";

const HoverImgComponent = () => {
  console.log(data, "here it is");
  return (
    <div>
      <Grid
        className={styles.wrapper}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={3}
      >
        <GridItem rowSpan={2} colSpan={2} bg="teal">
          {<HoverImgCard item={data[0]} />}
        </GridItem>
        <GridItem colSpan={1} bg="tomato">
          {<HoverImgCard item={data[1]} />}
        </GridItem>
        <GridItem colSpan={1} bg="orange">
          {<HoverImgCard item={data[2]} />}
        </GridItem>
        <GridItem colSpan={1} bg="purple">
          {<HoverImgCard item={data[3]} />}
        </GridItem>
        <GridItem colSpan={1} bg="crimson">
          {<HoverImgCard item={data[4]} />}
        </GridItem>
        <GridItem colSpan={2} rowSpan={2} bg="olive">
          {<HoverImgCard item={data[5]} />}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="yellow">
          {<HoverImgCard item={data[6]} />}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="green.100">
          {<HoverImgCard item={data[7]} />}
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="teal.100">
          {<HoverImgCard item={data[8]} />}
        </GridItem>
      </Grid>
      {/* ))} */}
    </div>
  );
};

export default HoverImgComponent;
