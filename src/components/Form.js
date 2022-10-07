import React from "react";



function Form(

  {/*Props from recipts and issue */
    commodityName,
    unitOfIssue,
    itemCode,
    storageRequirements
    ,averageMonthlyConsumption
    ,minimumValue,
    maximumValue,
    date,
    receivedFrom,
    docNo,
    quantity,
    batchNo,
    expiryDate,
    receiversName,
    loc
  }
) {


    return (
  <React.Fragment>
<form class=" mt-2 px-2 mx-2 mb-2
 bg-sky-400 	background-color: rgb(14, 165, 233);">

{/*Conditional rendering based on the form props */}

{/*First row */}
  <div class=" grid gap-1 grid-cols-4 grid-rows-2">


  <div class=" px-1 mb-5 ">

  {/*Commodity name */}
   {commodityName ? <>
   <label class="block uppercase tracking-wide
    text-gray-700 text-xs font-bold mb-2"
   for="commodity-name"/>{commodityName}


<input class="appearance-none block w-full
 bg-gray-200 text-gray-700 border
  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
   focus:bg-white focus:border-gray-500"
   id="grid-commodity-name" type="text"
    placeholder={commodityName}/></>
    :null}

    </div>


{/*Unit of Issues */}
    <div class=" px-1 mb-5 ">
     { unitOfIssue ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="unit-of-issue"/>
      {unitOfIssue}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white
          focus:border-gray-500"
         id="grid-unit-of-issue"
         type="text"
         placeholder={unitOfIssue}/></>
         :null}
    </div>

    {/*Item code */}

    <div class=" px-1 mb-5 ">
      {itemCode ?<>
      <label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
        for="item-code"/>
      {itemCode}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
         id="grid-item-code"
         type="text"
         placeholder={itemCode}/></>
         :null
         }
    </div>


   {/*Storage Requirements */}
    <div class=" px-1 mb-5 ">
      {storageRequirements ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="storage-requirements"/>
      {storageRequirements}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
         id="grid-storage-requirements"
         type="text"
         placeholder={storageRequirements}/></>
         :null
         }
    </div>


    {/*Average Monthly Requirements */}
    <div class=" px-1 mb-5 ">
     { averageMonthlyConsumption ?<><label class="block uppercase tracking-wide
      text-gray-700 text-xs font-bold mb-2"
      for="average-monthly-consumption"/>
    {averageMonthlyConsumption}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white
          focus:border-gray-500"
         id="grid-average-monthly-consumption"
         type="text"
         placeholder={averageMonthlyConsumption}/></>
         :null
         }
    </div>



  {/*Minimun level*/}
    <div class=" px-1 mb-5 ">
     { minimumValue ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="minimum-level"/>
      {minimumValue}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
         id="grid-minimum-value"
          type="text"
           placeholder={minimumValue}/></>
           :null
           }
    </div>

{/*Maximum value */}

    <div class=" px-1 mb-5 ">
      {maximumValue ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="maximum-value"/>
     {maximumValue}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white
          focus:border-gray-500"
         id="grid-maximum-value"
         type="text"
         placeholder={maximumValue}/></>
         :null}
    </div>

  </div>

{/*Second row */}

  <div class=" grid gap-1 grid-cols-8 grid-rows-1">

{/*Date */}
  <div class=" px-1 mb-5 ">
      {date ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="date"/>
    {date}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
         id="grid-date"
         type="date"
         placeholder={date}/></>
         :null}
    </div>


    {/*Received From */}
    <div class=" px-1 mb-5 ">

      {receivedFrom ?<><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-received-from"/>
    {receivedFrom}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
          id="grid-received-from"
          type="text"
          placeholder={receivedFrom}/></>
          :null
          }
    </div>

    {/*document Number*/}

    <div class=" px-1 mb-5 ">
      {docNo ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="grid-doc-no"/>
      {docNo}

      <input class="appearance-none block w-full
       bg-gray-200 text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white focus:border-gray-500"
         id="grid-doc-no"
         type="text"
         placeholder={docNo}/></>:null}

    </div>

    {/*Quantity*/}
    <div class=" px-1 mb-5 ">
      {quantity ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
        for="grid-quantity"/>
       {quantity}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
          focus:bg-white
           focus:border-gray-500"
            id="grid-quantity"
            type="text"
             placeholder={quantity}/></>
             :null}
    </div>


    {/*Batch Number */}
    <div class=" px-1 mb-5 ">
     { batchNo ? <><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
        for="grid-batch-no"/>
       {batchNo}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white
          focus:border-gray-500"
         id="grid-batch-no"
         type="text"
          placeholder={batchNo}/></>
          :null
          }
    </div>


    {/*expiryDate*/}
    <div class=" px-1 mb-5 ">
    {expiryDate ?<><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="grid-expiry-date"/>
       {expiryDate}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
        border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
         focus:bg-white
          focus:border-gray-500"
           id="grid-expiry-date"
           type="date"
           /></>
           :
           null}
    </div>

     {/*Location */}
    <div class=" px-1 mb-5 ">
     {loc ?<> <label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="grid-loc"/>
       {loc}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
          focus:bg-white
           focus:border-gray-500"
           id="grid-loc"
           type="text"
           placeholder={loc}/></>
           :null}
    </div>

   {/*Recipients Name */}

    <div class=" px-1 mb-5 ">
      {receiversName ? <><label class="block uppercase tracking-wide
       text-gray-700 text-xs font-bold mb-2"
       for="grid-doc-no"/>
       {receiversName}

      <input class="appearance-none block w-full
       bg-gray-200
        text-gray-700 border
         border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
          focus:bg-white
           focus:border-gray-500"
           id="grid-recei vers-name"
           type="text"
           placeholder={receiversName}/></>:null}
    </div>
  </div>


  <div class="flex flex-col justify-center items-center">
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <input class="shadow
       bg-gray-600
        hover:bg-purple-400 focus:shadow-outline focus:outline-none
         text-white font-bold py-2 px-4 rounded"
         type="submit"/>
         </div>
  </div>
</div>

</form>



    </React.Fragment> );
}

export default Form;