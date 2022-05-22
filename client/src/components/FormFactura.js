import React from "react";
import FormInput from "./FormInput";


const FormFactura = () => {
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
    }

    return(
        <div>
            <h1>Ingresar Factura</h1>
            <form onSubmit={handleSubmit}>
                <FormInput name="fehca" placeholder="Fecha"/>
                <FormInput name="=numLocal" placeholder="NumLocal"/>
                <FormInput name="version"placeholder="Version" />
                <FormInput name="prducto" placeholder="Producto a comprar"/>
                <FormInput name="cantidad" placeholder="Cantidad"/>
                <FormInput name="precio "placeholder="Precio"/>
                <button>Submit</button>
            </form>
        </div>
        
    ) 
}

export default FormFactura