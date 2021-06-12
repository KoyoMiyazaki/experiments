// const dataset = [
//        [0, 12],
//        [1, 31],
//        [3, 22],
//        [4, 17],
//        [5, 25],
//        [6, 18],
//        [7, 29],
//        [8, 14],
//        [9, 9],
// ];
const getRandomInt = max => Math.floor(Math.random() * max);

const dataset = [];
for(let i = 0; i < 100; i++) {
    dataset.push([i, getRandomInt(10000)]);
}

const margin = { top: 50, right: 50, bottom: 50, left: 50 };

// マージンを除いた描画幅を設定
const width = 900 - margin.left - margin.right;
const height = 560 - margin.top - margin.bottom;

// グラフの全体設定
const chart = d3.select("body")
       .select("div")
       .append("svg")
       .attr("width", width + margin.left + margin.right) // SVG領域は、余白を含む幅
       .attr("height", height + margin.top + margin.bottom) // SVG領域は、余白を含む高さ
       .append("g") // 余白を適用するためのグループを作成（適用された属性は子要素に継承される）
       .attr("transform", "translate(" + (margin.left) + "," + margin.top + ")");

// ② X軸の設定
// X軸のデータ範囲などバンドスケールを作成
const x = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d[0])])
       .range([0, width]); // 描画幅

// X軸を追加
var xAxis = d3.axisBottom(x);
chart.append("g")
     .attr("class", "x axis")
     .attr("transform", "translate(0," + height + ")") // 左上が(0,0)。 X軸をグラフの下部に表示するには、描画領域の高さ分下げる
     .call(xAxis); // scaleBandを設定

// ③ Y軸の設定
// Y軸のデータ範囲などリニアスケールを作成
var y = d3.scaleLinear()
       .domain([0, d3.max(dataset, (d) => d[1])]) // 0 〜 300
       .range([height, 0]); // 最大、最小

// Y軸を追加
var yAxis = d3.axisLeft(y);
chart.append("g")
     .attr("class", "y axis")
     .call(yAxis); // scaleLinearを設定

let barwidth = x(dataset[1][0]) - x(dataset[0][0]);
// ④ 各データを描画
chart.selectAll(".bar")
       .data(dataset) // 描画データ
       .enter().append("rect")
       .attr("class", "bar")
       .attr("x", (d) => x(d[0]))
       .attr("y", (d) => y(d[1]))
       .attr("height", (d) => height - y(d[1]))
       .attr("width", barwidth);

// ----------------------------------------------------------------------------------------
// const w = 500;
// const h = 500;
// const padding = 60;

// const xScale = d3.scaleLinear()
//        .domain([0, d3.max(dataset, (d) => d[0])])
//        .range([padding, w - padding]);

// const yScale = d3.scaleLinear()
//        .domain([0, d3.max(dataset, (d) => d[1])])
//        .range([h - padding, padding]);
//        // .range([padding, h - padding]);

// const svg = d3.select("body")
//     .select("div")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h);

// svg.selectAll("rect")
// .data(dataset)
// .enter()
// .append("rect")
// .attr("x", (d, i) => xScale(d[0]))
// .attr("y", (d, i) => yScale(d[1]))
// .attr("width", 15)
// .attr("height", (d, i) => h - yScale(d[1]));

// // console.log(yScale(padding - h));


// const xAxis = d3.axisBottom(xScale);
// const yAxis = d3.axisLeft(yScale);

// svg.append("g")
// .attr("transform", "translate(0," + (h - padding) + ")")
// .call(xAxis);

// // Add your code below this line
// svg.append("g")
// .attr("transform", `translate(${padding}, 0)`)
// .call(yAxis);
