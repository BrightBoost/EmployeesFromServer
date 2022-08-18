"use strict";

let employees = [];

window.onload = function () {
  $.getJSON("data/employees.json", function (result) {
    employees = result;
    loadDropdown(result);
  });
  const workerSelect = document.getElementById("workers");
  workerSelect.onchange = onSelectWorker;
};

function loadDropdown() {
  const workersNames = document.getElementById("workers");
  let selectOne = document.createElement("option");
  selectOne.textContent = "Select one";
  selectOne.value = "";

  workersNames.appendChild(selectOne);

  let nrOfWorkers = employees.length;
  for (let i = 0; i < nrOfWorkers; i++) {
    let options = new Option(employees[i].name, employees[i].id);
    workersNames.appendChild(options);
  }
}

function onSelectWorker() {
  let workerTableBody = document.getElementById("workerTableBody");
  const workersNames = document.getElementById("workers");
  let selection = workersNames.value;
  let selectedEmployee = employees.find(e => e.id == selection);
  workerTableBody.innerHTML = "";
}
