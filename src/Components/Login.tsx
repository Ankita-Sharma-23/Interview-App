import React from "react";
import { connect } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

const Login = (props: any) => {
  const { handleSubmit } = useForm();

  let history = useHistory();

  const submitHandler = (data: any) => {
    props.addUser(data);

    history.push("/Form");
  };
  console.log(8885555, props.addUser);
  return (
    <div className="formBox">
     
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
          <Form.Label column sm="4" className="labelForm">
            UserName or E-mail ID
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              name="userName"
              placeholder="UserName or E-mail ID"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4" className="labelForm">
            Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{
            width: "150px",
            height: "40px",
            backgroundColor: "rgb(60, 179, 113)",
          }}
        >
          Log In
        </Button>
        <br /> <br />
      </Form>
    </div>
  );
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  console.log(dispatch);
  return {
    addUser: (val: any) => dispatch({ type: "ADD_USER", payload: val }),
  };
};
export default connect(null, mapDispatchToProps)(Login);
