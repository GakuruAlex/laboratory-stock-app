import React, { useState,createRef ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Receipts() {

const formData=createRef();

const [commodities,setCommodities]=useState([]);

const [stock,setStock]=useState([]);

const fetchUrl="http://localhost:3000";
const receiptsUrl="http://localhost:3000/receipts";
const stockUrl="http://localhost:3000/stock";


useEffect(()=>{
//Fetch existing  receipts transactions
const receiptData=fetchData(receiptsUrl)
setCommodities(receiptData)
//fetch existing stock data
const stockData=fetchData(stockUrl)
setStock(stockData)


    },[]);

//fetch abstraction
function fetchData(url){
   fetch(url)
   .then((response)=>response.json())
   .then((data)=>data)
   .catch((error)=>error);
}


//POST abstraction
const post=(url,dataToPost)=>fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  });

const increaseStock=()=>{


}

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


  return (
    <React.Fragment>
   {/*Receipts Form  */}
   <Form onSubmit={add} ref={formData} class="  m-2">
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

<Row  xs={4} class="mt-3 col-md-12 text-center">
    <Button variant="primary"  type="submit">
        Add to Inventory
    </Button>
</Row>
    </Form>

    </React.Fragment>


   );
}

export default Receipts;