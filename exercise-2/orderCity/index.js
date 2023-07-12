let orders = {};
let i = 0;

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
    document.getElementById(
      "count"
    ).innerHTML = `<input type="number" value='' id='order' max=${
      getCities()[city]
    }>`;
    document.getElementById("orderDetails").innerHTML = `<p>Available Stocks: ${
      getCities()[city]
    }</p>`;
  }
}

function addOrder(evt) {
  evt.preventDefault();
  if (
    Number(document.getElementById("order").value) >
    getCities[document.getElementById("drop").value]
  ) {
    alert("order out of stock");
  } else {
    evt.preventDefault();
    orders[i] = {
      name: document.getElementById("name").value,
      address: document.getElementById("add").value,
      quantity: document.getElementById("order").value,
    };
    i++;
  }
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
  const view = document.getElementById("view");
  view.style.visibility = "visible";
  view.onclick = () => {
    view.style.visibility = "hidden";
  };
  view.innerText = "";
  view.innerText += "name\taddress\tcity\torders\n";
  console.log(orders);
  Object.keys(orders).map((k) => {
    view.innerText += Object.values(orders[k]).join("\t") + "\n";
    view.innerText += "\n";
    return null;
  });
}
