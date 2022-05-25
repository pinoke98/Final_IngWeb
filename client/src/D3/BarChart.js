import { useD3 } from './hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  console.log(data)
  // sort data
  data.sort(function(b, a) {
    return a.State > b.State; 
  });
  console.log("Estado")
  console.log(data)
  data.sort(function(b, a) {
    return a.Sales - b.Sales; 
  });
  console.log("Sales")
  console.log(data)

  const ref = useD3(
    (svg) => {
      const height = 300;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.Manager))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.Sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
          .attr("transform","translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g.append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.Manager))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.Sales))
        .attr("height", (d) => y1(0) - y1(d.Sales));
      
      svg.selectAll("rect")
        .attr("fill", d => {
          if (d.State === " WA") {
            return "red";
          } else if (d.State === " NT") {
            return "orange";
          }else if (d.State === " QLD") {
            return "purple";
          }else if (d.State === " NSW") {
            return "blue";
          }else if (d.State === " ACT") {
            return "green";
          }else if (d.State === " VIC") {
            return "yellow";
          }else if (d.State === " TAS") {
            return "orange";
          }else if (d.State === " SA") {
            return "pink";
          }
        })
    },
    [data.length]
  );

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

export default BarChart;