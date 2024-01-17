//Functions can also receive other functions as arguments. These are called "callback functions"
//This allows us to write more universal functions that can be reused in different situations.

//Callbacks are a way to ensure that a certain code will not be executed until another is executed.

// setimeout has function and value

// asincronia == asynchrony
// sincronía === synchrony

// Example 1
function first(second) {
  setTimeout(function () {
    console.log(`First`);
    second();
  }, 1000);
}

function second() {
  7;
  console.log(`Second`);
}
first(second);

//Example 2
function example(callback) {
  callback();
}

example(function () {
  console.log(`hola`);
});

//Example 3
function modify(array, callback) {
  array.push("Blue");
  callback(array);
}

const colours = [`Red`, `Yellow`, `Green`];

modify(colours, function (array) {
  console.log(`he modificado el array ${array.length}`);
});

// Example 4

function sum(num1, num2, callback) {
  let total = num1 + num2;
  callback(total);
}

sum(5, 2, function (total) {
  if (total == 11) {
    console.log(total);
  } else {
    console.log(`Try again!`);
  }
});
