var data = [
    [ 400, 200 ],
    [ 210, 410 ],
    [ 722, 300 ],
    [ 70, 160 ],
    [250, 50 ],
    [ 110, 280 ],
    [ 699, 225 ],
    [ 90, 220 ]
];

var chart_width = 800;
var chart_height = 400;

// Create SVG Element

var svg = d3.select('#chart')
.append('svg')
.attr('width', chart_width)
.attr('height', chart_height);

svg.selectAll('circle') // this will put data in the waiting room
.data(data)
.enter()
.append('circle')
.attr('cx', d => d[0] )
.attr('cy', d => d[1] )
.attr('r', d => d[1] / 10)
.attr('fill', '#D1AB0E');

// Create labels
svg.selectAll('text')
.data( data )
.enter()
.append('text')
.text(d => d.join(','))
.attr('x', d => d[0])
.attr('y', d => d[1])
.attr('text-anchor', 'middle')