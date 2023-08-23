//sum all the array elements by using loop.

let mynum = [1,3,4,6,8];
let sum = 0;
for (var i = 0; i < mynum.length ; i++)
{
    sum += mynum[i];
}

console.log("sum of array elements is : " + sum);
// reverse the array by using a loop.

const array = [1, 2, 3, 4];

console.log(array);

const reversedArray = [];

for(let i = array.length - 1; i >= 0; i--) {
  const valueAtIndex = array[i]
  
  reversedArray.push(valueAtIndex)
}
console.log("reversed array is:");
console.log(reversedArray);

// make a table of given number with all posible loops.
//table with for loop
console.log("table of 4 :");
var print_table = 4;
var limitoftable= 10;

for (var m = 1 ; m<=10 ; m++){

    console.log(`${print_table} * ${m} = ${print_table*m}`);

}

//table with while loop
console.log("table of 6 :");
var p_t = 6;
var l_t = 10;
var h =1
 while(h<11)
 {

    console.log(`${p_t} * ${h} = ${p_t*h}`);
     h++;
 }

 //table with do while loop
 console.log("table of 7 :");
 var p_t = 7;
 var l_t = 10;
 var h =1
  do
  {
 
     console.log(`${p_t} * ${h} = ${p_t*h}`);
      h++;
  }
  while(h<11)

// find the largest number in an array by using a loop.

var array1 = [3, 4, 5, 35, 21, 9];
var largest = 0;

for (i = 0; i < array1.length; i++) {
    if (array1[i] > largest) {
        largest = array1[i];
    }
}
console.log("largest number in array : ");
console.log(largest)


// find the smallest number in array by using a loop.
console.log("smallest number in array : ");
var arr = [5,3,9,5,7];
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   
    }
}

console.log(smallest);















