function willSuccess(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  var p = 0;
  var f = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      p++;
    } else {
      f++;
    }
  }

  if (f < p) {
    return true;
  } else {
    return false;
  }
}

// const marks = [60, 70, 80, 40, 30];
// const marks = [];
// const marks = 90;

let numbers = willSuccess(marks);
console.log(numbers);
