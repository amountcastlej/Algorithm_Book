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