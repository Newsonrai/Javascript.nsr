// let str='hello world'
// // console.log(str.length)
// let str1='bye'
// let str2=str+str1
// // let str3=str.concat+(str2)
// console.log(str2.length)


// let str='Hello world'
// // console.log(str[0])
// // console.log(str[1])
// // console.log(str[2])
// // console.log(str[3])
// // console.log(str[4])
// // console.log(str[5])
// // console.log(str[6])
// // console.log(str[7])
// // console.log(str[8])
// // console.log(str[9])
// // console.log(str[10])
// for(let i=0;i<str.length;i++)
// {
//     console.log(str[i])
// }

//1.Reversing string using for loop

// let str='Hello World'
// for(let i=str.length;i>=0;i--)
// {
//     console.log(str[i])
// }

// 2.Converting string to uppercase

// let str='hello world'
// let str1=str.toUpperCase()
// console.log(str1)

// 3.Converting strimg to lowercase

// let str='HELLO WORLD'
// let str1=str.toLowerCase()
// console.log(str1)

// 4.trimming string

// let str='   hello world   '
// let str1=str.trim()
// console.log(str1)

// 5.Extracting substring

// let str='hello world'
// // let str1=str.substring(2,5)
// console.log(str1)

// 6.Replacing string

// let str='hello world'
// let str1=str.replace('hello','hi')
// let str2=str.replace('world','Newson')
// console.log(str1)
// console.log(str2)


// 7.Finding starting and ending letter of string

// let str='hello world'
// let str1=str.startsWith('h')
// let str2=str.endsWith('d')
// console.log(str1)
// console.log(str2)

// 8.Checking palindrome of the string

// let str='hello world'
// let str1=str.split('').reverse().join('')
// if(str1==str)
// {
//     console.log("String is palindrome")
// }else{
//     console.log("String is not palindrome")
// }

// Another Method of palindrome

// let str='hello world'
// let newstring
// for(let i=str.length;i>=0;i--)
// {
//     // newstring+=str[i]
//     newstring=newstring+str[i]
// }
// if(str==newstring)
// {
//     console.log("String is palindrome")
// }else{
//     console.log("String is not palindrome")
// }


// 7.Destructuring of array 

// let ar=[1,2,3,4,5]
// let [a,b,c,d,e]=ar
// console.log(a,b,c,d,e)

// 8.Destructuring of object

let obj={
names:"Newson",
age:24,
city:"Bhaktapur"
}
let {names,age,city}=obj
console.log(names,age,city)

// 9.spread operator or Rest operator

// let ar=[1,2,3,4,5]   
// // let ar1=[6,7,8,9,10]
// // let ar2=[...ar,...ar1]
// let arr1=[...ar,6,7,8,9]
// console.log(arr1)

// 10.Rest operator
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]
