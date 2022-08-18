"use strict";

let employees = [];

window.onload = function() {
  $.getJSON("data/employees.json", function(result) {
    employees = result;
  });
};