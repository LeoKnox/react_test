import "./styles.css";
import { useState } from "react";

export default function App() {
  let someData = [];
  const [x, setX] = useState([]);
  const [data, setData] = useState([]);

  function submitForm() {
    console.log("***"+data);
    someData.append(data);
    setX(...x, data);
    console.log(someData);
  }

  const changeData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {someData.map((mydata, index) => (
        <>
          <p>:{mydata}</p>
        </>
      ))}
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeData} value={data} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
