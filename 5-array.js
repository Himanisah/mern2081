// let fruits = ["kiwi", "appl", "orange"];
// console.log(fruits);
// console.log(fruits[1])

// fruits[1] = "Apple"
// console.log(fruits)


/* let fruits = [
    {
        name: "kiwi",
        scientificName: "wrong",
        prices: {
            Nepal: 200,
            USA: 1,
            UK: 3,
            UAE: 2,
            Europe: 3
        }
    },
    {
        name: "Apple",
        scientificName: "abc",
        prices: {
            Nepal: 200,
            USA: 1,
            UK: 3,
            UAE: 2,
            Europe: 3
        }
    }
]; */

// console.log(fruits[0].prices.Nepal);
// console.log(fruits[1].prices.UAE);


let fruits = [
    {
        name: "kiwi",
        scientificName: "wrong",
        prices: [
            {
                country: "Nepal",
                price: 1
            },
            {
                country: "USA",
                price: 1
            },
            {
                country: "UK",
                price: 2
            },
            {
                country: "UAE",
                price: 3
            },
        ]
    },
    {
        name: "Apple",
        scientificName: "wrong",
        prices: [
            {
                country: "Nepal",
                price: 100
            },
            {
                country: "USA",
                price: 1
            },
            {
                country: "UK",
                price: 2
            },
            {
                country: "UAE",
                price: 3
            },
        ]
    }
]

console.log(fruits[0].prices[0].price)
fruits[0].prices[0].price = 100;
console.log(fruits)



let backendResponse = {
    msg: "success",
    result: {
      total: 2,
      data: [
        {
          name: "kiwi",
          scientificName: "k-wrong-xyz",
          prices: [
            {
              country: "us",
              price: 1,
            },
            {
              country: "nepal",
              price: 1, // change this to 100
            }, 
          ],
        },
        {
          name: "orange",
          scientificName: "k-xyz",
          prices: [
            {
              country: "us",
              price: 2,
            },
            {
              country: "nepal",
              price: 200,
            },
            {
              country: "cad",
              price: 200,
            },
          ],
        },
      ],
    },
  }

  console.log(backendResponse.result.data[0].prices[1].price)

  backendResponse.result.data[0].prices[1].price = 100;
  console.log(backendResponse.result.data[0].prices[1].price)

  backendResponse.result.data[0].prices[2] = {
    country: "canada",
    price: 2
  }
  console.log(backendResponse)

  /*
  wap to calculate sum of 2 digits 
  */
 let a = 7
 let b = 4
 let c = 5
 let d = 3
 console.log( a + " + " + b + " = " + (a+b)) 
 console.log( b + " + " + c + " = " + (b+c)) 
 console.log( c + " + " + d + " = " + (c+d)) 
 console.log( a + " + " + d + " = " + (a+d)) 