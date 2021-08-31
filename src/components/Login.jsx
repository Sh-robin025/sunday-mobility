import Button from "@restart/ui/esm/Button";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../pages/Auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [setUserOption] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleLogin = data => {
    const { email, password } = JSON.parse(localStorage.getItem("user"));
    if (data.email !== email || data.password !== password) {
      return alert("username or password didnot match.Plase try again");
    }
    history.push("/users");
  };

  return (
    <div className="login_container">
      <div className="text-center">
        <h5>Welcome Back!</h5>
        <p>Please log in to your account</p>
      </div>
      <Form className="mt-3" onSubmit={handleSubmit(handleLogin)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username" {...register("email")} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" {...register("password")} required />
        </Form.Group>
        <div className="mb-4 d-flex justify-content-between">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Link to="">Forgot Password ?</Link>
        </div>
        <div className="d-grid">
          <Button className="bg-primary py-1" size="lg" type="submit">
            login
          </Button>
        </div>
      </Form>
      <div className="text-center">
        <span>or</span> <br />
        <span>
          New User ?{" "}
          <Link to="" onClick={() => setUserOption("register")}>
            Register here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
