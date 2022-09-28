import "./styles.css";

export default function App() {
  const someData = [];
  const [data, setData] = ([]);

  function submitForm() {
    someData.append(setData);
  }

  const changeData = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={submitForm}>
        <input type="text" onChange={changeData} value={someData} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
