function changeMode(event) {
  if (event.target.value === "auto") {
    document.getElementById("option").innerHTML = `<form>
        <select id="core" required>
        <option></option>
        <option value="lab">Lab</option>
        <option value="theory">Theory</option></select>
        <input max=100 min=0 id=in type=number placeholder=internal >
        <input max=100 min=0 id=ex type=number placeholder=external >
        <button onclick=handleSubmit(event)>Submit</button>
        </form>
        `;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inter = document.getElementById("in").value;
  const exter = document.getElementById("ex").value;
  let mark;
  if (document.getElementById("core").value === "lab") {
    mark = inter * 0.6 + exter * 0.4;
  } else if (document.getElementById("core").value === "theory") {
    mark = inter * 0.4 + exter * 0.6;
  }
  document.getElementById("result").innerText = mark;
}
