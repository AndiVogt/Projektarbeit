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
      'url': "data.json",
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
 
function putJSON(jsonObj){
  $.ajax
  ({
    type: 'PUT',
    url: 'http://127.0.0.1:8080/put-test',
    data: jsonObj,
    success: function(res) {},
    failure: function() { alert("Error!"); }
  });
}

function getJSON() {
  var result = $.ajax
  ({
      type: "GET",
      url: 'http://127.0.0.1:8080/get-test',
      async: false,
      success: function(res) {  },
      failure: function() { alert("Error!"); }
    }).responseJSON; //Fehler finden
    return result
};





//write user input into JSON file
function main() {
  let filled_form = returnField();
  json = getJSON();
  jsonObj = addJSON(json, filled_form);
  console.log(jsonObj);
  putJSON(jsonObj);
  

}


