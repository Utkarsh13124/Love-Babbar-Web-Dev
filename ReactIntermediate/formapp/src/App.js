import React from "react";
import { useState } from "react";

function App() {
  // const [firstName , setfirstName] = useState("");
  // const [lastName , setlastName] = useState("");
  // function changeFirstHandler(event){
  //   setfirstName(event.target.value);
  //   console.log(firstName); 
  // }
  // function changeLastHandler(event){
  //   setlastName(event.target.value);
  //   console.log(lastName);
  // }

  const [formData, setFormData] = useState( {firstName: "", lastName: "" , email:"" , comment:"" , isVisible : false  , mode:"" , favCar : ""} );
  function changeHandler(event){
    // console.log( event.target);// ye hume tag deta hi jiski wajah se ye event fire hua hi
    const { name , value , checked , type} = event.target;
    // destructuring is used here to take out multiple values from the object. 
    setFormData( prevFormData => {
      return {
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
        // name key that is event.target.name ki value hum checked or value daal rhe hi , jo ki khud bhi event.target.checked ya value hi
      }
    });
  };/* 
  ...prevFormData -- suppose we have 20 data , but we are changing only one at a time. so this line is copying all old data
  [event.target.name] : event.target.value // this line event.target.name give the name , what is in name , here name attribute of input tag is used to distinguish each input element, so the whole first half line will give name attribute value , then that is changed to target.value
  */

    function submitHandler(event) {
      event.preventDefault();
      // print
      console.log("Printing all data...");
      console.log(formData);

    }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}/>

          <br />
          <br />
        <input
          type='text'
          placeholder='second name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}/>
  
          <br />
          <br />
        <input
          type='email'
          placeholder='enter email'
          onChange={changeHandler}
          name="email"
          value={formData.email}/>

<textarea
      placeholder="Enter your comments"
      onChange={changeHandler}
      name="comment"
      value={formData.comment}/>
      <br/>

      <input
      type="checkbox"
      onChange={changeHandler}
      name="isVisible"
      checked={formData.isVisible}
      id="isVisible"/>
      <label htmlFor="isVisible">Am I visible?</label>
      {/* we use id to attach label with checkbox, its benefit if we click on text or the checkbox , it will marked as checked or unchecked. */}

      <br/>
      <br/>

      <fieldset>
        <legend>Mode:</legend>
        <input 
        type="radio"
        onChange={changeHandler}
        name='mode' // per name only one can be checked
        value="Online-Mode" // to be setted
        id="Online-Mode" // to be used with label
        checked = {formData.mode === "Online-Mode"} // marks checcked this radio btn , per name only one can be checked, as after useState change it rerenders and its value setted here
      />
      <label htmlFor="Online-Mode">Online-Mode</label>
      <br/>

      <input 
        type="radio"
        onChange={changeHandler}
        name='mode' // per name only one can be checked
        value="Offline-Mode" // to be setted
        id="Offline-Mode" // to be used with label
        checked = {formData.mode === "Offline-Mode"} // marks checcked this radio btn , per name only one can be checked, as after useState change it rerenders and its value setted here
      />
      <label htmlFor="Offline-Mode">Offline-Mode</label>

      </fieldset>

      <br/>

      <label htmlFor="favCar">Tell me your favorite Car</label>
      <select
        name="favCar"
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}
      >
        <option value="scarpio">Scorpio</option>
        <option value="fortuner">Fartuner</option>
        <option value="tharr">Tharrr</option>
        <option value="legenderer">Legender</option>
        <option value="defender">Defender</option>

      </select>

      <br/>
      <input type="submit" value="Submit" />
      <br/><br/>
      <button>
        Submit
      </button>

      </form>

      
    

    </div>
  );
}

export default App;
