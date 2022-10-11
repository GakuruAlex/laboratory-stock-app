import React, { useState,createRef ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import DisplayReceipts from "./DisplayReceipts";


function Receipts() {

const formData=createRef();

const [commodities,setCommodities]=useState([]);

const [stock,setStock]=useState([]);


const receiptsUrl="http://localhost:3000/receipts";
const stockUrl="http://localhost:3000/stock";


useEffect(()=>{
//Fetch existing  receipts transactions

fetchData(receiptsUrl)
      .then((res) => {
        setCommodities(res)
      })
      .catch((e) => {
        console.log(e.message)
      })



    },[]);

//fetch abstraction
const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
}

//POST abstraction
const post=(url,dataToPost)=>fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  });

const add=(event)=>{

event.preventDefault();
//capture inputs
const newCommodity={

dateReceived:formData.current.date_received.value,
batchNo:formData.current.batch_no.value,
receivedFrom:formData.current.received_from.value,
quantity:Number(formData.current.quantity.value),
receivedBy:formData.current.received_by.value,
expiry:formData.current.expiry.value

}

//post new transactions to database
post(receiptsUrl,newCommodity)
setCommodities([...commodities,newCommodity]);


    }



console.log("commodities are",commodities)

  return (
    <React.Fragment  >
       {/*Receipts Form  */}

<div  className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
   <Form onSubmit={add} ref={formData}  >
<Row>

<Col>
    <Form.Group controlId="formBasicDateReceived">
        <Form.Label>Date Received</Form.Label>
        <Form.Control type="date"  name="date_received"/>
    </Form.Group>
 </Col>
 <Col>
    <Form.Group controlId="formBasicBatchNumber">
    <Form.Label>Batch Number:</Form.Label>
    <Form.Control type="text" placeholder="Enter Batch No" name="batch_no"/>
    </Form.Group>
</Col>

     <Col>
     <Form.Group controlId="formBasicQuantity">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="number" placeholder="How many: qty" name="quantity"/>
    </Form.Group>
     </Col>

     <Col>
    <Form.Group controlId="formBasicFrom">
        <Form.Label>Received From</Form.Label>
        <Form.Control type="text"  placeholder="Received from" name="received_from"/>
    </Form.Group>
    </Col>

    <Col>
     <Form.Group controlId="formBasicBy">
        <Form.Label>Received By</Form.Label>
        <Form.Control type="text" placeholder="Received By" name="received_by"/>
    </Form.Group>
     </Col>

    <Col>
    <Form.Group controlId="formBasicPrice">
        <Form.Label>Expiry Date</Form.Label>
        <Form.Control type="date"  name="expiry"/>
    </Form.Group>
    </Col>
</Row>

<Row  xs={4} className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
    <Button variant="primary"  type="submit">
        Add to Inventory
    </Button>
</Row>
    </Form>

    </div>

    </React.Fragment>


   );
}

export default Receipts;