function handleRender() {
  document.getElementById("drop").innerHTML =
    "<option value=''>Choose</option>" + getValues().join("");
}

const orders={};

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
  if(Number(document.getElementById("order").value)>getCities[document.getElementById("city").value]){
    alert("order out of stock");
  }else{
  evt.preventDefault();
  orders[Object.keys(orders).length]={
    name:document.getElementById("name").value,
  address: document.getElementById("add").value,
  quantity:document.getElementById("order").value
}}
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
evt.preventDefault();
  document.write("Order Submitted"+JSON.stringify(orders));
}

window.addEventListener("submit", handleSubmit);
