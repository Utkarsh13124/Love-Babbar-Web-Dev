import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from 'react-toastify';


const  App = () => {

  const [courses, setCourses] = useState(null);
  // we stored it initially null , when ourUseeffect run , it stores the data with our value.

  // using useEffect hook to fetch API data after rendering
  useEffect( () => {
    // writing function inside function , then  calling it
    const fetchData = async() =>{
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();   
        // save output in some variable , using useState
        setCourses(output.data);
        // console.log(output);      
      }
      catch(error) {
        toast.error("Something went wrong");
      }
    }

    fetchData();

  } , []);

  return (
    <div className="App">
      <Navbar/>

      <Filter
        filterData = {filterData}
      />

      <Cards courses="courses"/>

    </div>
  );
}

export default App;
