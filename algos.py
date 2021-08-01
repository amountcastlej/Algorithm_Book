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
