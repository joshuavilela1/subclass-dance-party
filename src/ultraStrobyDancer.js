var makeUltraStrobyDancer = function (top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
};

makeUltraStrobyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeUltraStrobyDancer.prototype.constructor = makeUltraStrobyDancer;

makeUltraStrobyDancer.prototype.step = function () {

  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};