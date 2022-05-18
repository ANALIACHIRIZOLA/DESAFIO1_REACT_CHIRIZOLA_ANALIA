import React from "react"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {products} from "./data/productos"



function App() {

  const task = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(products);
    }, 2000)
 
  })
  task.then( result =>{
    console.log(result)
  })
      
  return (
    <div className="App">
      <Navbar/>
      {products.map((product) => {
        return (
          <div key={product.id}>
          <p>{product.nombre}</p>
          </div>
        )
        })}
      <ItemListContainer greeting={"mensaje de ok"}/>
  
      </div>
  );
}

export default App;