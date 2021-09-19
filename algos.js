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

// THE BASIC "13"

// # 1 Print 1 - 255

// Print all the integers from 1 to 255

function print1to255(){
    for (var i = 1; i <= 255; i++){
        console.log(i);
    }
}
print1to255();

// # 2 Print ints & Sum 0 - 255

// Print integers from 0 to 255 & w/ each integer print the sum so far

function printIntsAndSumZeroToTwoFiftyFive() {
    var sum = 0
    for (var i = 0; i <= 255; i++){
        sum += i;
        console.log("New Number: " + i + "Sum: " + sum);
    }
}
console.log(printIntsAndSumZeroToTwoFiftyFive())

// # 3 Print Max of Array
//Given an array, find and print its largest element.

function printMaxOfArray(arr){
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(printMaxOfArray([1, 3, 5, 8]));

// # 4 Return Odds Array 1-255
//Create an array with all the odd integers between 1 and 255 (inclusive).

function returnOddsArray1To255(){
    var odd = [];
    for (var i = 0; i <= 255; i++){
        if (i % 2 == 1){
            odd.push(i);
        }
    }
    return larger
}
console.log(returnOddsArray1To255())

// # 5 Return Array Count Greater than Y
//Given an array and a value Y, count and print the number of array values greater than Y.

function returnArrayCountGreaterThanY(arr, y){
    var larger = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            larger += 1
        }
    }
    return larger;
}

console.log(returnArrayCountGreaterThanY([2, 4, 3, 8, 1], 3))