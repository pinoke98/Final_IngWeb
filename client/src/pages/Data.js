import React, {Component} from 'react';
import FormFactura from '../components/FormFactura';
import FormProducto from '../components/FormProducto';


const Data = () => {
  const [facturaVisible, setFacturaVisible] = React.useState(true);
  const [productoVisible, setProductoVisible] = React.useState(false);
  


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div>
        <button className="botonSwitch" onClick={() => {
          setFacturaVisible(!facturaVisible)
          setProductoVisible(!productoVisible)
          }}>{facturaVisible ? 'MostrarFormProducto': 'MostrarFormFactura'}
        </button>
      </div>
      <div>
        {facturaVisible ? <FormFactura/> : <FormProducto/>}
      </div>
     
    
    
    </div>
  );
};

export default Data;
