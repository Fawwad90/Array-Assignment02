// Question 1:
// Create an array named fruits thats contains the following string 
// element: "apple", "banana", "mango", "orange".

let fruit =["apple", "banana", "mango", "orange"]

// Question 2:
// declare an array named number that can contain only number elements and initialize it with
// the values 10 , 20 , 30 and 40

const numbers:number[] = [10,20,30,40]

// Questin 3:
// Access the third element of the fruit Array in and assign it to a variable named thirdFruit.

// fruit[2] //Accessing the third element
// let thirdFruit : string = fruit[2] // Assign it to a variable named thirdFruit
// console.log(thirdFruit); // output mango

// Question 4:
// change the second element of the number array to 25

numbers[1] = 25;
console.log(numbers); // you can do this or another way in which we use splice method

//Question 5:
//Add the element "grape" to the end of the fruits array using the method.

fruit.push("grape")// by applying this .push() method we can add an element to the end of an array
console.log(fruit);

//Question 6:
//Remove the last element from the fruits array using the method and assign to 
//a variable named lastFruit.

let lastFruit = fruit.pop()//with the use of .pop()method we remove the last elementfrom an array,also we assign in variable named lastFruit
console.log(fruit);
console.log(`Last Fruit:${lastFruit}`);

//Question 7:
//Remove the first element from the fruits array using the method and assign it to variable name firstFruit.

let firstFruit = fruit.shift() // With the use of .shift ()method we remove the first element from an array, also we assign in variable named firstFruit
console.log(fruit);
console.log("First Fruit:", firstFruit);

//Question 8:
// Add the element "Kiwi to the beginning of the fruit arrays using the method"

fruit.unshift("Kiwi") // using .unshift method() we add element to the beginnig
console.log(fruit);

//Question 9:
// remove two elements from the fruit arrays starting from index 1 using method
// console.log("Before remove element:", fruit);
fruit.splice(1 , 2)//with the use of .splice()method we can removethe element. which start anywhere 
//in array and also remove the selective element
console.log("After remove element:",fruit);

//Question 10:
//Insert the element "pineapple" and "pear" at index 2 of the fruit array using the method.
// console.log("Before adding element:",fruit);
fruit.splice(2,0,"pineapple","pear") //with the use of .splice method you can add element as well
console.log("After adding element:",fruit);

//Question 11:
//create an array named citrusFruit that contains the first two elements of the fruits arrays using the method.
// console.log("Fruit array:",fruit);
let citrusFruit = fruit.splice(0,2)//.splice method copy the array
console.log("citrusFruit:",citrusFruit);

//Question 12:
//Create a new array named lasttwoFruits that contains the last two elements of the fruits array using the method.
// console.log("fruit array:", fruit);
let lasttwoFruits = fruit.splice(-2)
console.log("lasttwoFruits", lasttwoFruits);




 

 


