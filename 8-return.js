let user = {
    name: "Himani",
    work: function(){
        console.log("Himani is working")
    }
}

user.work()

console.log(typeof 12)
console.log(typeof true)
console.log("bollean")

function sum(firstInput, secondInput){
    function double(a){
        return  a * 2
    }
    return result = double(firstInput) + double(secondInput)
    
}


console.log(sum(10, 20))
