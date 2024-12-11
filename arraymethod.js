// Push and pop methods
 
// let arr=[1,2,3,4,5]
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)

// let arr1=[1,2,3,4,5]
// let arr2=[100,200]
// let x= arr1.pop()
// let y= arr1.pop()
// arr2.push(x)
// arr2.push(y)
// console.log(arr2)

//shift and unshift methods

// let arr1=[1,2,3,4,5]
// let arr2=[100,200]
// let x= arr1.shift()
// let y= arr1.shift()
// arr2.unshift(x)
// arr2.unshift(y)
// console.log(arr2)


// reversing the given array

// let arr=[100,200,300]
// let arr1=arr.pop()
// let arr11=arr.pop()
// arr.unshift(arr1)
// arr.unshift(arr11)
// console.log(arr)


// sort and reverse methods

// sort is used to sort the array
// reverse is used to reverse the array

// let x=[8,2,3,4,5]
// x.sort()
// console.log(x)
// x.reverse()
// console.log(x)

// slice,splice and split methods

// 1.slice is used to extract the elements from the array without changing the original array

// let arr=[1,2,3,4,5]
// let slicedarray=arr.slice(2,5)
// const arr1=arr.slice(0,3)
// console.log(arr1)
// console.log(slicedarray)

// let x=[1,2,3,4,5,6,7]
// let y=x.slice(3,x.length-1)
// // let y=x.slice(3)
// console.log(y)


// 2.splice is used to extract the elements from the array by changing the original array
// syntax:
// (stating index, number of elements to remove, element to add)

// let y=[1,2,3,4,5,6,7]
// let y1=y.splice(3,2,0,0,22,56)    
// console.log(y)


// 3. split is used to split the array into multiple elements
// syntax:
// (separator, limit)

// let x="1,2,3,4,5"
// let y=x.split(",",4)
// console.log(y)

//find the index of 5 using loop
// let x=[1,2,3,4,5,6,7]
// for(i=0;i<x.length;i++){//short cut method;indexof(2)
//     if(x[i]==5){
//         console.log(i)
//     }
// }


// program to find the length of an array using loop

// let x=[1,2,3,4,5,6,7]
// for(i=0;i<x.length;i++){
//     if(x[i]==7){
//         console.log(i)
//     }
// }

// let x=[1,2,3,4,5]
// // let y=[2]
// for (i=0;i<x.length;i++)
// if(x[i]==8){
//     console.log(true)
// }

