#1. Setting and Swapping
#Set myNumber to 42. Set myName to your name.
#Now swap myNumber into myName & vice versa.
def settingandSwapping():
    myNum = 42
    myName = "adam"
    temp = myNum
    myNum = myName
    myName = temp
    print(myName)
    print(myNum)
settingandSwapping()

#2. Print -52 to 1066
#Print integers from -52 to 1066 using a FOR loop

def printMinus52To1066():
    for i in range(-56, 1067, 1):
        print(i)
printMinus52To1066()

#3. Don’t Worry, Be Happy
#Create beCheerful(). Within it, console.log
#string "good morning!" Call it 98 times

def beCheerful():
    for i in range(99):
        print("good morning!")
beCheerful()

#4. Multiples of Three - but Not all
#Using FOR, print multiples of 3 from -300 to 0
#skip -3 and -6

def multiplesOfThreeButNotAll():
    for x in range(-300, -9, 3):
        if x == -3 or x == -6:
            continue
        print(x)
multiplesOfThreeButNotAll()

#5. Print integers from 2000 to 5280, using a WHILE.

def printIntswWhile():
    x = 2000
    while x < 5281:
        print(x)
        x += 1
printIntswWhile()

#6. You say it's your Birthday
#If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."

def isItMyBirthday(num1, num2):
    day = 2
    month = 8

    if num1 == day or num2 == day:
        if num1 == month or num2 == month:
	        print("How did you know?")
    
    else:
	    print("Just another day")

isItMyBirthday(4,1)
isItMyBirthday(8,2)

#7. Leap Year
#Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. Hoever, if it is divisible by 400 then it is

def isLeapYear(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

print(isLeapYear(2012))

#8. Print and Count
#Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were

def PrintandCount(num):
    temp = 0
    for x in range(num, 4097):
        if x % 5 == 0:
            temp += 1
        else:
            continue
    return temp
print(PrintandCount(512))

#9. Multiples of Six
#Print Multiples of 6 up to 60,000 using a WHILE loop

def multipleofSix():
    i = 0
    while i < 60000:
        i += 1
        if i % 6 == 0:
            print(i)
        else:
            continue
    return i

print(multipleofSix())

#10. Counting the Dojo Way
#Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print "Dojo"

def CountthaDojoWay():
    for i in range(1, 11):
        print(i)
        if i % 5 == 0:
            print("Coding")
        if i % 10 == 0:
            print("Dojo")
    
CountthaDojoWay()

#11. What Do you Know?
#Your function will be given an input parameter => incoming. Console.log this value

message = 'incoming!'
def WhatdoUKnow(message):
    print(message)
WhatdoUKnow(message)

#12. Whoa, That Sucker's Huge
#Add odd integers from -300,000 to 300,000, and console.log the final sum

def HugeSucker():
    odd = 0
    for x in range(-30000, 30000, 1):
        if x % 2 != 0:
            odd += x
        else:
            continue
    return odd
print(HugeSucker())

#13. Countdown by Fours
#Log positive numbers starting at 2016, counting down by fours (exclude 0), without a for loop.

def Countdownby4():
    num = 2016
    while (num > 0):
        print(num)
        num = num - 4
Countdownby4()

def remove_duplicates(arr):
    new_arr = []
    for i in arr:
        if i not in new_arr:
            new_arr.append(i)
    return new_arr
print(remove_duplicates([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]))