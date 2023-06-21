import { useEffect, useState } from "react";
import sound from "./alarm.mp3";
import "./index.css";
import Send from "./getAlarms";
import { addAlarm, handleClose } from "./alarmFunctions";

export default function App() {
  const audio = new Audio(sound);
  const [time, setTime] = useState("00:00:00");
  const [intervalId, setId] = useState("");
  const [alarm, setAlarm] = useState(() => {
    const defaultAlarm = {};
    for (let i = 1; i <= 7; i++) {
      defaultAlarm[i] = [];
    }
    return defaultAlarm;
  });

  async function checkalarm(hrs, mins, day) {
    if (alarm[`${day}`].includes(`${hrs}:${mins}`)) {
      const secs = new Date().getSeconds();
      if (secs === 0) {
        document.getElementById("alarmWindow").style.visibility = "visible";
        await audio.play();
      }
    }
  }

  function addAlarm(e) {
    e.preventDefault();
    let newAlarm = alarm;
    const day = document.getElementById("day").value;
    const inputTime = `${document.getElementById("hrs").value}:${
      document.getElementById("mins").value
    }`;
    if (day === "8") {
      for (let i of Object.keys(newAlarm)) {
        if (newAlarm[`${i}`].includes(inputTime)) {
          return null;
        } else {
          newAlarm[`${i}`] = [...newAlarm[`${i}`], inputTime];
        }
      }
    } else {
      if (newAlarm[`${day}`].includes(inputTime)) {
        return null;
      } else {
        newAlarm = {
          ...newAlarm,
          [`${day}`]: [...newAlarm[`${day}`], inputTime],
        };
      }
    }
    setAlarm(newAlarm);
  }
  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      const hrs = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();
      const day = date.getDay();
      setTime(`${hrs}-${mins}-${secs}`);
      checkalarm(hrs, mins, day);
    }, 1000);
    setId(id);
    return clearInterval(intervalId);
  }, [alarm]);

  function handleDelete(e) {
    console.log(e);
    const [day, index] = e.target.id.split("-");
    const newAlarm = alarm;
    newAlarm[`${day}`] = newAlarm[`${day}`].filter((k, ind) => {
      return `${ind}` === index ? 0 : 1;
    });
    setAlarm(newAlarm);
  }

  return (
    <div className="App" id="App">
      <h1 id="clock">{time}</h1>
      <form id="form">
        <input
          id="hrs"
          min="0"
          max="12"
          type="number"
          placeholder="hours"
          required
        />
        <input
          id="mins"
          min="0"
          max="59"
          type="number"
          placeholder="minutes"
          required
        />
        <select id="day" required>
          <option value="">Choose day</option>
          <option value={1}>Monday</option>
          <option value={2}>Tuesday</option>
          <option value={3}>Wednesday</option>
          <option value={4}>Thursday</option>
          <option value={5}>Friday</option>
          <option value={6}>Saturday</option>
          <option value={7}>Sunday</option>
          <option value={8}>Everyday</option>
        </select>
        <button onSubmit={addAlarm} type="submit">
          Submit
        </button>
      </form>
      <div id="alarmWindow">
        <h1>Yendira vengayam</h1>
        <button
          onClick={() => {
            handleClose(audio);
          }}
        >
          X
        </button>
      </div>
      <Send alarm={alarm} handleDelete={handleDelete} />
    </div>
  );
}
