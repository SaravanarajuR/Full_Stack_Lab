const stationary_items = {
  0: {
    name: "Four-line notebook",
    stock: "10",
  },
  1: {
    name: "Two-line notebook",
    stock: "10",
  },
  2: {
    name: "HB pencil",
    stock: "10",
  },
  3: {
    name: "Eraser",
    stock: "10",
  },
  4: {
    name: "Drawing Notebook",
    stock: "10",
  },
};
let cart = {};
function checkStock() {
  document.getElementById("stockDisplay").innerHTML = "";
  const div = document.createElement("div");
  div.setAttribute("id", "stocks");
  Object.keys(stationary_items).forEach((k) => {
    const p = document.createElement("p");
    p.innerText = `${stationary_items[k].name}:${stationary_items[k].stock}`;
    div.appendChild(p);
  });
  const body = document.getElementById("stockDisplay");
  body.appendChild(div);
}

function handleCart() {
  document.getElementById("cart").style.visibility =
    document.getElementById("cart").style.visibility === "hidden"
      ? `visible`
      : "hidden";
}

function handleSelection(evt) {
  if (stationary_items[Number(evt.target.className)].stock === 0) {
    alert("Item out of stock");
  } else {
    cart[stationary_items[evt.target.className].name] = cart[
      stationary_items[evt.target.className].name
    ]
      ? cart[stationary_items[evt.target.className].name] + 1
      : 1;
    stationary_items[Number(evt.target.className)].stock -= 1;
    document.getElementById("cart").innerHTML = "";
    const div = document.createElement("div");
    Object.keys(cart).forEach((k, ind) => {
      const p = document.createElement("p");
      p.innerText = `${k}:${cart[k]}`;
      div.appendChild(p);
      document.getElementById("cart").appendChild(div);
      handleRender();
    });
  }
}

function handlebuy() {
  handleRender(stationary_items);
}

function handleRender() {
  for (let i = 0; i < Object.keys(stationary_items).length; i++) {
    document.getElementById(i).innerHTML = "";
  }
  for (let i = 0; i < Object.keys(stationary_items).length; i++) {
    const productName = document.createElement("p");
    productName.innerText = stationary_items[i].name;
    productName.className = "name";
    document.getElementById(i).append(productName);
    const avl = document.createElement("p");
    avl.innerText = `Available stock ${stationary_items[i].stock}`;
    document.getElementById(i).append(avl);
    const button = document.createElement("button");
    button.setAttribute("class", `${i}`);
    button.setAttribute("id", "button");
    button.setAttribute("onclick", "handleSelection(event)");
    button.innerText = "+";
    document.getElementById(i).appendChild(button);
  }
}
