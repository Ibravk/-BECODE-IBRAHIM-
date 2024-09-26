//00. Serie Advanced ======================= 




//01. Serie Advanced ======================= 




//02. Serie Advanced ======================= 


function isPalindrome(str) {
    
    if (str.split("").reverse().join("") != str ) {
        console.log("Ce n'est pas un palindrome")
    } else {
        console.log("C'est un palindrome")
    }
    
}
let str = "Madam, I'm Adam"
isPalindrome(str)



//03. Serie Advanced ======================= 




//04. Serie Advanced ======================= 


function wordreverse (reversword ) {
    let word = reversword.split(" "); 

    let motsinverse = word.map(element => element.split("").reverse().join("")); 

    return motsinverse.join(" ")
}

let newwordtheReverse = "my name is Ibrahim"
console.log(wordreverse(newwordtheReverse))




//07. Serie Advanced ======================= 


function fibonacci (n) {
    let a = 0, b = 1, temp; 
    let arrya = [a]; 

    for (let i = 1 ; i <= n ; i++) {
        arrya.push(b)
        temp = a + b
        a = b; 
        b = temp
    }
    console.log(arrya)
}

fibonacci(6); 



//00. Bonus Serie 03 =======ForEach================ 


function premierelettredemots(stringto) {

    let words = stringto.toLowerCase().split(' '); 
    let arry10 = []; 

    words.forEach(element => {
        let firstLetter = element.charAt(0).toUpperCase(); 
        let remplace = element.replace(element.charAt(0), firstLetter)
        arry10.push(remplace)  
    });
    console.log(arry10.join(' '))
}
premierelettredemots('Je te Vois biEn')




//00. Bonus Serie 03 =======Filter================ 

let producs = [
{
    id : 5, 
    name : "Ibraim"
}, 
{
    id : 1, 
    name : "Poyraz"
}, 
{
    id : 2, 
    name : "Kaan"
}, 
]; 

const deletename = (id) => {
    producs = producs.filter(element => element.id !== id)
}

deletename(5);
console.log(producs); 