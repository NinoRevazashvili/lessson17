
//  დავალება 2
//  1)

 var my_array = [];

for (var i = 1; i < 100; i++) {
      my_array.push(i);
}
 console.log(my_array)


 // 2
 let count = 1;
 while (count < 50) {
     console.log(count);
    count +=1;
 }


 // 3
 let fruits = ["apple", "lemon", "melon", "kiwi", "cherry"];
 fruits.push("grapes");
 console.log(fruits);

 fruits.pop();
 fruits.pop();
 console.log(fruits);

 fruits.shift();
 console.log(fruits);

fruits.unshift("plum");
 console.log(fruits);

 let newfruitsArray = fruits.slice(0, 3);
console.log(newfruitsArray);


// 4
let numbers = [];
for (let i = 1; i < 10000; i++) {
    my_array.push(i*i);
 }
 console.log(my_array)

// 6
let number = [15];
if (number, "რიცხვი არის კენტი") {
     console.log(number, true);
   } else {
       console.log(number, false);
     }

// 7
let array = ["My NAME IS JOHN"];
for (let i = 0; i < array.length; i++) {
  if (array[i].length > 3) {
    console.log(array[i].toLowerCase());
  } 
  else {
    console.log(array[i].toUpperCase());
  }
}

