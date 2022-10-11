import React, { useState } from "react";
import { Container, Card, Stack, Form, Button } from "react-bootstrap";
import { phoneData } from "../utils/phoneData";
export default function Feedback() {
  const [userinput,setUserInput]=useState({
    id:"",
    name:"",
    email:"",
    phone:""
  })
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
                <Form.Label style={{ fontWeight: "bold" }}>
                  Customer Name<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Eg. jhon doe"
                  style={{ width: "500px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  style={{ width: "500px" }}
                />
              </Form.Group>
            </Stack>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "bold" }}>
                Phone<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Stack direction="horizontal" gap={2}>
                <Form.Select style={{ width: "100px", fontSize: "16px" }}>
                  {phoneData.map((opt) => {
                    return <option>{opt.name}</option>;
                  })}
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Eg. 9999998988"
                  style={{ width: "390px" }}
                />
              </Stack>
            </Form.Group>
            <Stack direction="horizontal" gap={5}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please rate the quality of the service you recieved from the
                  host.<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" label="Excellent" />
                  <Form.Check type="checkbox" label="Good" />
                  <Form.Check type="checkbox" label="Fair" />
                  <Form.Check type="checkbox" label="Bad" />
                </Stack>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please rate the quality of your beverage.
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" label="Excellent" />
                  <Form.Check type="checkbox" label="Good" />
                  <Form.Check type="checkbox" label="Fair" />
                  <Form.Check type="checkbox" label="Bad" />
                </Stack>
              </Form.Group>
            </Stack>
            <Stack direction="horizontal" gap={5}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Was our restaurant clean?
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" label="Excellent" />
                  <Form.Check type="checkbox" label="Good" />
                  <Form.Check type="checkbox" label="Fair" />
                  <Form.Check type="checkbox" label="Bad" />
                </Stack>
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginLeft: "100px" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please rate your overall dining experience.
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" label="Excellent" />
                  <Form.Check type="checkbox" label="Good" />
                  <Form.Check type="checkbox" label="Fair" />
                  <Form.Check type="checkbox" label="Bad" />
                </Stack>
              </Form.Group>
            </Stack>
          </Form>
          <Button
            style={{
              width: "200px",
              marginLeft: "auto",
              marginTop: "7%",
              backgroundColor: "green",
              border: "none",
            }}
          >
            Submit Review
          </Button>
        </Card>
      </Container>
    </>
  );
}
