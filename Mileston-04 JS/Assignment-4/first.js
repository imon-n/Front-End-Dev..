function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  let value = price * 0.075;
  return value;
}

let value = calculateVAT(1500);
// let value = calculateVAT(-500);
// let value = calculateVAT("foo");

console.log(value);
