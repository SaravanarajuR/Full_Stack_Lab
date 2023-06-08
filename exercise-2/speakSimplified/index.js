import exclusion from "./exclusion.js";
import strength from "./strengthen.js";
import emphase from "./emphasize.js";

document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const str = document.getElementById("input").value;
  document.getElementById("3").value = exclusion(str);
  document.getElementById("2").value = strength(str);
  document.getElementById("1").value = emphase(str);
});
