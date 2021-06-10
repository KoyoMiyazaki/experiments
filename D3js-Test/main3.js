const getRandomInt = max => Math.floor(Math.random() * max);

const dataset = [];

for(let i = 0; i < 10; i++) {
    dataset.push([getRandomInt(1000), getRandomInt(1000)]);
}

const w = 1000;
const h = 1000;
const padding = 60;

const xScale = d3.scaleLinear()
                 .domain([0, d3.max(dataset, (d) => d[0])])
                 .range([padding, w - padding]);

const yScale = d3.scaleLinear()
                 .domain([0, d3.max(dataset, (d) => d[1])])
                 .range([h - padding, padding]);

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", (d, i) => xScale(d[0]))
   .attr("cy", (d, i) => yScale(d[1]))
   .attr("r", (d) => 5);

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => `${d[0]}, ${d[1]}`)
   .attr("x", (d, i) => xScale(d[0] + 10))
   .attr("y", (d, i) => yScale(d[1]));

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
   .attr("transform", `translate(0, ${h - padding})`)
   .call(xAxis);

svg.append("g")
   .attr("transform", `translate(${w - padding}, 0)`)
   .call(yAxis);