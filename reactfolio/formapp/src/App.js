import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    postal: "",
    comments: "false",
    candidates: "false",
    offers: "false",
    notification: "",
  });

  function changeHandler(event) {
    const { type, name, checked, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function clickHandler(event) {
    event.preventDefault();
    console.log("Data Printed");
    console.log(formData);
  }
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <main className="">
      <form className=" w-[40%] mx-auto " onSubmit={clickHandler}>
        <label htmlFor="firstName">First name</label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Aditya Kiran"
          value={FormData.firstName}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="lastName">Last name</label>
        <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Acharya"
          value={FormData.lastName}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="email">Email</label>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="xyz@gmail.com"
          value={FormData.email}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="country">Country</label>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="border"
        >
          <option value="India">India </option>
          <option value="USA">USA </option>
          <option value="Canada">Canada </option>
          <option value="Mexico">Mexico</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="street">Street Address</label>
        <br></br>
        <input
          type="text"
          name="street"
          id="street"
          placeholder="1234 street"
          value={FormData.street}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Aska"
          value={FormData.city}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="state">State / Province</label>
        <br></br>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Odisha"
          value={FormData.state}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="postal">ZIP / Postal code</label>
        <br></br>
        <input
          type="text"
          name="postal"
          id="postal"
          placeholder="761111"
          value={FormData.postal}
          onChange={changeHandler}
          className="border"
        ></input>
        <br></br>
        <br></br>
        <fieldset>
          <legend>By Email</legend>
          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={changeHandler}
            ></input>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          <br></br>

          <div>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              onChange={changeHandler}
            ></input>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
          <br></br>

          <div>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              onChange={changeHandler}
            ></input>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
          <br></br>
          <br></br>
        </fieldset>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="notification"
            value={"Everything"}
            id="Everything"
            onChange={changeHandler}
          ></input>
          <label htmlFor="Everything">Everything</label>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="notification"
            value={"Same as email"}
            id="Same as email"
            onChange={changeHandler}
          ></input>
          <label htmlFor="Same as email">Same as email</label>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="notification"
            value={"No push notifications"}
            id="No push notifications"
            onChange={changeHandler}
          ></input>
          <label htmlFor="No push notifications">No push notifications</label>
          <br></br>
          <br></br>
        </fieldset>

        <button className=" bg-blue-500 py-2 px-4 rounded-sm text-white">
          Save
        </button>
      </form>
    </main>
  );
}

export default App;
