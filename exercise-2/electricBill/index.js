document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const units = document.getElementById("input").value;
  let charges;
  if (units < 100) {
    charges = units * 0;
  } else if (101 <= units <= 200) {
    charges = 100 + (units - 150) * 3.75;
  } else if (201 <= units <= 400) {
    charges = 250 + (units - 350) * 4;
  } else if (401 <= units <= 600) {
    charges = 350 + (units - 450) * 4.25;
  } else if (units > 600) {
    charges = 400 + (units - 600) * 5;
  }
  document.getElementById("total").value = charges;
  document.getElementById("consume").value = units;
  document.getElementById("current").value = charges;
  document.getElementById("new").value = 250;
  document.getElementById("fixed").value = 50;
  document.getElementById("subsidy").value = 0.0;
  document.getElementById("net").value = units < 100 ? 0 : charges - 250 + 50;
});
