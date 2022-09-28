import "./styles.css";

export default function App() {
  const [someData, setSomeDate] = ([]);
  
  function submitForm() {
    console.log("red");
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
