import React, {useState} from "react";
import FormInput from "./FormInput";
import axios from 'axios'


function  FormFactura ()  {
   

    const [result, setResult] = useState("")
    
    const a = 'holas'

    const handleSubmit = (e) => {
        e.preventDefault()

        

        const data = new FormData(e.target)
        const formatedData = Object.fromEntries(data.entries())
        
        if(formatedData.date == '' || formatedData.categoria == '') {
            console.log('Algun campo esta vacio, porfavor llenarlo', result)
            setResult('Algun campo esta vacio, porfavor llenarlo')
        }else{
            console.log({data: formatedData.date, chain :formatedData.chain})
            axios.post('http://localhost:5000/insert_date',{
                Date: formatedData.date
            }).then(function (response) {
                console.log("Respuesta Date",response);
            })
            .catch(function (error) {
                console.log("Error Date", error);
            });
            axios.post('http://localhost:5000/insert_sale',{
                Date: formatedData.date,
                Chain: formatedData.chain,
                Category: formatedData.categoria,
                TotalUnits: formatedData.totalunits,
                SalePrice: formatedData.saleprice,
                CostPrice: formatedData.costprice
            }).then(function (response) {
                console.log("Respuesta Factura: ",response);
                setResult('Factura Ingresada')
            })
            .catch(function (error) {
                console.log("Error Factura", error);
            });
        }      
    }   
    return(
        <div>
            <h1>Ingresar Factura</h1>
            <form onSubmit={handleSubmit}>
                <FormInput type="date" name="date" placeholder="Fecha"/>
                <FormInput name="chain" placeholder="Chain"/>
                <FormInput name="categoria" placeholder="Categoria: Home, Accessories, Shoes, Kids"/>
                <FormInput type="number" name="totalunits" placeholder="Total Units"/>
                <FormInput type="number" name="saleprice"placeholder="Sale Price"/>
                <FormInput type="number" name="costprice" placeholder="Cost Price"/>
                <button className="botonSubmit">Submit</button>
            </form>
            <p >{result}</p>
        </div>
        
    ) 
}

export default FormFactura