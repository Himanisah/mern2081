let color = "red"
let age = 12
let price = 100.50
let verifiedStatus = true

console.log("before", age)
age = 20;
console.log("after", age)

/* 
   //DataTypes

   4.undefined  //js only
   5.null

   6. Array
*/

let brand;
console.log(brand);   //undefined

let personName; //declaration
personName = "ram"; // updating value //re-initialziation

let userName = "ram";

let data = null
/* 
  codes to fetch data
       if sucessfull
       data = apiData
*/

let md = "medium";
size = md;
console.log("size", size);

/* 
  Array
    -collection of multiple values
    similsr data
    -INDEX
        array always start with 0
*/



// let evenNumbers = [2, 4, 6, 8, "ten"] //wrong
let evenNumbers = [2, 4, 6, 8, 10]


let oddNumbers = [1, 3, 5, "seven"]
oddNumbers[3] = 7
oddNumbers.push(9);
oddNumbers.unshift(0);
oddNumbers[4] = 9;
console.log(oddNumbers);

let courses = ["Mern", "Python", "PHP", "Database"]
courses.push("React");
console.log(courses);



let users = [
    ["ram", 987563475],
    ["shyam", 9863546],
    ["hari", 98764784]
];
console.log(users);

let colors = [
    ["red", "#ff0000", (255, 0, 0)],
    ["blue", "#0000ff", (0, 0, 255)],
    ["green", "#008000", (0, 128, 0)]
];
console.log(colors);
/*  TODO:
       hex value and rgb value of each color
*/



