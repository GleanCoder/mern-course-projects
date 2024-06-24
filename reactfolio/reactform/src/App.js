import "./App.css";
import React, { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // function changeFirstName(event) {}
  // function changeLastName(event) {}
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    cityName: "",
    isVisible: true,
    mode: "",
  });
  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={changeHandler}
          value={formData.firstName}
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={changeHandler}
          value={formData.lastName}
        ></input>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        ></input>
        <br></br>
        <br></br>
        <textarea
          placeholder="Enter Message"
          name="comment"
          onChange={changeHandler}
          value={formData.comment}
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="cityName"> city Name?</label>
        <select
          id="cityName"
          name="cityName"
          onChange={changeHandler}
          value={formData.cityName}
        >
          <option value="bbsr">BBSR</option>
          <option value="Berhampur">Berhampur</option>
          <option value="Aska">Aska</option>
          <option value="cuttack">cuttack</option>
        </select>
        <br></br>
        <br></br>
        <input
          type="checkbox"
          id="isVisible"
          name="isVisible"
          onChange={changeHandler}
          checked={formData.isVisible}
        ></input>
        <label htmlFor="isVisible">Am I visible?</label>
        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            id="online-mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
          ></input>
          <label htmlFor="online">Online</label>
          <input
            type="radio"
            name="mode"
            onChange={changeHandler}
            id="offline-mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
          ></input>
          <label htmlFor="offline">Offline</label>
        </fieldset>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
