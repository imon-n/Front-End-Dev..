
document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();

  console.log("hello");

  const accountNumber = document.getElementById("Acount-nunber").value;
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);

  if (accountNumber.length === 11) {
    if (convertedPin === 1234) {
      window.location.href = "./main.html";
    } else {
      alert("pin tikh nai ");
    }
  } else {
    alert("need valid acount number");
  }
});
