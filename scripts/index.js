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
  let selectedEmployee = employees.find((e) => e.id == selection);
  workerTableBody.innerHTML = "";

  let translateLabels = {
    id: "ID",
    jobTitle: "Job title",
    name: "Name",
    yearsAtCompany: "Years at company",
    wfhAdddress: "Address",
    email: "Email",
    projectsAssignedTo: "Assigned projects",
    skillsSet: "Skills set",
  };

  if (selection == "") {
    return;
  } else {
    if (isNaN(selectedEmployee["projectsAssignedTo"])) {
      selectedEmployee["projectsAssignedTo"] = selectedEmployee["projectsAssignedTo"].length;
    }

    for (let i = 0; i < Object.keys(selectedEmployee).length; i++) {
      let row = workerTableBody.insertRow(-1);
      let thElement = document.createElement("th");
      thElement.innerHTML = translateLabels[Object.keys(selectedEmployee)[i]];
      row.appendChild(thElement);

      let cell = row.insertCell(1);
      cell.innerHTML = selectedEmployee[Object.keys(selectedEmployee)[i]];
      console.log(Object.keys(selectedEmployee)[i]);
    }
  }
}
