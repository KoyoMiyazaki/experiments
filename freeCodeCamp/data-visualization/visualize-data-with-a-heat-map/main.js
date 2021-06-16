let dataset = [];
let baseTemperature;

const URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json';

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        baseTemperature = jsonData["baseTemperature"];
        dataset = jsonData["monthlyVariance"].slice();
        drawHeatMap();
    })
    

const drawHeatMap = () => {
    const margin = { top: 50, right: 100, bottom: 50, left: 100 };

    // マージンを除いた描画幅を設定
    const width = 2400 - margin.left - margin.right;
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
    const x = d3.scaleLinear()
        .domain(d3.extent(dataset, d => d["year"]))
        .range([0, width])
    
    // X軸を追加
    const getXTicks = (start, end) => {
        let result = [];
        for(let i = Math.floor((start + 10) / 10) * 10; i <= Math.floor(end / 10) * 10; i+=10) {
            result.push(i);
        }
        result.unshift(start);
        if (result.slice(-1) !== end) {
            result.push(end);
        }
        return result;
    }
    
    const xAxis = d3.axisBottom(x);
    svg.append("g")
        .attr("id", "x-axis")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis.tickValues(getXTicks(1760, 2010)));
    
    // Y軸の設定
    const y = d3.scaleLinear()
       .domain([0.5, 12.5])
       .range([0, height]);
    
    // Y軸を追加
    const monthName = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const yAxis = d3.axisLeft(y);
    svg.append("g")
        .attr("id", "y-axis")
        .attr("class", "y axis")
        .call(yAxis.tickFormat((d, i) => monthName[i]));
    
　　// ツールチップの設定
　　const tooltip = d3.select("body")
　　　　.append("div")
　　　　.attr("id", "tooltip");

    // データの設定
    let barWidth = x(dataset[12]["year"]) - x(dataset[0]["year"]);
    let barHeight = y(dataset[1]["month"] - 0.5) - y(dataset[0]["month"] - 0.5);

    svg.selectAll(".bar")
        .data(dataset)
        .enter().append("rect")
        .attr("class", "cell")
        .attr("data-month", d => d["month"] - 1)
        .attr("data-year", d => d["year"])
        .attr("data-temp", d => d["variance"])
        .attr("x", d => x(d["year"]))
        .attr("y", d => y(d["month"] - 0.5))
        .attr("height", barHeight)
        .attr("width", barWidth)
        .attr("fill", d => {
            let temperature = Math.round((baseTemperature + d["variance"]) * 10) / 10;
            if (temperature >= 12.8) {
                return "rgb(165, 0, 38)";
            } else if (temperature >= 11.7 && temperature < 12.8) {
                return "rgb(215, 48, 39)";
            } else if (temperature >= 10.6 && temperature < 11.7) {
                return "rgb(244, 109, 67)";
            } else if (temperature >= 9.5 && temperature < 10.6) {
                return "rgb(253, 174, 97)";
            } else if (temperature >= 8.3 && temperature < 9.5) {
                return "rgb(254, 224, 144)";
            } else if (temperature >= 7.2 && temperature < 8.3) {
                return "rgb(255, 255, 191)";
            } else if (temperature >= 6.1 && temperature < 7.2) {
                return "rgb(224, 243, 248)";
            } else if (temperature >= 5.0 && temperature < 6.1) {
                return "rgb(171, 217, 233)";
            } else if (temperature >= 3.9 && temperature < 5.0) {
                return "rgb(116, 173, 209)";
            } else if (temperature >= 2.8 && temperature < 3.9) {
                return "rgb(69, 117, 180)";
            } else {
                return "rgb(49, 54, 149)";
            }
        })
        .on("mouseover", function(event, data) {
            tooltip
                .style("visibility", "visible")
                .html(
                    data["year"] + " - " +
                    monthName[data["month"] - 1] +
                    "<br>" +
                    Math.round((baseTemperature + data["variance"]) * 10) / 10 + "℃" +
                    "<br>" +
                    Math.round(data["variance"] * 10) / 10 + "℃"
                )
                .style("top", `${y(data["month"] + 0.5) + margin.top}px`)
                .style("left", `${x(data["year"]) + margin.left + 20}px`);
        })
        .on("mouseout", function(d, i) {
            tooltip.style("visibility", "hidden");
        });
    
    // 凡例の設定
    const legendWidth = 600 - margin.left - margin.right;
    const legendHeight = 100 - margin.top - margin.bottom;
    const legend = d3.select("body")
        .select("div")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", legendHeight + margin.top + margin.bottom)
        .attr("id", "legend");
    
    const legendX = d3.scaleLinear()
        .domain([0, 9])
        .range([0, legendWidth])
    
    // X軸を追加
    const legendXAxis = d3.axisBottom(legendX);
    const legendXAxisTicks = [
        "2.8", "3.9", "5.0", "6.1", "7.2",
        "8.3", "9.5", "10.6", "11.7", "12.8",
    ];
    legend.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
        .call(legendXAxis.tickFormat((d, i) => legendXAxisTicks[i]));

    const legendColors = [
        "rgb(69, 117, 180)","rgb(116, 173, 209)","rgb(171, 217, 233)",
        "rgb(224, 243, 248)","rgb(255, 255, 191)","rgb(254, 224, 144)",
        "rgb(253, 174, 97)","rgb(244, 109, 67)","rgb(215, 48, 39)"
    ];

    let rectWidth = legendX(1) - legendX(0);
    legend.selectAll(".bar")
        .data(legendColors)
        .enter()
        .append('rect') // 凡例の色付け四角
        .attr("x", (d, i) => margin.left + rectWidth * i)
        .attr("y", 0)
        .attr("width", rectWidth)
        .attr("height", margin.top)
        .attr("fill", d => d)
        .attr("stroke", "black");
};