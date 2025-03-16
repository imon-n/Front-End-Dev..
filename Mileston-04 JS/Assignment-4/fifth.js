function calculateSleepTime(times) {
  for (var i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
  }
  total_tiems = 0;
  for (var i = 0; i < times.length; i++) {
    total_tiems = total_tiems + times[i];
  }
  var sec = 0,
    min = 0,
    hour = 0;

  sec = total_tiems % 60;
  var f = Math.floor(total_tiems / 60);
  min = f % 60;
  hour = Math.floor(total_tiems / 3600);

  return `hour: ${hour}, minute: ${min}, second: ${sec}`;
}


const times = [1000, 2000, 725];
let numbers = calculateSleepTime(times);
console.log(numbers);
