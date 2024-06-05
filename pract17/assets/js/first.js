/* 
    Практическая работа №17
*/
var name = "Василий";
var admin = "";
var pi = 3.14;
var name_echo = "John Doe"
var answer = "Yes, I am!";
admin = name;



// First function
function first() {
    alert('Привет мир');
}

// Second function
function second() {
    alert('Привет');
    alert('Мир');
}

// Third function
function third() {
    document.write(Date());
}

function fourth() {
    document.write("<h1>Это тег для заголовка</h1>");
    document.write("<p> Это тег для обозначения параграфа</p>")
}

function fifth() {
    alert(admin)
}

function sixth() {
    document.write(pi + "<br>");
    document.write(name_echo + "<br>");
    document.write(answer + "<br>");
}

function seventh() {
    var carname = "Volvo"
    document.getElementById("demo").innerHTML=carname;
}

function eighth() {
    var car = "Volvo";
    document.write(car + "<br>");
    var car = null
    document.write(car + "<br>");
}

function nineth() {
    var person = new Object();
    person.firstname = "John";
    person.lastname = "Doe";
    person.age = 50;
    person.eyecolor = "blue";
    document.write(person.firstname + " is " + person.age + " years old");
}