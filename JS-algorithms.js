// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

// Examples

// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true


function sleepIn(weekday, vacation) {
  if (weekday === true && vacation === true)
    return true
    else if(weekday === true && vacation != true)
      return false
  else(weekday != true && vacation ===true  )
    return true
  
}




// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

// Examples

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
function monkeyTrouble(aSmile, bSmile){
  if (aSmile === bSmile)
    return true
  else if (aSmile != true && bSmile != true)
    return  true
  else (aSmile === true && bSmile !=true)
      return false   
}



// Warmup-1 -- sumDouble
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Examples

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8


function sumDouble(a, b){
  let sum = a + b
   if (a === b)
     return sum *2
 else (a != b)
 return sum

}


// Warmup-1 -- diff21
// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// Examples

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0