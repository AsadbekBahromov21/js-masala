// function add(a, b, name){
//     name()
//     console.log(a + b);
// }
// add(5, 6, greeting)   //calback yani functionsiay ichiga function chaqirsa boladi 


// function greeting(){  // Bu funksiyamiz kutuvchi funksiya hisoblanadi
//     console.log("salom");
// }
// // calbackka hayotiy misol
// [20, 30, 40].map((i)=>{ return i * 2})





// // puru function (o'zbekchasi sof degani)-> said efekt yo bu funcsiyada   
// function daraja(a,b){
//     return a * b
// }
// console.log(daraja(5, 6));

// // impure function (side effekti yani tashqari tasir otkazadi )
//  let b = 10
// function impureAdd(a){
//     return a * b
// }
// console.log(impureAdd(5));




// // outer funksiya ichidagi inner funksiyada outer funcksiya weribilidan
// // foydalanish mumkun
// function outer(){
//     let str = "closure"
//     function inner(){
//         return str
//     }
//     return inner
// }
// let result = outer()
// console.log(result());



// // numberni string qilish
// function evenOrOdd(number) {
//     return number.toString()
// }
// console.log(evenOrOdd(123));


// // stringni teskari qilsh



//   function foo(arr){
//   let sum = 0
//   for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//      sum + arr[i]
//     }
// }   
// return sum
//   }
//   console.log(foo[1, -4 , 14, 8]);

//   function repeatStr (n, s) {
//     return s.repeat(n);
//   }
//   console.log(repeatStr(3, "salom"));

// // darajaga oshirish
//   function arr(numbers){
//     let sum = 0
//     for(let i = 0; i < numbers.length; i++){
//        sum +=(numbers[i] ** numbers[i]);
//     }
//     return sum
//   }
//   console.log(arr([1, 2 ,2]));


//   function foo(son){
//     return Math.min(...son);
//   }
//   console.log(foo([34, 15, 88, 2]));

// //   sonni ozigacha bolgan qiymatlarini topsh
//   function foo(num){
//     let sum = 0
//     for (let i = 1; i <= num; i++){
//         sum = sum += i
//     }
//     return sum
//   }
//   console.log(foo(3));

//   function noSpace(x){
//     return x.split(" ").join("")
//   }
//   console.log(noSpace("salom nqkbsh"));


//   function arr(foo){
//     return ` Hello, ${foo}! Hov areyo `
//   }
//   console.log(arr("asadbek"));



//   function soat (son){
//     return Math.floor((son + 99)/100)
//   }
//   console.log(soat(200000));


//   function doubleValues(arr) {
//     return arr.map(x => x * 2);
// }

// // Example usage
// console.log(doubleValues([1, 2, 3, 4]));  // Output: [2, 4, 6, 8]
// console.log(doubleValues([5, -3, 7]));    // Output: [10, -6, 14]
// {
//     const removeChar = (str)=> str.length <= 2? str: str.slice(1, -1)
//     console.log(removeChar("salom"));
// }


// // sonni eng kichiguni olib chiq
// function son(args){
//     args.sort((a, b) => a - b)
//     return args[0]
// }
// console.log(son([3, 5 ,6, 1]));


// {
//     
//     function repeat(a, b){
//         return a.repeat( b )
//     }
//     console.log(repeat(" salom ", 3));  

// }

// {
//     function dollar(som) {
//         let dollarKursi = 12700
//         return som * dollarKursi
//     }
//     console.log(dollar(150));
// }
{
    function sumOfNumbers(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
            if (numbers.length === 0) {
                return 0;
            }
        }
        return sum;
    }
    console.log(sumOfNumbers([1, -2, 3.5, 4])); // Output: 6.5
    console.log(sumOfNumbers([])); // Output: 0
    console.log(sumOfNumbers([-1, -2, -3])); // Output: -6
    
}


function past(h, m, s){
    let milliseconds = 0;
    if (h >= 0 && h <= 23){
      milliseconds += (h * 3600000);
    };
    if (m >= 0 && m <= 59){
      milliseconds += (m * 60000);
    };
    if (s >= 0 && s <= 59){
      milliseconds += (s * 1000);
    };
    
    return milliseconds;
  };
  
console.log(past(1, 0, 0)); // Output: 3600 (1 hour)
console.log(past(0, 1, 0)); // Output: 60 (1 minute)
console.log(past(0, 0, 1)); // Output: 1 (1 second)
console.log(past(1, 1, 1)); // Output: 3661 (1 hour, 1 minute, 1 second)
console.log(past(0, 0, 0)); 