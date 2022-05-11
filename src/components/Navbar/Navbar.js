import React from "react"
export default function Navbar () {
    const [count, setCount] = React.useState (0)
    const handleRest = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

const headerStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none"
}

return (
    <header className="header">
        <div className="logo">Cianita Tienda Holistica</div>
            <ul className="Links" style={headerStyles}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
    {<div>Comprar sahumerios Palo Santo</div>}
    <input type="button" value="+" onClick={() => setCount(count + 1)}/>
    {count}
    <input type="button" value="-" onClick={handleRest}/>
     </header>

    );
}