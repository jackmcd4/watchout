// start slingin' some d3 here.
var dataArray = [5, 6, 7, 8, 1234, 124, 34, 234, 1, 2, 12];
var userArr = [1];
var height = window.height;
var width = window.width;
var xvar = function(){
  return Math.random()*700;
};
var yvar = function(){
  return Math.random()*500;
};
var gameOptions = {
  height:500,
  width:700,
  enemies:50,
  padding:50
};


var gameBoard = d3.select('.gameboard')
                  // .append('svg')
                  .attr("width", gameOptions.width)
                  .attr("height", gameOptions.height)


var svg = d3.select('.gameboard').append('svg')
var position = svg.attr("height", gameOptions.height)
                  .attr("width", gameOptions.width);
var circles = position.selectAll('circle')
                    .data(dataArray)
                    .enter()
                    .append('circle')

// debugger;
var circleStyle = circles
                     // .attr("r", 12)
                     .attr("cx", xvar)
                     .attr("cy", yvar)
                     .attr("r", 12)
                     .style("fill", "blue");

var userSvg = d3.select('svg').append('svg');
var startPos = userSvg.attr("height", gameOptions.height)
               .attr("width", gameOptions.width)

var userCircle = startPos.selectAll('circle')
                   .data(userArr)
                   .enter()
                   .append('circle')

var userStyle =   userCircle.attr("cx", 350)
                  .attr("cy", 250)
                  .attr("r", 10)
                  .style("fill", "red");



//$('start').on("click", function(){
var interval = 2000;
var makeCallback = function(){
  return function(){
    circles.transition()
    .attr("cx", xvar)
    .attr("cy", yvar)
    .duration(2000)
    // .delay();
    d3.select('.current').append('span').html(d3.time.seconds*10);
    d3.timer(makeCallback(),interval);

    return true;
  }
};
d3.timer(makeCallback(),interval);


    // $('end').on("click", function(){
    //   return true;
    // };

//});


