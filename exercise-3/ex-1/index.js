setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  document.getElementById("time").innerText = `${hours}:${min}:${sec}`;
}, 1000);

setInterval(() => {
  const colors = ["yellow", "green", "palered", "teal", "paleturquoise"];
  document.getElementById("year").style.color =
    colors[Math.floor(Math.random() * colors.length)];
}, 3000);

setInterval(() => {
  const colors = ["yellow", "green", "palered", "teal", "paleturquoise"];
  document.getElementById("color").style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}, 1000);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const d = date.getDate();

document.getElementById("date").innerText = `  ${d}/${month}/ `;
document.getElementById("year").innerText = `  ${year}`;
