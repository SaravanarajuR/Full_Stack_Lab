import Project from "./project";
import React, { useState } from "react";

function Teacher(props) {
  const [selected, setSelected] = useState("");
  function handlePreview(e) {
    setSelected(e.target.id);
  }
  function handleList() {
    return Object.keys(props.data).map((k) => {
      return (
        <div className="project" key={k}>
          <p>{props.data[k].pname}</p>
          <p>{props.data[k].slot}</p>
          <button id={k} onClick={handlePreview}>
            View
          </button>
        </div>
      );
    });
  }
  return (
    <div className="teacherParent">
      <div className="tpi">
        <div className="projects">{handleList()}</div>
        <button className="logout" onClick={props.logout}>
          Logout
        </button>
      </div>
      {selected !== "" ? <Project data={props.data[selected]} /> : ""}
    </div>
  );
}

export default Teacher;
