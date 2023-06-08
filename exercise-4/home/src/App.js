import React, { useState } from "react";

function App() {
  const [warn, setWarn] = useState("");
  const [month, setMonth] = useState("");
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setWarn(value > 0 && value < 1 ? "" : "Enter value between 0 to 1");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const salary = Number(document.getElementById("salary").value) / 12;
    const save = salary * Number(document.getElementById("save").value);
    const dp = Number(document.getElementById("price").value) * 0.25;
    setMonth(Math.ceil(dp / save));
  };
  return (
    <form id="form">
      <input
        className="input"
        id="salary"
        placeholder="Annual salary"
        required
      />
      <div className="div">
        <input
          className="input"
          id="save"
          onChange={handleChange}
          placeholder="Percentage to Save"
          required
        />
        {warn === "" ? "" : <p className="input">{warn}</p>}
      </div>
      <input
        className="input"
        id="price"
        placeholder="Price of your dream home"
        required
      />
      <button onClick={handleSubmit}>Calculate</button>
      {month === "" ? "" : <h4 className="input">{month}</h4>}
    </form>
  );
}

export default App;
