import styles from "./Home.module.css";
import { Box } from "@chakra-ui/react";
import React from "react";
import data from "../../ReusableComponents/ImgCard/ImgCard1/switchBoxData.json";
import SwitchBox from "./SwitchBox";
import HoverImgComponent from "../../ReusableComponents/ImgCard/ImgCard2/HoverImgComponent";
import { NavLink } from "react-router-dom";

import { Wishlist } from "../../ReusableComponents/WishlistTag";

const Home = () => {
  // function Wishlist() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const btnRef = React.useRef();

  //   return (
  //     <>
  //       <Button
  //         className={styles.rotate}
  //         ref={btnRef}
  //         colorScheme="white"
  //         onClick={onOpen}
  //       >
  //         <div
  //           styles={{
  //             fontSize: "14px",
  //             fontWeight: "700",
  //             letterSpacing: "1px",
  //           }}
  //         >
  //           WISHLIST
  //         </div>
  //       </Button>
  //       <Drawer
  //         isOpen={isOpen}
  //         placement="right"
  //         onClose={onClose}
  //         finalFocusRef={btnRef}
  //       >
  //         <DrawerOverlay />
  //         <DrawerContent>
  //           <DrawerCloseButton />
  //           <DrawerHeader p={10} pl={20}>
  //             Wishlist
  //           </DrawerHeader>
  //           <div
  //             style={{
  //               backgroundColor: "#c9ac92",
  //               // padding: "5px",
  //               borderRadius: "100%",
  //               width: "35px",
  //               paddingLeft: "4px",
  //               paddingTop: "2px",
  //               position: "absolute",
  //               top: "40px",
  //               left: "20px",
  //             }}
  //           >
  //             <Icon
  //               ml={1.6}
  //               mt={1}
  //               mr={1}
  //               h={6}
  //               w={6}
  //               as={AiFillHeart}
  //               color="white"
  //             />
  //           </div>

  //           <DrawerBody fontWeight={700} textAlign="center">
  //             SHARE:
  //           </DrawerBody>
  //           <div
  //             style={{
  //               marginTop: "0px",
  //               position: "absolute",
  //               top: "180px",
  //               display: "flex",
  //               margin: "auto",
  //               width: "200px",
  //             }}
  //           >
  //             <Icon
  //               borderRadius="50%"
  //               border="1px solid grey"
  //               color="grey"
  //               h={8}
  //               w={8}
  //               p={2}
  //               ml={20}
  //               as={FaFacebookF}
  //             />
  //             <Icon
  //               borderRadius="50%"
  //               border="1px solid grey"
  //               color="grey"
  //               h={8}
  //               w={8}
  //               p={2}
  //               ml={4}
  //               as={AiOutlineTwitter}
  //             />
  //             <Icon
  //               borderRadius="50%"
  //               border="1px solid grey"
  //               color="grey"
  //               h={8}
  //               w={8}
  //               p={2}
  //               ml={4}
  //               as={FaPinterestP}
  //             />
  //             <Icon
  //               borderRadius="50%"
  //               border="1px solid grey"
  //               color="grey"
  //               h={8}
  //               w={8}
  //               p={2}
  //               ml={4}
  //               as={AiOutlineMail}
  //             />
  //           </div>
  //           <div style={{ display: "flex", margin: "auto" }}>
  //             <button
  //               style={{
  //                 border: "none",
  //                 width: "200px",
  //                 justifyContent: "flex-start",
  //                 position: "absolute",
  //                 left: "70px",
  //                 height: "40px",
  //                 backgroundColor: "#c9ac92",
  //                 top: "250px",
  //                 color: "white",
  //               }}
  //             >
  //               + ADD A NEW LIST
  //             </button>
  //           </div>

  //           <DrawerFooter>
  //             <Button variant="outline" mr={3} onClick={onClose}>
  //               Cancel
  //             </Button>
  //             <Button colorScheme="white">Save</Button>
  //           </DrawerFooter>
  //         </DrawerContent>
  //       </Drawer>
  //     </>
  //   );
  // }

  return (
    <div className={styles.wrap}>
      <Box>
        <div className={styles.banner}>
          <h1>NEW NEW NEW</h1>
          <h2>Check out the new beauties!</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NavLink to="/collections/allproducts">
              <button className={styles.btn}>Shop All</button>
            </NavLink>
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
      <Wishlist />
    </div>
  );
};

export default Home;
