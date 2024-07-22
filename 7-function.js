let number1 = 100
let number2 = 2
let sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)


number1 = 50
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum)

number1 = 150
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum)



console.log("2 * 2 = 4");
console.log("2 * 5 = 10");
console.log("2 * 6 = 12");

function double(input) {
    console.log(`2 *  ${input} = ${input * 2}`)

}

double(2)
double(4)
double(6)



function calculateSum(number1, number2) {
    console.log(`${number1} + ${number2} = ${number1 + number2}`)
}
calculateSum(100, 50)
calculateSum(50, 50)
calculateSum(40, 50)

let fruitsData = [
    {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        price: 100,
    },
    {
        name: "orange",
        scientificName: "k-xyz",
        price: 50,
    },
    {
        name: "apple",
        scientificName: "k-xyz",
        price: 50,
    },
]

function printFruitPrice(index) {
    // console.log("the price of ", fruitsData[index].name, " is ", fruitsData[index].price)
    console.log(`The price of ${fruitsData[index].name} is ${fruitsData[index].price}`)
}
printFruitPrice(0)
printFruitPrice(1)
printFruitPrice(2)

function printFruitRate(fruit) {
    // here, fruit = {name, price , sname}
    let { name, scientificName, price } = fruit
    console.log(`the price of ${name} is ${price}`)
}
printFruitRate(fruitsData[0])
printFruitRate(fruitsData[1])
printFruitRate(fruitsData[2])



/* function fruitprice(){
    for (let i = 0; i < fruitsData.length; i++) {
        console.log(`The price of ${fruitsData[i].name} is ${fruitsData[i].price}`)
}
}
fruitprice() */

// console.log("the price of ", fruitsData[0].name, " is ", fruitsData[0].price)
// console.log("the price of ", fruitsData[1].name, " is ", fruitsData[1].price)
// console.log("the price of ", fruitsData[2].name, " is ", fruitsData[2].price)


function fruits(name, sname, price) {
    console.log(`The price of ${name} is ${price}`)
}
fruits("kiwi", "xyz", 100)
fruits("orange", "xyz", 50)
fruits("aplle", "xyz", 60)

/* 
research on  
     scope
     global
     block
  return in function
  
*/

