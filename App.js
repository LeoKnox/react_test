import "./styles.css";
import { useState } from "react";

export default function App() {
  let someData = [];
  const [data, setData] = useState([]);

  function submitForm() {
    someData.append(setData);
    console.log(data);
  }

  const changeData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeData} value={data} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
