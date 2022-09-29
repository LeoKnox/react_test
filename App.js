import "./styles.css";
import { useState, ReactDOM } from "react";

export default function App() {
  let someData = [];
  const [x, setX] = useState([]);
  const [data, setData] = useState([]);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = (<p>trust</p>);

  function submitForm() {
    someData.append(data);
    setX(...x, data);
    root.render(element);
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
