const vals = [
  ["Monitors", ["LCD Screens", "LED Screens", "Vibrant Colors"]],
  ["Mother boards", ["fast"]],
  ["Chips", ["i9", "i7", "i5", "i3", "Core2Duo", "Pentium", "Very Fast"]],
  ["Hard Drives", ["2TB", "1TB", "100-500GB", "Fast-reading"]],
  ["DVD-ROMs", ["Burn CDs", "Burn DVDs"]],
  ["Cases", ["ATX", "AT", "Mini", "Other Sizes", "Choice of Colors"]],
  ["Power Supplies", ["We Can get one for any computer!"]],
];

function handleLoad() {
  for (let i = 0; i < vals.length; i++) {
    const p = document.createElement("p");
    let prod = `${vals[i][0]}: `;
    for (let j = 0; j < vals[i][1].length; j++) {
      if (j === vals[i][1].length - 1) {
        prod += `${vals[i][1][j]} `;
      } else {
        prod += `${vals[i][1][j]}, `;
      }
    }
    p.innerText = prod;
    document.getElementById("productContainer").appendChild(p);
  }
}
