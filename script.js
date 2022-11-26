//QUESTION NO-1:-
//HOW TO COMPARE TWO JSON HAVE THE SAME PROPERTIES WITHOUT ORDER.

//WITHOUT ORDER:-
//^^^^^^^^^^^^^
const obj1 = { name: "person 1", age: "5" };
const obj2 = { age: "5", name: "person 1" };
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log("true");
} else {
  console.log("false");
}

//WITH ORDER:-
//^^^^^^^^^^
var value1 = { a: "1" };
var value2 = { a: "1" };
if (JSON.stringify(value1) === JSON.stringify(value2)) {
  console.log("true");
} else {
  console.log("false");
}

//-------------------------------------------------------------------------------------------------------------------

// //QUESTION NO-2:-
// /*USE THE REST COUNTRIES 'API URL'->"https://restcountries.com/v3.1/all",
// AND DISPLAYS ALL THE COUNTRY FLAGS IN THE CONSOLE.*/

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(
      "PNG:" + result[i].flags.png + " " + "SVG:" + result[i].flags.svg
    );

    //-------------------------------------------------------------------------------------------------------------------

    //QUESTION NO-3:-
    /*USE THE REST COUNTRIES 'API URL'->"https://restcountries.com/v3.1/all",
AND DISPLAYS ALL THE COUNTRY FLAGS IN THE CONSOLE.*/

    console.log(
      "NAME:" +
        result[i].name.common +
        "---" +
        "REGION:" +
        result[i].region +
        "---" +
        "SUB-REGION:" +
        result[i].subregion +
        "---" +
        "populations:" +
        result[i].population
    );
  }
};


//-------------------------------------------------------------------------------------------------------------------

