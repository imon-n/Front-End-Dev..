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

// let value = validContact(["0187654321"]);
// let value = validContact('01819234567');
let value = validContact("014567 89001");

console.log(value);
