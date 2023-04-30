let input = Number(prompt("enter your number"));

var myArray = [];

for (var i = 1; i < input; i++) {
  if (input % i == 0) {
    var number = i;
    myArray.push(number);
  }
}

var sum = 0;
for (var i = 0; i < myArray.length; i++) {
  sum += myArray[i];
  myArray.toString();
}

if (sum > input) {
  console.log(`The abundant factor are : ${myArray}
and the sum is : ${sum} `);
} else if (sum < input) {
  console.log(`The Deficient factor are : ${myArray}
and the sum is : ${sum} `);
} else if ((sum = input)) {
  console.log(`The Perfect factor are : ${myArray}
and the sum is : ${sum} `);
}
