
/*
d3.csv('./data.csv').then( function(dataset) {
    generateData(dataset.columns);
})
*/

d3.json('data.json').then(function(data){
    generateData(data);
})
function generateData(dataset) {
   
   d3.select( 'body' ).selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(d => `hello world ${d}`)
    .style('color', d => 'red');
}


