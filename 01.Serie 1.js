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



function animals(chickens, cows, pigs) {

      let chickensLegs = 2; 
      let cowsLegs = 4; 
      let pigsLegs = 4; 
   
   let legAnimal = (chickens * chickensLegs ) + 
                   (cows * cowsLegs) + 
                   (pigs * pigsLegs)

   return legAnimal; 
}

console.log(animals(1, 2, 3))


// 07.Exo ==========


function profitableGamble(probability, prize, pay){

   if ( (probability * prize) > pay ) {  

      return true; 

   } else 

      return false
}

profitableGamble(0.2, 50, 9) //  retournera true car le gain attendu est de 0.2 * 50 = 10, ce qui est supérieur au coût de 9.


// 08.Exo ==========

function imageSecond(image, second) {

   let nexImage = ((image * 60 ) * second); 
   return nexImage
   
}
console.log(imageSecond(1, 1)); 



// 09.Exo ==========

function calculateFuel(distance) {
   let fuelNeed = distance * 10;
   return Math.max(fuelNeed, 100); //La fonction Math.max() est utilisée pour retourner le plus grand nombre entre fuelNeed et 100, 
}

console.log(calculateFuel(3)); 

