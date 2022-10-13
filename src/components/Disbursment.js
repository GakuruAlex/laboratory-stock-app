import React from 'react';
import { Table,Button ,Form,Row,Col} from 'react-bootstrap';



function Disbursment(props) {

console.log("index of clicked inside disbursement",props)

    return (
    <React.Fragment>

<div  className="w-85 p-3" style={{ backgroundColor: "#eee" }}>
   <Form /*onSubmit={add} ref={formData}*/ >
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
        Dispatch to Facility
    </Button>
</Row>
    </Form>

    </div>

    </React.Fragment>

    )

}

export default Disbursment;