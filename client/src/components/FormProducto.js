import React from "react";
import FormInput from "./FormInput";


const FormProducto = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
    }

    return (
       <div>
           <h1> Ingresar Producto</h1>
            <form onSubmit={handleSubmit}>
                <FormInput name="producto" placeholder="Nombre Producto"/>
                <button>Submit</button>
            </form>
       </div> 
        
    )
}

export default FormProducto