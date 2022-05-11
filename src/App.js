import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"mensaje de ok"}/>
    </div>

  );
}

export default App;