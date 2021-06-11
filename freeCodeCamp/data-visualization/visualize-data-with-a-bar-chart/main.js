const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d[0])])
       .range([padding, w - padding]);

const yScale = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d[1])])
       .range([h - padding, padding]);

const svg = d3.select("body")
    .select("div")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", (d, i) => i * 15)
.attr("y", 0)
.attr("width", 15)
.attr("height", (d, i) => h - d);
// .attr("cy",(d) => yScale(d[1]))
// .attr("r", (d) => 5);

// svg.selectAll("text")
// .data(dataset)
// .enter()
// .append("text")
// .text((d) =>  (d[0] + "," + d[1]))
// .attr("x", (d) => xScale(d[0] + 10))
// .attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

// Add your code below this line
svg.append("g")
.attr("transform", `translate(${padding}, 0)`)
.call(yAxis);
