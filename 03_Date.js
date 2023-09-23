let myDate=new Date()
// console.log(myDate)     // Gives On Date  EX 2023-09-23T12:36:21.799Z
// console.log(myDate.toString())   // EX 2023-09-23T12:39:16.294Z
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate);     // Date ByDEAFUALT Object 

// const CreaetDate=new Date (2023,0/*janevari*/,10)   // month Count In  in 1 digit Start are 0  0--> Jane, 1-->feb, 2-->march,11 -->dec
// console.log(CreaetDate.toDateString())
// let dd =new Date ("02-04-2023")
// console.log(dd.toLocaleString())
// const createDateTime =new Date(2023,5,26, 12,56,40)    // month Count In  in 1 digit Start are 0  0--> Jane, 1-->feb, 2-->march,11 -->dec
// console.log(createDateTime.toLocaleString())         // Show all Date And Time
// console.log(CreaetDate.toDateString())

// console.log(Date.now().toLocaleDateString)
// const MyNowTime = Date.now()
// console.log(MyNowTime)
// console.log(createDateTime.getTime())
let newDate =new Date() //By defoult Show Today date
console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())
// console.log(newDate.getHours())
// console.log(newDate.getMilliseconds())
// console.log(newDate.getTime())
// console.log(newDate.getMonth())
// console.log(newDate.getMinutes())
console.log(`date ${newDate.getFullYear()} is a best year and today ${newDate.getDate()} is this day`)
newDate.toLocaleString('default',{
    weekday:"long",month:"long"

})