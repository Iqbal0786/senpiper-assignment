import React from 'react'
import {Container,Table ,Form} from "react-bootstrap"
export default function FeedbackDashboard() {
  return (
    <>
    <Container fluid  style={{ backgroundColor: "#f8fafb", height: "1000px"  , padding:"40px"}}>
   <h4 className='mb-3' style={{fontSize:"20px"}}>Aromatic bar</h4>
   <p style={{fontSize:"15px" , fontFamily:"sans-serif"}}>112 Records found.</p>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </>
  )
}
