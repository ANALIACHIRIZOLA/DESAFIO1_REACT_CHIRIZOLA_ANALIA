import {products} from "../data/productos";
export default function ItemDetailContainer ({products}) {
    const task = new Promise((resolve,reject) => {
      setTimeout(() => {
      resolve(products);
      }, 2000)
   
    })
    task.then( result =>{
      console.log(result)
    })
        
    return (
      <div className="Detail">
        {products.map((product) => {
          return (
            <div key={product.id}>
            <p>{products.desc}</p>
            </div>
          )
          })}

        </div>
    )
}
