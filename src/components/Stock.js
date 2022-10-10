import React ,{useEffect,useState}from "react";

import Receipts from "./Receipts";

function Stock() {
const baseUrl= "http://localhost:3000/stock";

const [stockData,setStockData]=useState([])

useEffect(()=>{

fetch(baseUrl)
.then((response)=>response.json())
.then((data)=>{

 return setStockData(data)})
.catch((error)=>console.log("Error",error))

},[]);




const displayStock=stockData.map((aStock)=>{
return <React.Fragment key={aStock.id} >
<table class="border-separate border-spacing-3 border border-slate-300 ...">
  <thead>
    <tr>
      <th class="border border-slate-300 ...">Commodity Name</th>
      <th class="border border-slate-300 ...">Balance</th>
      <th class="border border-slate-300 ...">Unit Value</th>
      <th class="border border-slate-300 ...">Total Value</th>
      <th class="border border-slate-300 ...">Expiry Date</th>
      <th class="border border-slate-300 ...">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">{aStock.commodityName}</td>
      <td class="border border-slate-300 ...">{aStock.balance}</td>
      <th class="border border-slate-300 ...">{aStock.unitValue}</th>
      <th class="border border-slate-300 ...">{aStock.totalValue}</th>
      <th class="border border-slate-300 ...">{aStock.expiry}</th>
      <th class="border border-slate-300 ...">{aStock.totalValue}</th>
    </tr>

  </tbody>
</table>

</React.Fragment>

})



    return ( <React.Fragment>{displayStock}</React.Fragment> );
}

export default Stock;