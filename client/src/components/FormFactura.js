import React from "react";
import FormInput from "./FormInput";


const FormFactura = () => {
   
  

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formatedData = Object.fromEntries(data.entries()) 
        console.log(formatedData)
    }
    
    

    return(
        <div>
    
            <h1>Ingresar Factura</h1>
            <form onSubmit={handleSubmit}>
                <FormInput type="date" name="fecha" placeholder="Fecha"/>
                <FormInput name="=numLocal" placeholder="NumLocal"/>
                <FormInput name="version"placeholder="Version" />
                <FormInput name="producto" placeholder="Producto a comprar"/>
                <FormInput type="number" name="cantidad" placeholder="Cantidad"/>
                <FormInput type="number" name="precio "placeholder="Precio"/>
                <button className="botonSubmit">Submit</button>
            </form>
        </div>
        
    ) 
}

export default FormFactura