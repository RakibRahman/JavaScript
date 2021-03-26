// !Static class methods are defined on the class itself.
// !use the static keyword to indicate to that this method doesn't use information from the current instance
// !If we create a method that does not access an instance property, we can use the static keyword.
class Triple {
  static intro() {
    console.log("Intro to Static Method");
  }
  static customName = "Triple";
  static details = "Use me to triple any number";
  static triple(n = 1) {
    return n * 3;
  }
}
Triple.intro();
console.log(Triple.customName);
console.log(Triple.details);
console.log(Triple.triple());
console.log(Triple.triple(5));

class doubleTriple extends Triple {
  static details = "I square the triple of any number you provide";
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}
console.log(doubleTriple.triple(5)); // !(not affected by parent's instantiation)
console.log(doubleTriple.customName); //output from Triple

console.log("---------------------");
class MathOperations {
  static add(n1, n2) {
    return n1 + n2;
  }
  static minus(n1, n2) {
    return n1 - n2;
  }
}
// ?Static Methods
console.log(MathOperations.add(5, 5));
console.log(MathOperations.minus(15, 5));

// !Cannot access static values on instance
const instance = new MathOperations();
// ?instance.add(); //error undefined
