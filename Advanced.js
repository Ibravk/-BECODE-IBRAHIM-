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



//00. Bonus Serie 03 =======ForEach================ 

// Serie 4

// const isPalindrome = (str) => {
//     const alphabet = "abcdefghijklmnopqrstuvwz".split(''); 
//     const arr = str.trim().toLowerCase().split(""); 

//     arr = arr.filter((el) => {
//         return alphabet.includes(el)
//     }); 

//     const arrTest = [...arr].reverse(); 

//     console.log(arr);
//     console.log(arrTest);

//     for (let i = 0; i < arr.lenght; i++) {
//         if (arr[i] !== arrTest[i]) {
//             return false; 
//         }
//     }

//     return true; 
// }

// console.log(isPalindrome("Madam, I'm Adam")); 