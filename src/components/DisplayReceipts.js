import React from 'react';
import { Table } from 'react-bootstrap';

function DisplayReceipts({commodities}) {
console.log("Receipts are ",commodities)

    return (

        <div  className="w-100 p-3" style={{ backgroundColor: "#eee" }}>
      <Table striped bordered hover variant="dark" class="mt-4 col-md-12 ">
      <thead>
          <tr>
              <th>Index</th>
              <th>Batch Number</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Received from</th>
              <th>Received by</th>
              <th>Expiry Date</th>
          </tr>
      </thead>
      <tbody>
      {
                    commodities.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.batchNo}</td>
                                <td>{item.dateReceived}</td>
                                <td>{item.quantity}</td>
                                <td>{item.receivedFrom}</td>
                                <td>{item.receivedBy}</td>
                                <td>{item.expiry}</td>

                            </tr>
                        )
                    })
                }
      </tbody>
      </Table>
    </div>
     );
}

export default DisplayReceipts;