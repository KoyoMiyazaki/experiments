
const chartData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120,
                   135, 150, 165, 180, 200, 220, 240, 270, 300, 330, 370, 410];

const height = 400;
const width = 720;

const barWidth = 40;
const barOffset = 20;

const xScale = d3.scaleLinear()
       .domain([0, chartData.length])
       .rangeBands([0, width]);

const yScale = d3.scaleLinear()
       .domain([0, d3.max(chartData)])
       .range(0, height);



const svg = d3.select('#bar-chart').append('svg')
              .attr('width', width)
              .attr('height', height)
              .style('background', '#dff0d8');

svg.selectAll('rect').data(chartData).enter().append('rect')
   .attr('width', barWidth)
   .attr('height', d => d)
   .attr('x', (d, i) => i * (barWidth + barOffset))
   .attr('y', d => height - d)
   .style('fill','#3c763d')
   .style('stroke', '#d6e9c6')
   .style('stroke-width', '5px');