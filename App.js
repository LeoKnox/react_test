import "./styles.css";

export default function App() {
  const [someData, setSomeData] = ([]);

  function submitForm(e) {
    setSomeData(e.target.value);
    console.log("red");
  }

  const changeData = (e) => {
    setSomeData(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form onSubmit={submitForm}>
        <input type="text" value={someData} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
