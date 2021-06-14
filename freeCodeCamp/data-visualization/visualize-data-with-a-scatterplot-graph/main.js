let dataset = [];

const URL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(jsonData => {
        dataset = jsonData.slice();
        drawScatterplot();
    })
    

const drawScatterplot = () => {
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
    let xMin = d3.min(dataset, d => d["Year"]) - 1;
    let xMax = d3.max(dataset, d => d["Year"]) + 1;
    const x = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([0, width])
    
    // X軸を追加
    const xAxis = d3.axisBottom(x);
    svg.append("g")
        .attr("id", "x-axis")
        .attr("class", "x axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis.tickFormat(d => d));
    
    // Y軸の設定
    const strMinToSeconds = (strMin) => {
        return parseInt(strMin.split(":")[0]) * 60 +
            parseInt(strMin.split(":")[1]);
    }

    const secondsToStrMin = (seconds) => {
        let strMin = seconds / 60 < 10 ? `0${seconds / 60}` : seconds / 60;
        let strSec = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
        return `${Math.floor(strMin)}:${strSec}`;
    }

    let yMin = d3.min(dataset, d => strMinToSeconds(d["Time"]));
    let yMax = d3.max(dataset, d => strMinToSeconds(d["Time"]));
    
    const y = d3.scaleLinear()
       .domain([yMax, yMin])
       .range([height, 0]);
    
    // Y軸を追加
    const yAxis = d3.axisLeft(y);
    svg.append("g")
        .attr("id", "y-axis")
        .attr("class", "y axis")
        .call(yAxis.tickFormat(d => {
            return secondsToStrMin(d);
        }));
    
　　// ツールチップの設定
　　const tooltip = d3.select("body")
　　　　.append("div")
　　　　.attr("id", "tooltip");

    const legend = d3.select("body")
        .append("div")
        .attr("id", "legend")
        .append("svg");

    // データを描画
    svg.selectAll("scatterplot")
        .data(dataset)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", d => x(d["Year"]))
        .attr("cy", d => y(strMinToSeconds(d["Time"])))
        .attr("r", 7)
        .attr("data-xvalue", d => d["Year"])
        .attr("data-yvalue", d => {
            let parsedTime = d.Time.split(':');
            let dt = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
            return dt.toISOString();
        })
        .attr("fill", d => d["Doping"] === "" ? "orange" : "dodgerblue")
        .attr("stroke", "black")
        .on("mouseover", function(event, data) {
            tooltip
                .style("visibility", "visible")
                .html(() => {
                    const commonHtml = 
                        `${data["Name"]}: ${data["Nationality"]}` +
                        "<br>" +
                        `Year: ${data["Year"]}, Time: ${data["Time"]}`;
                    return data["Doping"] === "" ? commonHtml
                        : commonHtml + `<br><br>${data["Doping"]}`;
                })
                .attr("data-year", data["Year"])
                .style("top", `${event.clientY}px`)
                .style("left", `${event.clientX + 20}px`);
        })
        .on("mouseout", function(d, i) {
            tooltip.style("visibility", "hidden");
        });
    
    const colors = ["red", "blue"];
    legend.append('rect') // 凡例の色付け四角
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "orange");
    
    legend.append("text")
        .attr("x", 20)
        .attr("y", 12)
        .text("No doping allegations")
        .style("text-anchor", "start")
        .style("font-size", "12px");
    
    legend.append('rect') // 凡例の色付け四角
        .attr("x", 0)
        .attr("y", 20)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", "dodgerblue");
    
    legend.append("text")
        .attr("x", 20)
        .attr("y", 32)
        .text("Riders with doping allegations")
        .style("text-anchor", "start")
        .style("font-size", "12px");
};
