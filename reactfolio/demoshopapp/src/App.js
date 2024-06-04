import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="Aug" year="1998"></ItemDate>
      <Item name="SurfExcel"></Item>
      <ItemDate day="2" month="Nov" year="1999"></ItemDate>
      <Item name="Wheel"></Item>
      <ItemDate day="8" month="Jan" year="2003"></ItemDate>
      <div className="App">
        <h1>Hello GleanCoder</h1>
      </div>
    </div>
  );
}

export default App;
