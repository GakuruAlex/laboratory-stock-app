import React ,{useEffect,useState}from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter,NavLink,Route} from "react-router-dom";



import Disbursment from "./Disbursment";


function Stock() {
const baseUrl= "http://localhost:3000/receipts";

const [stockData,setStockData]=useState([])

let [indexOfClicked,setIndexOfClicked]=useState([]);



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



const handleClick = (event) => {
  // 👇️ toggle shown state
console.log("Index of clicked is in handleclick",event.target.value)

console.log("Event current target is ",event.currentT)

  const status=setIsDispatch(current => !current);
    return status;

};



const displayStock=stockData.map((aStock)=>{

return <React.Fragment key={aStock.id} >



<table class="border-separate border-spacing-3 border border-slate-200 ...">
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
      <th><NavLink  to="/disbursment">

      <Button variant="primary"  type="button"
      value={aStock.id}
      onClick={(event)=>{handleClick(event)} }>

        Dispatch Stock
        </Button>

      </NavLink>

        </th>

    </tr>

  </tbody>
</table>



</React.Fragment>

})


console.log("Index of clicked in stock ene",indexOfClicked)
    return ( <React.Fragment>
      {displayStock}


{isDispatch &&

<BrowserRouter>
<Route path='/disbursement' element={<Disbursment indexOfClicked={indexOfClicked}/>}></Route>

</BrowserRouter>




}


</React.Fragment>)
}

export default Stock;