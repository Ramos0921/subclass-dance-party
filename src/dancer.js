// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  //this.setPosition(top,left);
  //this.callCount = 0;
  //this.color = 'green';
  this.top = top;
  this.left = left;

  this.step(); //idk why this is needed

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.stepCounter ++;
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top, //potentially this.top
    left: left
    //background-color: this.color
  };
  this.$node.css(styleSettings);
};
// Dancer.prototype.newStep = function(){};
//Dancer.prototype.callCount = function(){ return this.Counter;};
//dancer.setPosition(top, left);
//Dancer.setPosition(top,left);
