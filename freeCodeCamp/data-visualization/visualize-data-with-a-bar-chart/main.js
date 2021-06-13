let dataset = [];

const URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        dataset = jsonData.data.slice();
        drawChart();
    })
    

const drawChart = () => {
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    // マージンを除いた描画幅を設定
    const width = 900 - margin.left - margin.right;
    const height = 560 - margin.top - margin.bottom;

    // グラフの全体設定
    const svg = d3.select("body")
        .select("div")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    // X軸の設定
    let xMax = d3.max(dataset, (d) => new Date(d[0]));
    xMax.setMonth(xMax.getMonth() + 3);
    const x = d3.scaleUtc()
        .domain([d3.min(dataset, (d) => new Date(d[0])), xMax])
        .range([0, width])
    
    // X軸を追加
    const xAxis = d3.axisBottom(x);
    svg.append("g")
        .attr("id", "x-axis")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
    
    // Y軸の設定
    const y = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d[1])])
       .range([height, 0]);
    
    // Y軸を追加
    const yAxis = d3.axisLeft(y);
    svg.append("g")
        .attr("id", "y-axis")
        .attr("class", "y axis")
        .call(yAxis);
    
　　// ツールチップの設定
　　const tooltip = d3.select("body")
　　　　.append("div")
　　　　.attr("id", "tooltip");

    let barwidth = x(new Date(dataset[1][0])) - x(new Date(dataset[0][0]));

    const getQuarter = (month) => {
        switch(month) {
            case 1: return "1Q";
            case 4: return "2Q";
            case 7: return "3Q";
            case 10: return "4Q";
        }
    };

    // データを描画
    svg.selectAll(".bar")
        .data(dataset)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("data-date", (d) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("x", (d, i) => x(new Date(d[0])))
        .attr("y", (d) => y(d[1]))
        .attr("height", (d) => height - y(d[1]))
        .attr("width", barwidth)
        .attr("fill", "navy")
        .on("mouseover", function(event, date) {
            let data = event.target.dataset;
            tooltip
                .style("visibility", "visible")
                .html(
                    data["date"].split("-")[0] + " " +
                    getQuarter(parseInt(data["date"].split("-")[1])) +
                    "<br>" +
                    "$" +
                    data["gdp"] +
                    " Billion"
                )
                .attr("data-date", data["date"])
                .style("top", `${height}px`)
                .style("left", `${event.clientX + 20}px`);
        })
        .on("mouseout", function(d, i) {
            tooltip.style("visibility", "hidden");
        });
};
