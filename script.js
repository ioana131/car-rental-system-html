function showScreen(id) {
  let screens = document.querySelectorAll(".screen");
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function reserve() {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;

  if (start === "" || end === "") {
    alert("Fill all fields!");
    return;
  }

  let number = "R-" + Math.floor(Math.random() * 10000);

  document.getElementById("output").innerText =
    "Reservation created. Rental number: " + number;

  showScreen("result");
}

function resetReservation() {
  document.getElementById("start").value = "";
  document.getElementById("end").value = "";
}

function searchRental() {
  showScreen("insurance");
}

function finishRental() {
  alert("Rental started!");
  showScreen("home");
}

function processReturn() {
  let condition = document.getElementById("condition").value;

  let price = condition === "Damaged" ? 300 : 200;

  document.getElementById("returnOutput").innerText =
    "Total amount: " + price + " EUR";

  showScreen("returnResult");
}

function generateReport() {
  document.getElementById("reportOutput").innerText =
    "Example report generated.";

  showScreen("reportResult");
}