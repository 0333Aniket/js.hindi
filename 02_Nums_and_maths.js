// const score =100
// console.log(score);
// const balence = new Number(400)
// console.log(balence);
// /*const NewBalence =balence.toString()
// console.log(NewBalence)*/    console.log(balence.toString())   /* Convort number to String */
// //   DECLARE IN DECIMAL {USE      .toFixed}
// console.log(balence.toFixed(3))

// const otherNumber = 562.235
// console.log(otherNumber.toPrecision(3)) /* Catch a before decimal to give up .toPrecision())*/

const hundred=10000000
console.log(hundred.toLocaleString('en-IN'));
 //+++++++++++++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++++++
 console.log(Math)      // BY defoult Math Property
 console.log(Math.abs(-2))    //  In Maths Convortor MINUS To POSSITIV  use .abs  Method  Convort{- to +}
 console.log(Math.round(5.4)) // In Maths Present Decimal value to select totally round {.5> --> 5 or .5<  --> 6}
 console.log(Math.ceil(7.1))      // In Maths Present Decimal value to select highst(top)  {.5> --> 8  or .5<  -->high 8}
 console.log(Math.floor(7.8))    // In Maths Present Decimal value to select low (bottem) {.5> --> less  7 or .5<  --> less 7} 
 console.log(Math.sqrt(64))       // Given a Square root 
 console.log(Math.max(56,78,56,89,12,45,98.65))
 console.log(Math.min(56,78,56,89,12,45,98.65))

console.log(Math.random())  // Give A Random Value    for Ex 0.1575458441 
console.log(Math.random()*10)  // Given A random value but is can give 1 digite value for ex 1.2564654 
console.log(Math.random()*100)     //  Given Two (2) Digit Value   ex 88.61157231479257
console.log(Math.random()*1000)       // Given Three (3) Digit Value ex   845.4567685454

const min =10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)   // Formula