function outerFunction() {
  var outerVariable = 1;
  function innerFunction() {
    console.log(outerVariable);
  }
  innerFunction();
}

outerFunction();

function out() {
  var out = 100;
  function inFunc() {
    console.log(out);
  }
  return inFunc;
}

var inFunction = out();

inFunction();
