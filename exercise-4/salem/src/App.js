import Chook from "./chook";
import Food from "./food";

function App() {
  const [muffin, setmuffin] = Chook(20);
  const [cookie, setCookie] = Chook(20);
  let handleClick = (e) => {
    e.target.className === "muffin" ? setmuffin() : setCookie();
  };
  return (
    <div className="App">
      <Food
        src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Wild-Blueberry-Muffins_EXPS_FTTMZ19_787_B03_05_7b_rms.jpg"
        className="muffin"
        count={muffin}
        change={handleClick}
        name={"Choco Muffins"}
      />
      <Food
        src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/18134-five-star-chocolate-chip-cookies-760x580.jpg?ext=.jpg"
        className="cookie"
        change={handleClick}
        count={cookie}
        name={"Choco Chip Cookies"}
      />
    </div>
  );
}

export default App;
