import { useD3 } from './hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function MultiBarChart({ data }) {
  // sort data

  const ref = useD3(
    (svg) => {
        const height = 300;
        const width = 500;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const subgroups = ['Bellings','ReadyToWear']
        var groups = d3.map(d => d.State)
    },[data.length]);

  return (
    <svg
      ref={ref}
      style={{
        height: 300,
        width: 500,
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default MultiBarChart;