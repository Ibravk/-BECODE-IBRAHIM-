// 00.Exo ===========

function makesTen(a, b) {
    if (a, b === 10 || a + b === 10) {
       return true; 
    } else 
       return false; 
    
}

// 01.Exo ===========

function calcAge(day) {
   const myAgeindays = 365; 
   return myAgeindays * day; 
}
calcAge(); 


// 02.Exo ===========

function addUp(numb) {
   let total = 0; 

for (let i = 1; i <= numb; i++) {
   total += i; 
}
   return total
}

// 03.Exo ===========

function minMax(myNumb) {
   let min = Math.min(...myNumb) //le spread operator (...) pour décomposer le tableau
   let max = Math.max(...myNumb)
   return [min, max]
}

let numbers = [12, 3, 78, 13, 105, 1]
console.log(minMax(numbers)); 

// 04.Exo ==========

function detectedWord(myNewstring) {
   let astringword = myNewstring.replace(/[A-Z]/g, "")
   return astringword
}

console.log(detectedWord("bEEFGBuFBRrHgUHlNFYaYr")); 


// 05.Exo ==========

function distributor() {
   
let drinks = [
   {name: "lemonade", price: 10},
   {name: "lime", price: 10},
   {name: "coke", price: 8},
   {name: "vodka", price: 17},
   {name: "water", price: 3},
 ]

 return drinks.sort((a, b) => a.price - b.price)
}

console.log(distributor())


// 06.Exo ==========