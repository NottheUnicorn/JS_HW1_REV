// HW Day 5 JS Problems from CodeWars

// Multiply - Big challenge on this one

function multiply(a, b){
    let num = a 
    let num2 = b
    
    console.log(num*num2)
    return(num*num2)
}

//Alan Partridge II - Apple Turnover
function apple(x){
    if (x**2 > 1000){
    console.log ("It's hotter than the sun!!")
    } else
    console.log ("Help yourself to a honeycomb Yorkie for the glovebox.")
}

//Switch it Up!
function switchItUp(number){
    if(number == 0){
    console.log("Zero")
} 
    if(number == 1){
    console.log ("One")
} 
    if(number == 2){
    console.log("Two")
} 
    if(number == 3){
    console.log("Three") 
} 
    if(number == 4){
    console.log("Four")
} 
    if(number == 5){
    console.log("Five")
} 
    if(number == 6){
    console.log("Six")
} 
    if(number == 7){
    console.log("Seven")
} 
    if(number == 8){
    console.log("Eight")
} 
    if(number == 9){
    console.log("Nine")
}}


//Training JS #5: Basic data types--Object
function animal(color, name, legs){
    let result = ''
    console.log(`This ${color} ${name} has ${legs} legs.`)
    console.log(result)
}

// actually needed help on this one, Printing Array elements with Comma delimiters
function printArray(array){
    console.log (array.join(','))
    let i = "I am Joe, I am a horrible programmer"
}

multiply(2,3)
apple(1100)
switchItUp(7)
animal("red", "bob", "2")
array("I, am, Joe, I, am a horrible programmer")


document.write(multiply(2,3)); 
document.write(apple(1100));
document.write(switchItUp(7));
document.write(animal("red", "bob", 2));
document.write(array) 

x = "Check the console"
document.write(x)