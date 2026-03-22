// function declaration
function sum(a, b) {
  ans = a + b;
  return ans;
}
ans = sum(9, 8);
console.log(ans);
// function expression
let division = function (a, b) {
  return a / b;
};
ans = division(8, 2); //without this line of code which is called function calling , the function cant be able to execute code!
console.log(ans);
// this is called arrow function
let sub = (a, b) => {
  return b - a;
};
result = sub(45, 74); // func calling
console.log(result);
