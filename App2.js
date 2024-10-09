import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./topcourse/src/data";
import Navbar from "./topcourse/src/Components/Navbar";
import Filter from "./topcourse/src/Components/Filter";
import Cards from "./topcourse/src/Components/Cards";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState([]);
  // we stored it initially null , when ourUseeffect run , it stores the data with our value.

  // using useEffect hook to fetch API data after rendering
  useEffect(() => {
    // writing function inside function , then  calling it
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save output in some variable , using useState
        console.log("corses ka data is printing");
        setCourses(output.data);
        // console.log(output.data);
      } catch (error) {
        // console.log("corses ka data not is printing");
        toast.error("Something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        <Cards courses={courses} />
      </div>
    </div>
  );
};

export default App;
