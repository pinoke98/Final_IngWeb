import React, {Component} from 'react';
import FormFactura from '../components/FormFactura';
import FormProducto from '../components/FormProducto';


const Data = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <FormProducto/>
      <FormFactura/>

    </div>
  );
};

export default Data;
