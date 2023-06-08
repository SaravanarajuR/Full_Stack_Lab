function getColor() {
  let color = document.querySelector("#color").value;
  color = color.toUpperCase();
  const hex = /#[A-F]{6}/;
  const hex3 = /#[A-F]{3}/;
  const rgbd =
    /^(RGB)\((([0-9][0-9],)|([0-1][0-9][0-9],)|(2[0-5][0-5],)){2}(([0-9][0-9])|([0-1][0-9][0-9])|(2[0-5][0-5]))\)/;
  const rgbp =
    /^(RGB)\((([0-9]%)|([0-9][0-9]%,)|(1[0][0]%,)){2}(([0-9]%)|([0-9][0-9]%)|(1[0][0]%))\)/;
  if (hex.test(color)) {
    document.getElementById("output").innerText = color;
  } else if (hex3.test(color)) {
    color = color.replace("#", "").repeat(2);
    document.getElementById("output").innerText = `#${color}`;
  } else if (rgbd.test(color)) {
    color = color
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map((k) => {
        return Number(k).toString(16);
      })
      .join("");
    document.getElementById("output").innerText = `#${color}`;
  } else if (rgbp.test(color)) {
    color = color
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map((k) => {
        let percent = k.replace("%", "");
        return Math.round((Number(percent) / 100) * 255).toString(16);
      })
      .join("");
    document.getElementById("output").innerText = `#${color.toUpperCase()}`;
  } else {
    document.getElementById("output").innerText = "Invalid";
  }
}
