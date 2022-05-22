import React from "react";
import FormInput from "./FormInput";


const FormProducto = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formatedData = Object.fromEntries(data.entries())
        console.log(formatedData)
    }

    return (
       <div>
           <h1> Ingresar Producto</h1>
            <form onSubmit={handleSubmit}>
                <FormInput name="producto" placeholder="Nombre Producto"/>
                <button className="botonSubmit">Submit</button>
            </form>
       </div> 
        
    )
}

export default FormProducto