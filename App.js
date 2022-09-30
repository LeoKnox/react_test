import "./styles.css";
import { useState, ReactDOM } from "react";

export default function App() {
  let someData = [];
  const [x, setX] = useState([]);
  const [data, setData] = useState([]);

  const newComp = (
      <p>return</p>
  )

  function submitForm() {
    someData.append(data);
    let y=[...x, data];
    setX(y);
    console.log("!!!"+x);
  }

  const changeData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {x.map((mydata, index) => (
        <>
          <p>{mydata}</p>
        </>
      ))}
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeData} value={data} />
        <input type="submit" value="submit" />
      </form>
      {newComp}
    </div>
  );
}
