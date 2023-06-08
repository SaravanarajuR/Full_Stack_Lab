const colors = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2PsdRIMjxqoEmPGZhYrnkBiVABqeVz4kF-__lQe3&s",
  "https://img.freepik.com/free-photo/outdoor-rich-bright-texture-color_1258-140.jpg?w=360",
  "https://htmlcolorcodes.com/assets/images/colors/violet-color-solid-background-1920x1080.png",
  "https://cdnblog.picsart.com/2020/10/770-x-515.jpg",
  "https://www.htmlcsscolor.com/preview/gallery/AFEEEE.png",
];

function handleLoad() {
  for (let i = 0; i < colors.length; i++) {
    document.getElementById(`${i}`).src = colors[i];
  }
}

function handleSwap() {
  let temp = colors[0];
  colors.shift();
  colors.push(temp);
  handleLoad();
}
