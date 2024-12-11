//Hogher Order Function

// 1.forEach--->is used to iterate through an array

// const arr=[1,2,3,4,5]
// arr.forEach((element) => {
//     // console.log(element)
//     console.log(element*element)
// })

//print even numbers and sum of even numbers

// const array=[1,2,3,4,5,6]
// array.forEach((element) => {
//     if(element%2==0){
//         console.log(element)
//     }
// })
// let sum=0;
// array.forEach((element) => {
//     if(element%2==0){
//         sum=sum+element
//     }
// })
// console.log("The sum of even numbers is",sum)


// 2.Map function---->is used to create new array

// const arr=[1,2,3,4,5]
// const arr1=arr.map((element) => {
//     return element*element
// })
// console.log("The squared array is",arr1)


//write a code to create a new array with remainders

// let array=[100,2000,3000,400,599]
// const arr1=array.map((element) => {
//     return element%5
// })
// console.log(arr1)



// 3.filter function---->is used to filter an array and create a new array

// const arr=[1,2,3,4,5]
// const arr1=arr.filter((element) => {
//     return element%2==0
// })
// console.log("The even numbers are",arr1)



// const arr=[1,2,3,4,5]
// const arr1=arr.filter((element) => {
//     return element>1
// })
// console.log(arr1)
// let sum=0;
// arr.forEach((element) => {
//     if(element%2==0){
//         sum+=element
//     }
// })
// console.log("The sum of numbers greater than 1 is",sum)


// 4. Reduce function---->is used to reduce an array to a single value 

// let arr=[1,2,3,4,5]
// let arr1=arr.reduce((acc,element) => {
//     return acc*element
// })
// console.log(arr1)

// task 
// 1.Write a function that filter out the even numbers from an array

// const arr=[1,2,3,4,5]
// const arr1=arr.filter((element) => {
//     return element%2==0
// })
// console.log(arr1)

// 2.Filter an array to print only odd numbers

// const array=[1,2,3,4,5]
// const arr=array.filter((element) => {
//     return element%2!=0
// })
// console.log(arr)

