function project(props) {
  return (
    <div className="preview">
      <h4>{props.data.pname}</h4>
      <h4>{props.data.slot}</h4>
      <p>Members</p>
      <div>
        <p>
          {props.data.mem1.name}-{props.data.mem1.roll}
        </p>
        <p>
          {props.data.mem2.name}-{props.data.mem2.roll}
        </p>
        <p>
          {props.data.mem3.name}-{props.data.mem3.roll}
        </p>
      </div>
    </div>
  );
}

export default project;
