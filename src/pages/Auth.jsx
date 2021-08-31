import React, { createContext, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ocenImg from "../assets/images/sean-oulashin.jpg";
import Login from "../components/Login";
import Register from "../components/Register";

export const UserContext = createContext();

const Auth = () => {
  const [userOption, setUserOption] = useState("login");
  return (
    <UserContext.Provider value={[setUserOption]}>
      <main className="auth_container container-fluid d-flex align-items-center">
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={ocenImg} alt="" fluid />
          </Col>
          <Col md={6}>
            {userOption === "login" && <Login />}
            {userOption === "register" && <Register />}
          </Col>
        </Row>
      </main>
    </UserContext.Provider>
  );
};

export default Auth;
