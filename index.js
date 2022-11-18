let characteristics = ['name', 'extremitaeten',
  'anzbeine', 'art',
  'koerperbedeckung', 'element',
  'aktiv', 'ernaehrung'];

//get single Element from HTML Input
function outputVariables(characteristic) {
  let value = document.getElementById(characteristic).value;
  return value;
};

//returns all values from form
function returnField() {
  let filled_form = [];
  characteristics.forEach(function(item, index) {
    let wert = outputVariables(item);
    filled_form.push(wert);
  });
  return filled_form;
};

//returns JSON file
function readJSON() {
  // JSON lesen
  var json = (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "https://f5cbfe22-31a2-483b-892a-d637141dcaee.id.repl.co/__replco/devtools_wrapper.html",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    });
    return json;

  })();
  //---
  return json
};

//adds the form to JSON Object
function addJSON(json, filled_form) {
  var index = Object.keys(json).length;
  console.log(filled_form)
  let jsonObj = {
    ...json, [index]: {
      "Name": filled_form[0],
      "Beine": parseInt(filled_form[1]),
      "Extremitäten": parseInt(filled_form[2]),
      "Körperbedeckung": parseInt(filled_form[3]),
      "Element": parseInt(filled_form[4]),
      "Ernährung": parseInt(filled_form[5]),
      "Art": parseInt(filled_form[6]),
      "Aktiv": parseInt(filled_form[7])
    }
  };
  return jsonObj;
};

function update(jsonObj) {
  $.ajax
    ({
      type: "GET",
      dataType: 'json',
      async: false,
      url: 'http://localhost:3000',
      data: JSON.stringify(jsonObj),
      success: function() { alert("Thanks!"); },
      failure: function() { alert("Error!"); }
    });
};

//write user input into JSON file
function main() {
  let filled_form = returnField();
  let json = readJSON();
  jsonObj = addJSON(json, filled_form);
  localStorage.setItem('localStored', JSON.stringify(jsonObj));
  var jsonObj = JSON.parse(localStorage.getItem('localStored'));
  update(jsonObj);
}
