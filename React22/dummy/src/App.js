import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// This code will run after the component is rendered
// ye jis function me likha hi , us function ke execute hone ke baad ,
// use state run hoga , aur jo code iske ander likha hi , wo execute hoga.

function App() {
  const [text, setText] = useState('');
  const [name , setName] = useState('love'); 
  //& variation 1  --> run on every rendering.
  // here on each input or change ,  changeHandler call , function render , then it also execute.
  // useEffect( ()=>{
  //   console.log("UI rendering done");
  // });

  //& variation 2 -> execute on first render only
  // useEffect( () => {
  //   console.log("Variation 2 rendering done");
  // }, []);
   // The empty dependency array ensures the effect runs only once

   //& variation 3 -> on first render  + dependency change
//     useEffect( () => {
//       console.log("Change observed");
// },[text , name]);
// jab text change hoga tab chalega ye.

//& variation 4 -> to handle unmounting of a componenet
useEffect( ()=> {
  // add event listener
  console.log("listener added");

  return () => { 
    // remove event listener
    console.log("listener removed");
  }
},[text]);
// pehle return wali statement chalegi , phir useEffect ke ander wala code run hoga.

  function changeHandler(e) {
    // e is the event object, e.target is the input element
    // e is contained informance about the triggered
    setText(e.target.value);
    console.log({ text });
  }
 
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
