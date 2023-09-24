// //Array

// const myArray = [0,1,2,3,4,5]

// const Array2 =["Shaktiman","nagraj","Spiderman"]

const myArray2 = new Array(1, 2, 3, 4, 5)

// console.log(typeof myArray2)
// console.log(myArray2[2])

// Array Methods

//myArray2.push(6)   // Push Methode ADD New Element In By Defoult Last Index   EX -->[ 1, 2, 3, 4, 5, 6 ]
//  console.log(myArray2);
//  myArray2.push(7,6,8)

// console.log(myArray2)

// myArray2.pop()  // POP Methide use in remove last element by defoult last index  
// console.log(myArray2);

// myArray2.unshift(9,8 )  //Unshift Methode add new Element in Array  and give a new lenght by default add Element in start mins 0 index

// console.log(myArray2)

// myArray2.shift(9,8)

// console.log(myArray2)

// myArray2.shift()

// console.log(myArray2)

//  ++++++++++++++++++++++++++++++++++++++++++ JOIN +++++++++++++++++++++++++++++++++++++++++++++


// const newArr = myArray2.join()  // in Join Method or Function To Convart arry to string

// console.log(newArr)

// console.log(typeof newArr)      // atta newArry ha array element ahe pn to string ahe

// let aa = myArray2.pop


//++++++++++++++++++++++++++++++++ Slice or Splice ++++++++++++++++++++++++++++++++++

// console.log(myArray2)

// console.log(myArray2.slice(1,4))


// console.log(myArray2)


// console.log(myArray2.splice(0,3))  // count a 0 to 3 number of after 

// console.log(myArray2)        // Splice a Remove Element in array & new Array was Create

// console.log(myArray2)

// ++++++++++++++++++++++++ Array Concate Type ++++++++++++++++++++++++++


let FirstArray = [12,45,78,[65,98,56],[56,45,],15,45,]

let Flat_Array =FirstArray.flat(Infinity)   // Flat methode is Use array Are separte
console.log(Flat_Array)

let SecondArray = [52, 58, "Aniket","Jadhav"]

//  console.log(FirstArray)

// console.log(SecondArray.length)

// console.log(typeof FirstArray)

//  FirstArray.push(SecondArray)   // Is not marge in two array   push mhanje pahilya arry madhe 2nd array push hone
//  console.log(FirstArray)
let concat_array = FirstArray.concat(SecondArray)
console.log(concat_array)
console.log(concat_array.length)
let SpreadArray=[...FirstArray,...SecondArray]
console.log(SpreadArray)
console.log(SpreadArray.length)

// console.log(push_array) 

var aniArray = Array[2, 2, 5, 5, 5]

//  console.log(typeof aniArray)

console.log(FirstArray + SecondArray)                                                                  // console.log(FirstArray.length)

let thirdArray = FirstArray.concat(SecondArray)

//  console.log(thirdArray.length)

//  console.log(typeof thirdArray)                                                                 // console.log(FirstArray.indexOf(56));

//    console.log(...FirstArray)

//    console.log(FirstArray)

//    console.log(FirstArray.splice(4,1))

//    console.log(FirstArray.length)


//+++++++++++++++++++++++++++++++++  IN Another Date Type to Convort In Array+++++++++++++++++++++ 
//----------------------- varify to given Data Type is  Array  or not using    .isArray   method
console.log(Array.isArray("Aniket"))    // Is Not Array

console.log(Array.isArray([1,2]))   // IS array

//-----------------------another data type to convort arrray data type  use   Array.from("Another Data type Value")----------
console.log(Array.from("Aniket"))
