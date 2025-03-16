function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  let value = price * 0.075;
  return value;
}




function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  if (contact.includes(" ")) {
    return false;
  }

  if (contact.length !== 11 || contact[0] !== "0" || contact[1] !== "1") {
    return false;
  }
  return true;
}





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






function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  if (
    person1.gender === person2.gender ||
    Math.abs(person1.age - person2.age) > 7
  ) {
    return false;
  }
  return true;
}






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
