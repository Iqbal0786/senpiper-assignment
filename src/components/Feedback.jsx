import React from "react";
import { Container, Card, Stack, Form, Button } from "react-bootstrap";
import {phoneData} from "../utils/phoneData"
export default function Feedback() {
  return (
    <>
      <Container
        className="p-3"
        style={{ backgroundColor: "#f8fafb", height: "1000px" }}
        fluid
      >
        <Card style={{ height: "40px", padding: "5px 0px 5px 15px" }}>
          <Card.Title>Aromatic bar</Card.Title>
        </Card>
        <Card
          style={{
            backgroundColor: "white",
            height: "500px",
            marginTop: "15px",
            padding: "30px",
          }}
        >
          <Form>
            <Stack direction="horizontal" gap={5}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Customer Name<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control type="text" placeholder="Eg. jhon doe" style={{width:"500px"}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address<span style={{color:"red"}}>*</span></Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={{width:"500px"}} />
            </Form.Group>

            </Stack>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone<span style={{color:"red"}}>*</span></Form.Label>
               <Stack direction="horizontal" gap={2}>
               <Form.Select style={{width:"60px"}}>
                 {
                 phoneData.map((opt)=>{
                   return (
                    <option  >
                       {opt.name}
                    </option>
                   )
                 })
                 }
              </Form.Select>
              <Form.Control type="text" placeholder="Eg. 9999998988" style={{width:"430px"}} />

               </Stack>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}
