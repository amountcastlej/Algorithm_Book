//1. Setting and Swapping
//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName & vice versa.

function settingandSwapping(){
    var myNum = 42,
    myName = "adam",
    tmp;
    tmp = myNum;
    myNum = myName;
    myName = tmp;
    console.log(myNum)
    console.log(myName)
}
settingandSwapping()

//2. Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop

function printMinus52To1066(){
    for (var i = -56; i < 1067; i++){
        console.log(i);
    }
}
printMinus52To1066()

//3. Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log
//string "good morning!" Call it 98 times

// function beCheerful(){
//     for (var i = 1; i < 99; i++){  
//     console.log("good morning!")
//     } 
// }
// console.log(beCheerful());

//4. Multiples of Three - but Not all
//Using FOR, print multiples of 3 from -300 to 0
//skip -3 and -6

function multiplesOfThreeButNotAll(){
    for (var x = -300; x <= 0; x+=3){
        if (i == -3 || i == -6){
            continue;
        }
        console.log(x)
    }
}
multiplesOfThreeButNotAll()


//5. Print integers from 2000 to 5280, using a WHILE.

function printIntegerswWhile(){
    var x = 2000;
    while (x < 5281){
        console.log(x);
        x++;
    }
}
printIntegerswWhile()

//6. You say it's your Birthday
//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."


// function isItMyBirthday(num1, num2){
// let day = 2;
// let month = 8;

// if(num1 == day || num2 == day){
//     if(num1 == month || num2 == month){
//         console.log("How did you do that?")
//     }
// }
// else{
//     console.log("Just another day...");
// }
// }

// isItMyBirthday(4, 1);
// isItMyBirthday(8, 2);

//7. Leap Year
//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. Hoever, if it is divisible by 400 then it is

function leapYear(year) {
    if (year % 4 == 0) { 
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + ' is a leap year');
            } else {
                console.log(year + ' is not a leap year');
            }
        } else {
            console.log(year + ' is a leap year');
        }
    }
}

leapYear(2004);
leapYear(2008);
leapYear(2001);

//8. Print and Count
//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were

function PrintandCount(){
    var num = 0
    for (var i = 512; i < 4096; i++){
        if (i % 5 == 0){
            num ++;
        }
    }
    console.log('Total multiples of five are: ' + num)
    return num
}
console.log(PrintandCount())

//9. Multiples of Six
//Print Multiples of 6 up to 60,000 using a WHILE loop

function MultipleofSix(){
    mult6 = 6;
    while (mult6 < 60,000){
        if (mult6 % 6 == 0) {
        console.log(mult6)
        } 
    mult6 += 1;
    }
    return mult6
}
console.log(MultipleofSix())

//10. Counting the Dojo Way
//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print "Dojo"

function CountingthaDojoWay(){
    for (var i = 1; i < 101; i++){
        console.log(i)
        if (i % 5 == 0){
        console.log("coding")
        }
        if (i % 10 == 0){
        console.log("dojo")
        } else {
            continue;
        }
    }
}
console.log(CountingthaDojoWay())

//11. What Do you Know?
//Your function will be given an input parameter => incoming. Console.log this value

var message = 'incoming!'
function WhatdoUKnow(message){
console.log(message)
}
WhatdoUKnow(message)

//12. Whoa, That Sucker's Huge
//Add odd integers from -300,000 to 300,000, and console.log the final sum

function HugeSucker(){
    var odd = 0
    for (var x = -30000; x < 30001; x++){
        if (x % 2 != 0){
        odd += x
        } else {
        continue
        }
    }
    return odd
}
console.log(HugeSucker())

//13. Countdown by Fours
//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a for loop

function Countdownby4(){
    var num = 2016;
    while (num > 0){
        console.log(num);
        num = num - 4
    }
}
Countdownby4()