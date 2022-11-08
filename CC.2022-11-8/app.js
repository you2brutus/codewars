// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0
  for(let i = 0; i < marks.length; i++){
    sum += marks[i]
  }
  let average = sum/marks.length
  return Math.floor(average)
}

// Another way to solve this question
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor( marks.reduce((acc,c) => acc + c, 0)/marks.length)
}


// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5