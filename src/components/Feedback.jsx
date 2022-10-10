import React from 'react'
import {Container , Card} from "react-bootstrap"

export default function Feedback() {
  return (
    <>
     <Container  className='p-3' style={{backgroundColor:"#f8fafb" , height:"1000px" }}  fluid>
        <Card>
            <Card.Body style={{fontWeight:"bold"}}>Aromatic bar</Card.Body>
        </Card>
     </Container>
    </>
  )
}
