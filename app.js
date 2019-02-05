var dataset = [10, 20, 30, 40, 50];

var el = d3.select( 'body' )
.selectAll('p')
.data(dataset)
.enter()
.append('p')
.text(d => `hello world ${d}`)
.style('color', d => 'red')

console.log(el);