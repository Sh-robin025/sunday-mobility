import Button from "@restart/ui/esm/Button";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../pages/Auth";

const Register = () => {
  const [setUserOption] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleAddUser = data => {
    localStorage.setItem("user", JSON.stringify(data));
    history.push("/users");
  };

  return (
    <div className="register_container">
      <div className="text-center">
        <h5>Welcome!</h5>
        <p>Please Register as a new user</p>
      </div>
      <Form className="mt-3" onSubmit={handleSubmit(handleAddUser)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name")}
            pattern="[a-zA-Z\s]+"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            // type="number"
            placeholder="Number"
            {...register("number")}
            pattern="^[0-9]{10}$"
            maxLength="10"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" {...register("email")} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            required
          />
        </Form.Group>
        <div className="mb-4 d-flex justify-content-between">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Link to="">Forgot Password ?</Link>
        </div>
        <div className="d-grid">
          <Button className="bg-primary py-1" size="lg" type="submit">
            Register
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
