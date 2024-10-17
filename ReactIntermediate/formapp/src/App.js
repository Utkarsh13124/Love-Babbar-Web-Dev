import React from "react";
import { useState } from "react";

function App() {
  const [formData , setFormData] = useState( {firstName : "" , lastName : "" , email : "" , country:"" , streetAddress : "" , city :"" , state:"" , postal : "" ,
    comments : false , candidates : false , offers : false ,
    pushNotification : ""
  } );
  console.log(formData);
  function changeHandler(event) {
    const { name , type , value , checked } = event.target;

    setFormData(
      (prevData) => {
        // agal () bracket use krenge to return likhne ka jaroorat nhi hoga 
        return {
          ...prevData,
          [name] : type === "checkbox" ? checked : value
        };
      }
    );
  }

  function submitHandler(event) {
    event.preventDefault();// default behaviour me data ko refresh kr dete hi page ko
    console.log("Printing the form...");
    console.log(formData);

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="Pranay"
        value={formData.firstName} // 
        id="firstName" // for label
        name="firstName" // 
        />

        <br/> 
        <label htmlFor="lastName">Last Name:</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="Gupta"
        value={formData.lastName} // 
        id="lastName" // for label
        name="lastName" // 
        />

        <br/> 
        <label htmlFor="email">Email Address</label> <br/>   
        <input
        type="email"
        onChange={changeHandler}
        placeholder="pgupta@duck.com"
        value={formData.email} // 
        id="email" // for label
        name="email" // 
        />

        <br/> 
        <label htmlFor="country">Country:</label> <br/>   
        <select
        onChange={changeHandler}
        value={formData.country}
        id="country"
        name="country"
        >
          <option value="india">India</option>
          <option value="germany">Germany</option>
          <option value="us">US</option>
          <option value="australia">Australia</option>

        </select>

        <br/> 
        <label htmlFor="streetAddress">Address:</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="1234 Main Street"
        value={formData.streetAddress} // 
        id="streetAddress" // for label
        name="streetAddress" // 
        />
        <br/>
        <label htmlFor="city">City:</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="Asansol"
        value={formData.city} // 
        id="city" // for label
        name="city" // 
        />
        <br/>
        <label htmlFor="state">State/Province :</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="West Bengal"
        value={formData.state} // 
        id="state" // for label
        name="state" // 
        />
        <br/>
        <label htmlFor="postal">ZIP/Postal code</label> <br/>   
        <input
        type="text"
        onChange={changeHandler}
        placeholder="713306"
        value={formData.postal} // 
        id="postal" // for label
        name="postal" // 
        />

        <fieldset>
          <legend>By Email</legend> <br/>

    <div>
      <input
          id="comments"
          name="comments"
          type="checkbox"
          checked={formData.comments}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor="comments">Comments</label>
          <p>Get Notified when someone posts a comment on a posting.</p>
          </div>
    </div>

    <div>
      <input
          id="candidates"
          name="candidates"
          type="checkbox"
          checked={formData.candidates}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor="candidates">candidates</label>
          <p>Get Notified when candidates applied for a job.</p>
          </div>
    </div>

    <div>
      <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor="offers">Offers</label>
          <p>Get Notified when candidate accepts or rejects an offer.</p>
          </div>
    </div>
  </fieldset>
        

    <br/>
    <fieldset>
      <legend>Push Notification</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
      type="radio"
      id="pushEverything"
      name="pushNotification"
      value="Everything"
      onChange={changeHandler}
       />
       <label htmlFor="pushEverything">Everything</label>

       <br/>
       <input
      type="radio"
      id="pushEmail"
      name="pushNotification"
      value="Same as email"
      onChange={changeHandler}
       />
       <label htmlFor="pushEmail">Same as Email</label>

      <br/>
       <input
      type="radio"
      id="pushNothing"
      name="pushNotification"
      value="No push Notifications"
      onChange={changeHandler}
       />
       <label htmlFor="pushNothing">No push Notifications</label>

       <br/>

       <button >
        Save
       </button>

    </fieldset>


      </form>

    </div>
  );
}

export default App;
