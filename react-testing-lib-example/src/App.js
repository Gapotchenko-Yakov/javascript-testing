import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setTimeout(() => setData({}), 100);
  }, []);

  const onClick = (e) => setToggle((prev) => !prev);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle == true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testid="toggle-btn" onClick={onClick}>
        Click me
      </button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;
