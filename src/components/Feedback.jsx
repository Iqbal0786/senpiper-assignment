import React, { useState } from "react";
import { Container, Card, Stack, Form, Button } from "react-bootstrap";
import { phoneData } from "../utils/phoneData";
import { v4 as uuidv4 } from 'uuid';
export default function Feedback() {
  // user state
  const [userinput,setUserInput]=useState({
    id:uuidv4(),
    name:"",
    email:"",
    country:"",
    phone:"",
    serviceRating:[],
    beverageRating:[],
    cleaningRating:[],
    overallRating:[]
  });

  // form input handler
 const formHandler=(e)=>{
   const {value,name}=e.target;
    setUserInput({...userinput,[name]:value})

 }  

 // checkboxes handlers 
 const checkboxHanlder1=(e)=>{
     const {checked,value , label}=e.target
    if(checked){
       let serviceRating=userinput.serviceRating;
       serviceRating.push(value);
       setUserInput({...userinput,serviceRating:[...serviceRating]})
    }
    else{
       let updatedRating= userinput.serviceRating.filter((rating)=>rating!=value);
       setUserInput({...userinput,serviceRating:[...updatedRating]})
    }

 }
 const checkboxHanlder2=(e)=>{
  const {checked,value , label}=e.target
  if(checked){
     let beverageRating=userinput.beverageRating;
     beverageRating.push(value);
     setUserInput({...userinput,beverageRating:[...beverageRating]})
  }
  else{
     let updatedRating= userinput.beverageRating.filter((rating)=>rating!=value);
     setUserInput({...userinput,beverageRating:[...updatedRating]})
  }

}
const checkboxHanlder3=(e)=>{
  const {checked,value , label}=e.target
  if(checked){
     let cleaningRating=userinput.cleaningRating;
     cleaningRating.push(value);
     setUserInput({...userinput,cleaningRating:[...cleaningRating]})
  }
  else{
     let updatedRating= userinput.cleaningRating.filter((rating)=>rating!=value);
     setUserInput({...userinput,cleaningRating:[...updatedRating]})
  }
}
const checkboxHanlder4=(e)=>{
  const {checked,value , label}=e.target
  if(checked){
     let overAllRating=userinput.overallRating;
     overAllRating.push(value);
     setUserInput({...userinput,overallRating:[...overAllRating]})
  }
  else{
     let updatedRating= userinput.overallRating.filter((rating)=>rating!=value);
     setUserInput({...userinput,overallRating:[...updatedRating]})
  }

}

console.log(userinput)

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
                  onChange={formHandler}
                  name="name"
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
                  onChange={formHandler}
                  name="email"
                />
              </Form.Group>
            </Stack>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "bold" }}>
                Phone<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Stack direction="horizontal" gap={2}>
                <Form.Select style={{ width: "100px", fontSize: "16px" }} name='country' onChange={formHandler}>
                  {phoneData.map((opt) => {
                    return <option>{opt.name}</option>;
                  })}
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Eg. 9999998988"
                  style={{ width: "390px" }}
                  name='phone'
                  onChange={formHandler}
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
                  <Form.Check type="checkbox" value='Excellent' label="Excellent" onChange={checkboxHanlder1} />
                  <Form.Check type="checkbox" value='Good' label="Good" onChange={checkboxHanlder1} />
                  <Form.Check type="checkbox" value='Fair' label="Fair" onChange={checkboxHanlder1} />
                  <Form.Check type="checkbox" value='Bad' label="Bad"onChange={checkboxHanlder1} />
                </Stack>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please rate the quality of your beverage.
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" value='Excellent' label="Excellent"onChange={checkboxHanlder2} />
                  <Form.Check type="checkbox" value='Good' label="Good"onChange={checkboxHanlder2} />
                  <Form.Check type="checkbox"  value='Fair'label="Fair" onChange={checkboxHanlder2}/>
                  <Form.Check type="checkbox" value='Bad' label="Bad"onChange={checkboxHanlder2} />
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
                  <Form.Check type="checkbox" value='Excellent' label="Excellent"onChange={checkboxHanlder3} />
                  <Form.Check type="checkbox" value='Good' label="Good"onChange={checkboxHanlder3} />
                  <Form.Check type="checkbox" value='Fair' label="Fair" onChange={checkboxHanlder3}/>
                  <Form.Check type="checkbox" value='Bad' label="Bad" onChange={checkboxHanlder3}/>
                </Stack>
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginLeft: "100px" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Please rate your overall dining experience.
                  <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Stack direction="horizontal" gap={5}>
                  <Form.Check type="checkbox" value='Excellent' label="Excellent"onChange={checkboxHanlder4} />
                  <Form.Check type="checkbox" value='Good' label="Good" onChange={checkboxHanlder4}/>
                  <Form.Check type="checkbox"  value='Fair'label="Fair"onChange={checkboxHanlder4} />
                  <Form.Check type="checkbox" value='Bad' label="Bad" onChange={checkboxHanlder4}/>
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
