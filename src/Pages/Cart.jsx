import { Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "1100px", margin: "auto" }}>
      <div>
        <div style={{ fontSize: "40px", fontWeight: "400", marginTop: "80px" }}>
          Your cart is empty
        </div>
        <div>
          <button
            style={{
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              width: "200px",
              fontWeight: "500",
              marginTop: "30px",
              marginBottom: "60px",
            }}
            onClick={() => navigate("/collections/allproducts")}
          >
            Continue shopping
          </button>
        </div>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Have an account?
        </div>
        <div style={{ marginBottom: "100px" }}>
          <Link>Log in </Link> to check out faster.
        </div>
      </div>
    </div>
  );
};

export default Cart;
