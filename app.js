
d3.csv('data.csv').then( function(data) {
    generate(data);
    console.log(data)
   
})

function generate(data) {
    var el = d3.select( 'body' )
    .data(data)
    .enter()
    .append('p')
    .text(d => `hello world ${d}`)
    .style('color', d => 'red');
}

