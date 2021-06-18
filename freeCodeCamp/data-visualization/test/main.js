const width = 400;
const height = 300;

const svg = d3.select("body")
    .select("svg")
    .attr("width", width)
    .attr("height", height);

const path = d3.geoPath();
const projection = d3.geoMercator()
    .scale(70)
    .center([0, 20])
    .translate([width / 2, height / 2]);

let data = new Map()
const colorScale = d3.scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

Promise.all([
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) {
            data.set(d.code, +d.pop)
        })
    ]).then(function(loadData){
        let topo = loadData[0]
    
        // Draw the map
        svg.append("g")
        .selectAll("path")
        .data(topo.features)
        .join("path")
            // draw each country
            .attr("d", d3.geoPath()
            .projection(projection)
            )
            // set the color of each country
            .attr("fill", function (d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
            })
    })