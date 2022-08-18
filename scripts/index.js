"use strict";

let employees = [];

window.onload = function() {
  $.getJSON("data/employees.json", function(result) {
    employees = result;
    loadDropdown(result);
  });

  selectWorker.onchange = onSelectWorker;

};

function loadDropdown() {
  
}