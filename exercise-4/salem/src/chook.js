import { useState } from "react";

function Chook(iv) {
  function changeState() {
    setState(state > 0 ? state - 1 : "Out of Stock");
  }
  const [state, setState] = useState(iv);
  return [state, changeState];
}

export default Chook;
