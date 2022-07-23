import { Image, Input, Link, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./LoginRegister.module.css";

const Login = () => {
  const { users } = useContext(AuthContext);
  const [present, setPresent] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
  function ToastExample() {
    return (
      <button
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          width: "100px",
          fontWeight: "500",
          marginTop: "30px",
          marginBottom: "150px",
        }}
        onClick={handleSubmit}
      >
        Sign in
      </button>
    );
  }

  const handleSubmit = () => {
    // e.preventDefault();
    if (user.email === "") {
      toast({
        title: "Please enter credentials.",
        description: "Input field can't be empty",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    } else {
      users.forEach((item) => {
        if (item.email === user.email && item.password === user.password) {
          setPresent(true);
        }
      });
      if (!present) {
        toast({
          title: "Login Success.",
          description: "You have successfully logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else if (present) {
        toast({
          title: "UserId does not exist",
          description: "This email id is does not exist on the server",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    setUser(user);
    console.log(user, "login");
  }, [user]);
  const { email, password } = user;
  return (
    <div
      style={{
        width: "448px",
        margin: "auto",
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          fontSize: "40px",
          letterSpacing: "0.6px",
          fontWeight: "400",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Login
      </div>
      <button
        style={{
          paddingLeft: "-50px",
          borderRadius: "0px",
          backgroundColor: "transparent",
          border: "2px solid #1771e6",
          height: "50px",
        }}
        // border="2px solid #1771e6"
        // borderRadius="0px"
        // backgroundColor="transparent"
        // mb={2}
        // color="#1771e6"
      >
        <Image
          h={5}
          w={6}
          ml={90}
          mt={1}
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt="fb logo"
        />
        <div
          style={{
            marginRight: "80px",
            marginTop: "-20px",
            marginLeft: "30px",
            color: "#1771e6",
          }}
        >
          Continue with Facebook
        </div>
      </button>

      <div className={styles.google}>
        <button
          style={{
            paddingLeft: "-50px",
            borderRadius: "0px",
            backgroundColor: "transparent",
            border: "none",
            height: "50px",
          }}
          // pl={-50}
          // borderRadius="0px"
          // backgroundColor="transparent"
          // border="none"
        >
          <Image
            h={5}
            w={6}
            ml={90}
            mt={3}
            src="https://banner2.cleanpng.com/20180324/sww/kisspng-google-logo-g-suite-chrome-5ab6e618b3b2c3.5810634915219358967361.jpg"
          />
          <div
            style={{
              marginRight: "80px",
              marginTop: "-25px",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Google
          </div>
        </button>
      </div>
      <button
        style={{
          paddingLeft: "-50px",
          borderRadius: "0px",
          backgroundColor: "#f3993e",
          border: "none",
          height: "50px",
        }}
        // pl={-50}
        // borderRadius="0px"
        // backgroundColor="#f3993e"
        // border="none"
        // height="60px"
      >
        <Image
          h={5}
          w={12}
          ml={79}
          mt={-1}
          position="absolute"
          src="https://therevolvingdoorproject.org/wp-content/uploads/2021/02/amazon-logo.jpg"
        />
        <div
          style={{
            marginRight: "80px",
            position: "relative",
            top: "9px",
            color: "white",
            backgroundColor: "#f3993e",
            marginTop: "-20px",
            marginLeft: "140px",
            fontSize: "18px",
            fontWeight: "400",
            // border: "1px solid black",
            width: "100px",
          }}
        >
          Amazon
        </div>
      </button>

      <div>
        <div style={{ border: "1px solid black", margin: "40px 0px 20px 0px" }}>
          <Input
            border="none"
            value={email}
            name="email"
            placeholder="Email"
            borderRadius={0}
            onChange={handleChange}
          ></Input>
        </div>
        <div style={{ border: "1px solid black", marginBottom: "20px" }}>
          <Input
            border="none"
            onChange={handleChange}
            value={password}
            name="password"
            placeholder="Password"
            borderRadius={0}
          ></Input>
        </div>
        <div style={{ textAlign: "left" }}>
          <Link>Forgot your password?</Link>
        </div>
        <div>
          {/* <button
            onClick={handleSubmit}
            style={{
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              width: "100px",
              fontWeight: "500",
              marginTop: "30px",
            }}
          >
            Sign in
          </button> */}
          <ToastExample />
        </div>
        <div
          style={{
            marginTop: "-120px",
            marginBottom: "100px",
          }}
        >
          <NavLink to="/account/register">
            <Link>Create Account</Link>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
