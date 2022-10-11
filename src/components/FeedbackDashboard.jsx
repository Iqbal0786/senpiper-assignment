import React from "react";
import { Container, Table, Form, Stack, Button } from "react-bootstrap";
export default function FeedbackDashboard() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#f8fafb",
          height: "1000px",
          padding: "40px",
        }}
      >
        <Stack direction="horizontal" gap={5}>
          <div>
            <h4 className="mb-3" style={{ fontSize: "20px" }}>
              Aromatic bar
            </h4>
            <p style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
              112 Records found.
            </p>
          </div>
          <Stack direction="horizontal" gap={3} style={{ marginLeft: "auto" }}>
            <Form.Control type="text" style={{ width: "200px" }} />
            <i class="bi bi-search"></i>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "30px",
                border: "transparent",
                fontSize: "18px",
              }}
            >
              <i class="bi bi-arrow-clockwise"></i>
            </Button>
            <Button
              style={{
                width: "150px",
                backgroundColor: "green",
                border: "none",
              }}
            >
              Add New
            </Button>
          </Stack>
        </Stack>

        <Table striped bordered hover>
          <thead style={{fontSize:"14px"}}>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  disabled
                  style={{ width: "20px", height: "20px", margin: "auto" }}
                />
              </th>
              <th>Form Details</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>
                Please rate the quality of the service you recieved from the
                host
              </th>
              <th>Please rate the quality of your beverage.</th>
              <th>Was our restaurant clean?</th>
              <th>Please rate your overall dining experience.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type="checkbox" style={{ paddingLeft: "10px" }} />
              </td>
              <td style={{ color: "blue", cursor: "pointer" }}>View Details</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
