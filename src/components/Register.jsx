import Button from "@restart/ui/esm/Button";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/Auth";

const Register = () => {
  const [userOption, setUserOption] = useContext(UserContext);
  return (
    <div className="register_container">
      <div className="text-center">
        <h5>Welcome Back!</h5>
        <p>Please log in to your account</p>
      </div>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="mb-4 d-flex justify-content-between">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Link to="">Forgot Password ?</Link>
        </div>
        <div className="d-grid">
          <Button className="bg-primary py-1" size="lg">
            login
          </Button>
        </div>
      </Form>
      <div className="text-center">
        <span>or</span> <br />
        <span>
          Already have an account ?{" "}
          <Link to="" onClick={() => setUserOption("login")}>
            login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
