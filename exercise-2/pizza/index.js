function handleSubmit(evt) {
  const pizzaCost = document.getElementsByClassName(evt.target.id)[0].id;
  const mushroom = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("mush")[0].checked
    ? 15
    : 0;
  const olives = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("olives")[0].checked
    ? 10
    : 0;
  const nail = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("nail")[0].checked
    ? 30
    : 0;
  const beef = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("beef")[0].checked
    ? 20
    : 0;
  const deepPan = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("pan")[0].checked
    ? 20
    : 0;
  const delivery = document
    .querySelector(`.${evt.target.id}`)
    .getElementsByClassName("delivery")[0].checked
    ? 25
    : 0;
  const toppins = {
    mushroom: mushroom,
    olives: olives,
    Beef: beef,
    "Deep pan": deepPan,
    Delivery: delivery,
    Finfernail: nail,
  };
  const totalCost =
    Number(pizzaCost) + mushroom + olives + nail + beef + deepPan + delivery;
  let pizza = `${evt.target.id}-${pizzaCost}`;
  let order = "";
  Object.keys(toppins).map((k) => {
    if (toppins[k] != 0) {
      order += `\n ${k}-${toppins[k]}`;
    }
  });
  const cart = document.getElementById("cart-inner").innerHTML;
  document.getElementById("cart-inner").innerHTML =
    cart +
    `\t<div onclick='handleDelete(event)'><textarea id='products'  class=${
      cart.split("\t").length
    }
    } disabled>${
      order === ""
        ? `${pizza}\nNo additional services\nTotal:_${totalCost}_`
        : `${pizza}${order}\nTotal:_${totalCost}_`
    }</textarea></div>`;

  document.getElementById("bill").value =
    Number(document.getElementById("bill").value) + totalCost;
}

function handleDelete(evt) {
  const ele = evt.target.className;
  const checkout = document.getElementById("cart-inner").innerHTML;
  document.getElementById("cart-inner").innerHTML = checkout
    .split("\t")
    .filter((k, ind) => {
      if (ind == ele) {
        document.getElementById("bill").value =
          Number(document.getElementById("bill").value) -
          Number(k.split("_")[1]);
        return 0;
      } else {
        return 1;
      }
    })
    .join("\t");
}

function handleOrder() {
  if (document.getElementById("bill").value == 0) {
    alert(`Order first`);
  } else {
    let total = document.getElementById("bill").value;
    alert(`Your Order is Successfully \n Your bill :${total}`);
  }
}

function showCart() {
  document.getElementById("cart").style.display =
    document.getElementById("cart").style.display === "none"
      ? "contents"
      : `none`;
}
