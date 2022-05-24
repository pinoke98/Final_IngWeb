import React from "react";
import FormInput from "./FormInput";
import axios from 'axios'


const FormFactura = () => {
   
  

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const formatedData = Object.fromEntries(data.entries()) 
        console.log(formatedData)
        axios.post('http://localhost:5000/insert_sale',{
            formatedData
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    

    return(
        <div>
    
            <h1>Ingresar Factura</h1>
            <form onSubmit={handleSubmit}>
                <FormInput type="date" name="fecha" placeholder="Fecha"/>
                <FormInput name="chain" placeholder="Chain"/>
                <FormInput name="postcode" type="number" placeholder="Postcode" />
                <FormInput name="categoria" placeholder="Categoria: Home, Accessories, Shoes, Kids"/>
                <FormInput type="number" name="totalunits" placeholder="Total Units"/>
                <FormInput type="number" name="saleprice"placeholder="Sale Price"/>
                <FormInput type="number" name="costprice" placeholder="Cost Price"/>
                <button className="botonSubmit">Submit</button>
            </form>
        </div>
        
    ) 
}

export default FormFactura