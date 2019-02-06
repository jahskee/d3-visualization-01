
/*
d3.csv('./data.csv').then( function(dataset) {
    generateData(dataset.columns);
})
*/
/*
/*d3.json('data.json').then(function(data){
    generateData(data);
}) 
*/
var data = [];
for (var i=0; i < 20; i++) {
    // Math.round
    // var num = Math.floor(Math.random() * 50)
    var num =  Math.floor(d3.randomUniform(1, 50)());
    data.push(num)
}

generateData(data);

function generateData(dataset) {
    const chart_width = 800;
    const chart_height = 400;
    const bar_padding = 5;

    var svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);


    svg.selectAll('rect')
        .data( data)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            return i * (chart_width / data.length); // 0 - -, 1 - 30, 2 - 60;
        })
        .attr('y', d => chart_height - d * 5)
        .attr('width', chart_width / data.length - bar_padding)
        .attr('height', d => d * 5)
        .attr('fill', '#7ED26D');

    // Create Labels
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text( d => d)
        .attr('x', function(d, i) {
            // compute the center of the rectangle
            return i * ( chart_width / data.length ) +
                       ( chart_width / data.length - bar_padding ) / 2
        })
        .attr('y', d => chart_height - d * 5 + 15)
        .attr('font-size', 14)
        .attr('fill', '#fff')
        .attr('text-anchor', 'middle')
}


