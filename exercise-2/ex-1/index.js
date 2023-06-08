function handleRender() {
  document.getElementById("drop").innerHTML =
    "<option value=''>Choose</option>" + getValues().join("");
}

function getValues() {
  return Object.keys(getCities()).map((k) => {
    return `<option value=${k}>${k}</option>`;
  });
}
function chooseCity() {
  const city = document.getElementById("drop").value;
  if (city === "") {
    document.getElementById(
      "count"
    ).innerHTML = `<input value='Choose a city' disabled>`;
  } else {
    document.getElementById("order").value = "";
    document.getElementById("order").disabled = false;
    document.getElementById("orderDetails").innerHTML = `<p>Available Stocks: ${
      getCities()[city]
    }</p>`;
  }
}

function email() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("add").value;
  const order = document.getElementById("order").value;
  return `Name:${name}
  Address:${address}
  Quantity:${order}`;
}

function getCities() {
  return {
    Chennai: 15,
    Coimbatore: 12,
    Madurai: 12,
    Salem: 8,
    Tiruchirappalli: 6,
    Thoothukudi: 2,
  };
}

function handleSubmit(evt) {
  const city = document.getElementById("drop").value;
  const order = document.getElementById("order").value;
  if (order <= getCities()[city]) {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=saravanarajur200@gmail.com&su=Order&body=${email()}`;
  } else {
    alert("Choose value below available stock");
  }
}
