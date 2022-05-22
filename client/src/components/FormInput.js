import React from 'react'
import './Styles/formInputStyle.css'


const FormInput = (props) => {
     return (
         <div className="formInput">
            <input name={props.name} 
             class='dataInput' placeholder={props.placeholder}/>
         </div>
     )
}

export default FormInput