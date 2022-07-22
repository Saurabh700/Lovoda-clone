import React, { useState } from "react";
import styles from "./EarringsPage.module.css";
import data from "./EarringsData.json";
import { useParams } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";

const EarringsPage = () => {
  const params = useParams();
  const [count, setCount] = useState(1);
  //   console.log(params.id);
  let obj = data.filter((item) => item.id === params.id);
  // console.log(obj);
  return (
    <div style={{ marginBottom: "50px" }}>
      {obj.map((item) => (
        <div
          style={{ textAlign: "left", fontWeight: "400", fontSize: "13px" }}
          className={styles.wrapper}
        >
          <div className={styles.left}>
            {/* <img src={item.img1} alt="img1" /> */}
            <img src={item.img2} alt="img2" />
          </div>
          <div className={styles.right}>
            <h1>{item.name}</h1>
            <div className={styles.icon}>
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <Icon w={5} h={5} color="#c9ac92" as={AiOutlineStar} />
              <p
                style={{
                  marginTop: "-2px",
                  marginLeft: "3px",
                  fontSize: "16px",
                }}
              >
                write a review
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContext: "flexStart",
                marginTop: "5px",
              }}
            >
              | <Icon w={6} h={6} ml={3} mr={3} as={RiWechatLine}></Icon> Ask a
              question
            </div>
            <div
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "400",
                marginTop: "20px",
              }}
            >
              $ {item.price}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundColor: "rgb(178, 252, 228)",
                  borderRadius: "200px",
                  color: "black",
                  width: "100px",
                  marginTop: "20px",
                  height: "25px",
                  paddingLeft: "27px",
                  paddingTop: "3px",
                }}
              >
                afterpay
              </div>
              <span
                style={{
                  marginTop: "20px",
                  paddingLeft: "5px",
                  textAlign: "left",
                }}
              >
                available for orders between $35 to $1000
              </span>
            </div>
            <div style={{ textAlign: "left", marginTop: "15px" }}>
              Pay in 4 iterest-free installments for orders over $50 with
              ShopPay
            </div>
            <div style={{ marginTop: "20px" }}>Quantity</div>
            <div
              style={{
                display: "flex",
                border: "1px solid black",
                marginTop: "10px",
                padding: "5px 10px 5px 10px",
                width: "100px",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setCount(count - 1)}
              >
                -
              </div>
              <div>{count}</div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setCount(count + 1)}
              >
                +
              </div>
            </div>
            <button style={{ padding: "5px 10px", margin: "5px" }}>
              Add to Cart
            </button>
            <button style={{ padding: "5px 10px", margin: "5px" }}>
              Add to Wishlist
            </button>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "5px 10px",
                margin: "5px",
              }}
            >
              Buy it now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EarringsPage;
