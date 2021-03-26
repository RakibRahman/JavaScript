//Arithmetic Operators

let p = 10,
  q = 50,
  z = 15;

p + q; //returns 60
q - z; //returns 35
p * q; //returns 500
q / p; //returns 5
z % 2; //returns 1
p++; //returns 11
p--; //returns 9

//Comparison Operators

var a = 5,
  b = 10,
  c = "5";
var l = a;

a == c; // returns true,== operator compares the equality of two operands without considering type.

a === c; // returns false,=== operator compares equality of two operands with type.

a == l; // returns true

a != b; // returns true //	Compares inequality of two operands.

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

a >= c; // returns true

a <= c; // returns true

//Logical Operators

var a = 5,
  b = 10;

a != b && a < b; // returns true //&& is known as AND operator. if both operands/condition is true,it will return 1 or else 0.

a > b || a == b; // returns false // || is known as OR operator.If one operand or condition is true,it will return 1(true)

a < b || a == b; // returns true

!(a < b); // returns false // ! is known as NOT operator. It reverses the boolean result of the operand (or condition)

!(a > b); // returns true

//Assignment operators

let x = 5,
  y = 10,
  zz = 15;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x *= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1

//Ternary Operator
//Ternary operator ?: is a conditional operator. its like short form of if else condition
//Syntax: condition ? value_if_true : value_if_false

var a = 10,
  b = 5;

var c = a > b ? a : b; // value of c would be 10
var d = a > b ? b : a; // value of d would be 5

let f = 20,
  g = 5;

let h = f > g ? f : g;
console.log(h);
let v = f > g ? g : f;
console.log(v);
