// import { useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [details, setDetails] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //   const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    let check = details.filter((item) => item.email === user.email);
    check.length === 0
      ? setDetails([...details, user])
      : console.log("userExist");
    // if (check.length === 0) {
    //   setDetails([...details, user]);
    //   toast({
    //     title: "Account created.",
    //     description: "We've created your account for you.",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // } else {
    //   toast({
    //     title: "User already exist",
    //     description: "This email id is already exist on the server",
    //     status: "warning",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
  };

  return (
    <RegisterContext.Provider
      value={{ handleSubmit, handleChange, user, details }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
