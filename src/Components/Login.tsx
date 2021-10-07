import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useHistory } from "react-router";


type FormValues = {
  value: number;
 message:string;
 errors:any
 props:any
};

export const Login = (props:any) => {
  const { handleSubmit,register} = useForm<FormValues>()

  let history = useHistory();

    const submitHandler = (data: any) => {
        // props.addUser(data)
        // console.log(8885555, props.addUser)
      history.push('/Form')
    }


  return (
    <div >
        <br /><br /><br /><br />
        <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUserName">
                <Form.Label column sm="4">
                    UserName or E-mail ID
</Form.Label>
                <Col sm="8">
                    <Form.Control type="text" name="userName" placeholder="UserName or E-mail ID" />
                   
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                    Password
</Form.Label>
                <Col sm="8">
                    <Form.Control type="password" name="password" placeholder="Password"/>

                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:"150px",height:"40px",backgroundColor:'rgb(60, 179, 113)'}}>
                Log In
</Button>
            <br /> <br />
</Form>
    </div>
)
}
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: any }) => any)=>{
    return{
        addUser:(val: any)=> dispatch({type:"ADD_USER",payload:val})
    }
}
export default connect(null,mapDispatchToProps)












