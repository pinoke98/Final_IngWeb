// import { useD3 } from './hooks/useD3';
// import React from 'react';
// import * as d3 from 'd3';

// function PieChart({ data }) {
//     const ref = useD3(
//     (svg) => {
//         const height = 300;
//         const width = 500;
//         const margin = { top: 20, right: 30, bottom: 30, left: 40 };
//         var innerRadius = 0;
//         var outerRadius = 100;
        
//         const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
//         const format = d3.format(".2f");

//         svg.append('g')
//             .attr('transform', `translate(${width / 2}, ${height / 2})`)
//             .attr('class','arc')
        
//         const arcGenerator = d3
//             .arc()
//             .innerRadius(innerRadius)
//             .outerRadius(outerRadius);

//         const pieGenerator = d3
//             .pie()
//             .value((d) => d.Sales)
//             .sort(null)
        
//         const arc = svg
//             .selectAll("g.arc")
//             .data(data)
        
//         const path = arc
//             .append('path')
//             .merge(arc.select('path.arc'))
        
//         path
//             .attr('class','arc')
//             .attr('d', arcGenerator)
//             .style('fill', (d, i) => colorScale(i))
//             .style('stroke', '#ffffff')
//             .style('stroke-width', 1);
        
//         const text = path
//             .append('text')
//             .merge(arc.select('text'))
        
//         text
//             .attr("text-anchor", "middle")
//             .attr("alignment-baseline", "middle")
//             .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
//             .style("fill", "white")
//             .style("font-size", 5)
//             .text(d => format(d.Chain));
//         },
//         [data.length]
//     );

//     return (
//     <svg
//         ref={ref}
//         style={{
//         height: 300,
//         width: 500,
//         marginRight: "0px",
//         marginLeft: "0px",
//         }}s
//     >
//     </svg>
//     );
//     }

// export default PieChart;