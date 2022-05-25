import React from 'react';
import BarChart from '../D3/BarChart';
// import PieChart from '../D3/PieChart';
import MultiBarChart from '../D3/MultiBarChart';
import axios from 'axios'

export default class D3 extends React.Component {
  state = {
    dataBarras : [],
    dataMultiPastel: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Barras')
      .then(res => {
        const dataBarras = res.data;
        this.setState({dataBarras})
      })
    axios.get('http://localhost:5000/BarrasDobles')
      .then(res => {
        const dataMultiPastel = res.data;
        this.setState({dataMultiPastel})
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <PieChart data={this.state.dataPastel} /> */}
          <BarChart data={this.state.dataBarras} />
          {/* <MultiBarChart data={this.state.dataMultiPastel} /> */}
        </header>
      </div>
    )
  }
}
