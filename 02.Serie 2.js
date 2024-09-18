// 00.Exo - Serie 2 =======================

function countTrue(val) {
     return val.filter(Boolean).length
}

console.log(countTrue([true, false, false, true, false]));



// 01.Exo - Serie 2 =======================










// 02.Exo - Serie 2 =======================

function num_of_digits(valor) {
    return valor.toString().length
}
console.log(num_of_digits(10000))




// 03.Exo - Serie 2 =======================

function toArray(newObj) {
    return Object.entries(newObj); //obtenir un tableau de paires clé-valeur (comme un tableau de tuples [clé, valeur]) 
}
    
const newObj= ({a: 1, b: 2 }) 
console.log(toArray({})); 
console.log(toArray(newObj))

/*Object.keys() retourne un tableau contenant toutes les clés de l'objet.
Object.values() retourne un tableau contenant toutes les valeurs de l'objet.
Object.entries() retourne un tableau de paires [clé, valeur], ce qui est pratique si tu veux manipuler à la fois les clés et les valeurs*/



// 04.Exo - Serie 2 =======================

function arrayOfMultiples(num, limit) {
    let multiple = []; 
    for (let i = 1; i <= limit; i++) {
        multiple.push(i * num)
    }
        return multiple
}

console.log(arrayOfMultiples(7, 5))



// 05.Exo - Serie 2 =======================

function removeLeadingTrailing(str){
    return parseFloat(str).toString()
} 

console.log(removeLeadingTrailing("03.1400"))





// 06.Exo - Serie 2 =======================


function sortIt(crr) {
    return crr.sort((a, b) => {
        const arrNy = Array.isArray(a) ?  a[0] : a   
        const arrNy2 = Array.isArray(b) ? b[0] : b
        return arrNy - arrNy2;
 })
}

const int = [[3], 4, [2], [5], 1, 6]
const result = sortIt(int)
console.log(result)



// 07.Exo - Serie 2 =======================

function calculator(nb1, operator, nb2) {
    let resultat; 

    switch (operator) {
        case "+":
            resultat = nb1 + nb2
            break;

        case "-": 
            resultat = nb1 - nb2
            break; 
        
        case "/":
            if (nb2 === 0 ) { 
                return "Ne peut pas diviser par 0" 
            }

            return nb1 / nb2
            break; 

        case "*": 
            resultat = nb1 * nb2
            break; 

        default:
            return "operator invalide"      
    }
    
    return resultat; 
}

console.log(calculator(10, "+", 5))




// 08.Exo - Serie 2 =======================

function areaOfCountry(country, superficie) {
    const ttwordlandmass = 148940000
    const countrylandmass = (superficie / ttwordlandmass) * 100
    const finalLandmass = countrylandmass.toFixed(2)
    
    return `${country} is ${finalLandmass} of the total world's landmass`
}

console.log(areaOfCountry("USA", 9372610))





// 09.Exo - Serie 2 =======================

function reverseWords(str){
        return str.trim().split(' ').filter((a) => a).reverse().join(' ');
    }

console.log(reverseWords(" the sky is blue"))


// .trim() va supprimer les espaces au début et à la fin.
// .reverse() inverse l'array
// .join(" ") retransforme l'array en string, en séparant les valeurs par un espace.



