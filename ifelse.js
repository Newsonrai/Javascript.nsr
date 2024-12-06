// 1.Age_Check

// const prompt=require("prompt-sync")();
// const age=prompt("Enter the age: ");
// if (age>=18){
//     console.log("Adult")
// }
// else{
//     console.log("Not Adult")
// }

// 2.Number_Sign:
// const prompt=require("prompt-sync")();

// let num = prompt("Enter the number: ");

// if (num>=0){
//     console.log("Positive")
// }else{
//     console.log("Negative")
// }

// 3.Even/Odd 

// const prompt=require("prompt-sync")();
// const num=prompt("Enter the number: ");
// if(num/2==0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

// 4.Vowel or Consonant checking

// const prompt=require("prompt-sync")();

// let ch=prompt("Enter a character: ");
// if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U"){
//     console.log("Vowel")
// }else{
//     console.log("Consonant")
// }

// 5.Check_Zero

// const prompt=require("prompt-sync")();
// let num=prompt("Enter the number: ");
// if(num==0){
//     console.log("Zero")
// }else{
//     console.log("Non Zero")
// }


//6. Multiple of 5

// const prompt=require("prompt-sync")();
// let num=prompt("Enter the number: ");
// if(num%5==0){
//     console.log("Multiple of 5")
// }else{
//     console.log("Not Multiple of 5")
// }

// 7.Greater than 10

// const prompt=require("prompt-sync")();
//  let num=prompt("Enter the given number:")
// if (num>10){
//     console.log("The entered number is greater than 10")
// }else{
//     console.log("The entered number is less than 10")
// }

// 8.Check equality

// const prompt=require("prompt-sync")();
// let num1=prompt("Enter the first number: ");
// let num2=prompt("Enter the second number: ");
// if (num1==num2){
//     console.log("Equal")
// }else{
//     console.log("Not Equal")
// }

// String length checking

// const prompt=require("prompt-sync")();
// let str=prompt("Enter the string: ");
// if (str.length>5){
//     console.log("Long String")
// }else{
//     console.log("Short String")
// }

// 10.Check Uppercase

// const prompt=require("prompt-sync")();
// let str=prompt("Enter the string: ");
// if (str.toUpperCase()==str){
//     console.log("Uppercase")
// }else{
//     console.log("Not Uppercase")
// }

// 11.Check Weekend

// const prompt=require("prompt-sync")();

// let day=prompt("Enter the name of day:")
// if (day=="saturday"){
// console.log("Weekend")

// }else{
//     console.log("The day other than Saturday is not Holday.")
// }

// 12.Age Category

// const prompt=require("prompt-sync")();
// let age=prompt("Enter your age:")
// if (age>=12){
//     console.log("You aren't a Child")
// }else{
//     console.log("You are a Child")
// }


// 13.Temperature Check

// const prompt=require("prompt-sync")();
// let temp=prompt("Enter the temperature:")
// if(temp>=30){
//     console.log("Hot")
// }else{
//     console.log("Cold")
// }

// 14.Number Range 

// const prompt=require("prompt-sync")();
// let num=prompt("Enter the number:")
// if(1<=num && num<=100){
//     console.log("In Range")
// }else{
//     console.log("Out of Range")
// }

// 15.Grade Check

// const prompt=require("prompt-sync")();
// let score=prompt("Enter your obtained score:")
// if(score>=50){
//     console.log("Pass")
// }else{
//     console.log("Failed")
// }

// 16.Divisability Check

// const prompt=require("prompt-sync")();

// let num=prompt("Enter the number:")
// if(num%3==0){
//     console.log("divisible by 3")
// }else{
//     console.log("not divisible")
// }

// 17.Morning or Afternoon

// const prompt=require("prompt-sync")();
// let time=prompt("Enter time:")
// if(time<12){
//     console.log("Good Morning")
// }else{
//     console.log("Good Afternoon")
// }

// 18.Teenager Checking

// const prompt=require("prompt-sync")();
// let age=prompt("Enter your age:")
// if(age>=13 && age<=19){
//     console.log("Teenager")
// }else{
//     console.log("Not Teenager")
// }

// 19.String content check

// const prompt=require("prompt-sync")();
// let str=prompt("Enter the string:")
// if(str.includes("a")||str.includes("A")) {
//     console.log("String contains a")
// }else{
//     console.log("String doesn't contain a")
// }

// 20.Leap Year Check --->A year is a leap year if it is divisible by 4.

// const prompt=require("prompt-sync")();
// let year=prompt("Enter the year:")
// if(year%4==0){
//     console.log("Leap Year")
// }else{
//     console.log("Not Leap Year")
// }

// // 21.Check negative

// const prompt=require("prompt-sync")();
// let number=prompt("Enter the number:")
// if(number<1){
//     console.log("Negative number")
// }else{
//     console.log("Positive Number")
// }

// 22.Password match

// const prompt=require("prompt-sync")();
// let password=prompt("Enter your password:")
// if(password=="NEWSON"){
//     console.log("Password matched")
// }else{
//     console.log("Password donot matched")
// }

// 23.Greater Number 

// const prompt=require("prompt-sync")();
// let num1=prompt("Enter first number:")
// num2=prompt("Enter second number:")
// if(num1>num2){
//     console.log("First number is Greater.")
// }else{
//     console.log("Second number is Greater.")
// }

// 24.Prime Number Check

// const prompt=require("prompt-sync")();

// function isPrime(num) {
//     if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; // Found a divisor, so not prime
//         }
//     }
//     return true; // No divisors found, so it's prime
// }
// let userInput = prompt("Enter a number to check if it's prime:");
// let number = parseInt(userInput);

// if (isNaN(number)) {
//     console.log("Please enter a valid number.");
// } else if (isPrime(number)) {
//     console.log(`${number} is a prime number.`);
// } else {
//     console.log(`${number} is not a prime number.`);
// }

// 49.perfect square

// const prompt=require("prompt-sync")();

// let num=prompt("Enter the number:")
// if(Math.sqrt(num)%1==0){
//     console.log("Perfect square")
// }else{
//     console.log("Not perfect square")
// }

