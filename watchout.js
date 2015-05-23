// start slingin' some d3 here.
var dataArray = [5, 6, 7, 8, 1234, 124, 34, 234, 1, 2, 12];
var userArr = [1];
// var height = window.height;
// var width = window.width;
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
            .style('border', '10px solid black')
var position = svg.attr("height", gameOptions.height)
                  .attr("width", gameOptions.width);
var circles = position.selectAll('image')
                    .data(dataArray)
                    .enter()
                    .append('svg:image')

// debugger;
var circleStyle = circles
                     // .attr("r", 12)
                     .attr("x", xvar)
                     .attr("y", yvar)
                     // .attr("r", 12)
                     .attr("xlink:href", "gorilla.png" )
                     .attr({"width": '15%', "height": '15%'})
                     .attr("class",'gorillaz')
                     // .style("fill", "blue")
var userSvg = d3.select('svg').append('svg');
var startPos = userSvg.attr("height", gameOptions.height)
               .attr("width", gameOptions.width)

//give this guy class, and use userClass on mouseover later
var userCircle = startPos.selectAll('image')
                   .data(userArr)
                   .enter()
                   .append('svg:image')


var userStyle =   userCircle.attr("x", 350)
                  .attr("y", 250)
                  .attr("r", 10)
                  .attr("xlink:href", "banana.png")
                  .attr({"width":"10%", "height":"10%"})
                  // .style("fill", "red")
                  .attr("class",'mouse')

gameBoard.on('mousemove', function(){
  var loc = d3.mouse(this);
  mouse =  {x:loc[0], y:loc[1]};
  var x = mouse.x -45;
  var y = mouse.y -30;
  if(x > 650){
    x = 650;
  }
  if(x < -15){
    x = -15;
  }
  if(y > 450){
    y = 450;
  }
  if(y < 0){
    y = 0;
  }
  d3.select('.mouse').attr({y:y, x:x});
})


//$('start').on("click", function(){
var interval = 2000;
var makeCallback = function(){
  return function(){
    circles.transition()
    .attr("x", xvar)
    .attr("y", yvar)
    .duration(2000)
    // .delay();
    d3.timer(makeCallback(),interval);

    return true;
  }
};
var timeCounter = 0;
var stopWatch = function(){
  var time = new Date().getMilliseconds();
  timeCounter+=(Math.floor(time/50));
  d3.select('.current').html("Current Score: " + timeCounter);

};

setInterval(stopWatch, 100);

// setInterval for collision detection (check every millisecond)
  //d3.selectAll gorillas...
    //constantly find x, y coordinates and check for collision
      //with da bannananananana
var hits = 0;
// var collisions = function(){
//   // if(d3.touches(d3.selectAll('.gorillaz').node(), d3.selectAll('.mouse').node())){
//     // d3.select('.current').html("Current Score: " + 0);
//   // }
// d3.selectAll('.gorillaz')



//     hits++
//     d3.select('.collisions').html("Collisions: " + hits)
// };

// setInterval(collisions, 100);
var gor = d3.selectAll('.gorillaz');
var collisionLogic = function(){
  debugger;
  for(var i = 0; i < gor.length; i++){
  var enemyX = +(gor[i].attr("x"))
  var enemyY = +(gor[i].attr("y"))
  var userX = +(d3.selectAll('.mouse').attr("x"))
  var userY = +(d3.selectAll('.mouse').attr("y"))
    if(((userX+35>enemyX) && (userX+35<enemyX+105)) && ((userY+25>enemyY) && (userY+25<enemyY+75))){
      debugger;
    }
  }
} // bind gor into function somehow
setInterval(collisionLogic, 100);
d3.selectAll('.gorillaz');

d3.selectAll('image.gorillaz');
d3.timer(makeCallback(),interval);


    // $('end').on("click", function(){
    //   return true;
    // };

//});


