import React ,{useEffect,useState}from "react";


import Disbursment from "./Disbursment";


function Stock() {
const baseUrl= "http://localhost:3000/receipts";

const [stockData,setStockData]=useState([])


//Redirect to dispatch
const [isDispatch, setIsDispatch] = useState(false);

useEffect(()=>{

const fetchStock=()=>{fetch(baseUrl)
.then((response)=>response.json())
.then((data)=>{

 return setStockData(data)})
.catch((error)=>console.log("Error",error))}
fetchStock();
},[]);



const handleClick = event => {
  // 👇️ toggle shown state
  setIsDispatch(current => !current);


};

const displayStock=stockData.map((aStock)=>{

return <React.Fragment key={aStock.id} >



<table class="border-separate border-spacing-3 border border-slate-300 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">Batch number</th>
      <th class="border border-slate-300 ...">Balance</th>
      <th class="border border-slate-300 ...">Expiry Date</th>
      <th class="border border-slate-300 ...">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">{aStock.batchNo}</td>
      <td class="border border-slate-300 ...">{aStock.quantity}</td>
      <th class="border border-slate-300 ...">{aStock.expiry}</th>
      <th>  <Button variant="primary"  type="button"  onClick={handleClick}>
        Dispatch Stock

    </Button></th>

    </tr>

  </tbody>
</table>

</React.Fragment>

})



    return ( <React.Fragment>{displayStock}


{isDispatch && <Disbursment />}

    </React.Fragment> );
}

export default Stock;