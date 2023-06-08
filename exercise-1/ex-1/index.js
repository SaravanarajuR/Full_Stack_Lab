handleSubmit = () => {
  const data = document.getElementById("number").value;
  const re = /\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}/g;
  if (re.test(data)) {
    if (data.replace(/[() -]/g, "").length !=10) {
      document.getElementById("validation").innerText =
        "Invaid-Only 10 Digits allowed";
      document.getElementById("number").style.backgroundColor = "#CD6B6B";
    } else {
      document.getElementById("number").disabled = true;
      document.getElementById("validation").innerText =
        "success-" + data.replace(/[() -]/g, "");
    }
  }else{
    console.log(re.test(data));
    document.getElementById("validation").innerText =
        "Invaid Phone Number";
  }
};
