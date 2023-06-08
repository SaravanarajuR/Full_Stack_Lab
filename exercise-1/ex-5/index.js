document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  handleSubmit();
});

handleSubmit = () => {
  const tasks = document.getElementById("tasks").value;
  if (tasks != "") {
    document.getElementById("tasks").value =
      tasks + "\n" + document.getElementById("addtask").value;
  } else {
    document.getElementById("tasks").value =
      document.getElementById("addtask").value;
  }
  document.getElementById("addtask").value = "";
};

handleNext = () => {
  const tasks = document.getElementById("tasks").value;
  if(tasks===""){
    alert("No tasks left")
  }else{
  let data = document.getElementById("tasks").value.split("\n");
  document.getElementById("next").value = data[0];
  data.shift();
  document.getElementById("tasks").value = data.join("\n");
}};
