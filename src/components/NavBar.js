import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
      <ul class="flex px-2 mt-2 mx-2 h-10 bg-indigo-200 shadow-lg shadow-indigo-500/50  ">

  <li class="mr-6   text-blue-500  hover:text-blue-800   ">
    <NavLink  to="/form">Form</NavLink>
  </li>
  <li class="mr-6 text-blue-500 hover:text-blue-800">
    <NavLink  to="/stock">Stock</NavLink>
  </li>
  <li class="mr-6 text-blue-500 hover:text-blue-800">
    <NavLink  to="/receipts">Receipts</NavLink>
  </li>
  <li class="mr-6 text-blue-500 hover:text-blue-800">
    <NavLink  to="/disbursment">Disbursment</NavLink>
  </li>
</ul>



    );
  }


  export default NavBar;