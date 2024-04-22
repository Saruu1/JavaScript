// Practice Question
let marks = prompt("Enter your marks (0-100)");
let score;
if (marks >= 80 && marks <= 100){
    score = "A";
}
else if (marks >= 70 && marks <= 89){
    score = "B";
}
else if (marks >= 60 && marks <= 69){
    score = "C";
}
else if (marks >= 50 && marks <= 59){
    score = "D";
}
else if (marks > 100){
    console.log("The marks exceeds the limit")
}
else {
    score = "F";
}
console.log("The grade of the student is",score)

// LOOPS IN JS

// 1. for loop (understood)

// 2. while loop (iteration is done at the end)
   let a = 5;
    while(a >= 2){
        console.log("5 succeeds")
        a--;
    }

// 3. do while loop (it executes atleast one time and then the conditon is checked)
    let b = 6;
    do{
        console.log("6 in front")
        b++;
    } while(b<=10)

// 4. for-of loop (it is used on the characters of a string)
// code to print each character of the string str.

    let str = "mygoodhome";
    for (let i of str) {
        console.log("i= ", i)
    }

// 5. for-in loop (it is used on the key values of an object)

    let student = {
    name : "Mona",
    class : "10th",
    rollNo : 12,
    isPassed : true
};    
for (let j in student) {
    console.log("Key =", j, ", Value =", student[j])
}

// Loop Questions : printing all even numbers from 1 to 100

 for( let i =0; i<=100; i++){
    if(i%2===0){
        console.log("Even number is ", i)
    }
 }

 // Question 2 from Loops

 let gameNo = 34;
 let guess = prompt("Guess the correct number")
 while(guess != gameNo){
    guess = prompt("Sorry! Guess it again")
 }
 console.log("Congrats you guessed it correctly");