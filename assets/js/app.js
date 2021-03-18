var width = parseFloat(d3.select('#scatter').style('width'));
var height = .66*width;

var svg = d3
    .select('#scatter')
    .append('svg')
    .style('width',width)
    .style('height',height)

var xText = svg
    .append('g')
    .attr('transform',`translate(${width/2},${.98*height})`);

var yText = svg
    .append('g')
    .attr('transform',`translate(${.02*width},${height/2})rotate(-90)`);

xText
    .append('text')
    .text('Household Income (Median)')
    .attr('class','inactive x aText')
    .attr('data-id','income')
    
    xText
    .append('text')
    .attr('y',-20)
    .text('Age (Median)')
    .attr('class','inactive x aText')
    .attr('data-id','age')
    
    xText
    .append('text')
    .attr('y',-40)
    .text('In Poverty (%)')
    .attr('class','active x aText')
    .attr('data-id','poverty')

yText
    .append('text')
    .attr('y',5)
    .text('Obese (%)')
    .attr('class','active y aText')
    .attr('data-id','obesity')
    
    yText
    .append('text')
    .attr('y',25)
    .text('Smokes (%)')
    .attr('class','inactive y aText')
    .attr('data-id','smokes')
    
    yText
    .append('text')
    .attr('y',45)
    .text('Lacks Healthcare (%)')
    .attr('class','inactive y aText')
    .attr('data-id','healthcare');

d3.selectAll('.aText').on('click',handleClick);

function handleClick() {
    var self = d3.select(this).classed('y');

    if (self) {
        
    }
    console.log(self);
}