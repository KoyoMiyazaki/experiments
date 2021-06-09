const getRandomInt = max => Math.floor(Math.random() * max);

const dataset = [];

for(let i = 0; i < 100; i++) {
    dataset.push([getRandomInt(1000), getRandomInt(1000)]);
}

const w = 1200;
const h = 1000;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("cx", (d, i) => d[0])
   .attr("cy", (d, i) => h - d[1])
   .attr("r", 5);

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => `${d[0]}, ${d[1]}`)
   .attr("x", (d, i) => d[0])
   .attr("y", (d, i) => h - d[1] - 5);