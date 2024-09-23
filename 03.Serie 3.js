//00.Serie 03 =======================

function oddishOrEvenish(newlo) {
    const acc = newlo.toString().split('').reduce((a, b) => a + parseInt(b), 0);

    // Retourner "Evenish" si la somme est paire, sinon "Oddish"
    return acc % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(43));



//01.Serie 03 =======================

function getTotalprice(tabgrocerie) {
    let sum = 0; 
    for (let element of tabgrocerie) {
      sum += (element["quantity"] * element["price"]) 
        
    }
    return sum 
}

console.log (getTotalprice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ])); 




//02.Serie 03 =======================

function reverseOdd(newstring) {
    const mychar = newstring.split(" "); 
    
    const motinverse = mychar.map((mot) => { // map transformer le tableau
        if (mot.length % 2 !== 0) // 
            return mot.split('').reverse().join(''); 
        return mot
    }); 
    return motinverse.join(" "); 
}

console.log(reverseOdd("One two three four"))



//03.Serie 03 =======================

function isSmooth(arr) {
    // Sépare la chaîne en mots en utilisant les espaces comme délimiteurs
    const words = arr.split(' ');

    // Parcourt chaque mot (sauf le dernier)
    for (let i = 0; i < words.length - 1; i++) {
        // Extrait la dernière lettre du mot actuel
        const lastLetter = words[i].charAt(words[i].length - 1);
        // Extrait la première lettre du mot suivant
        const firstLetterNext = words[i + 1].charAt(0);

        // Si les deux lettres sont différentes, la phrase n'est pas fluide
        if (lastLetter !== firstLetterNext) {
            return false;
        }
    }

    // Si toutes les paires de mots sont fluides, la phrase est fluide
    return true;
}

console.log(isSmooth("Someone is outside the doorway")); 




//04.Serie 03 =======================


function sevenBoom(params) {
   params.toString().includes(7) ? "BOOM !" : "there is no 7 in the array"
    
}
sevenBoom([1, 2, 3, 4, 5, 6, 12, 74])




//05.Serie 03 =======================

function convert(valor, unit) {

    if (isNaN(valor)) {
        return "Is not a Number !"
        
    } else if (unit === 'C') {
        return Math.round((valor * 9/5) + 32)

    } else if (unit === 'F') {
        return Math.round((valor - 32) * 5/9)

    } else {
        return 'Error'
    }
 
}

console.log(convert(20, 'C')); 



//06.Serie 03 =======================






