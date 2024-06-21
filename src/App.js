import './App.css';
import Divider from "./components/Divider";
import { Counter } from "./components/counter/Counter";

function App() {
  return (
    <div className="App">
      <Divider title={"Counter"} />
      <Counter />
      <Divider title={""} />
    </div>
  );
}

export default App;
