// let sub;

// const arr= [1,2,3,4,5,6];
// sub=arr[3];
// sub = arr.length;
// console.log(sub);
// //  arrys of different datatypes
// let multiple;
// let upper;
// let change;
// let add;
// const mixedArr=['abhaya',12,true, 12.45];
// multiple = mixedArr[0];
// upper= `${mixedArr[0].charAt(0).toUpperCase()}${mixedArr[0].slice(1)}`
// console.log(multiple)
// console.log(upper)
// mixedArr[0]='subedi'
// change= mixedArr[0];
// console.log(change)
// mixedArr[mixedArr.length]= 'adersha';
// add= mixedArr;
// console.log(mixedArr)
// // methods in array
// let y;
// const abhayaArr= [1,2,3,4,5,6,7];
// abhayaArr.push(100); // insert element in the last index of array
// abhayaArr.pop();// delete last element of an array
// abhayaArr.unshift(102);// insert a new element in the 0 index of an array
// abhayaArr.shift(); // delete the element of 0 index
// abhayaArr.reverse();// reverse an array
// y= abhayaArr.includes(9);// checks an element in the array, if it is present it returns true and vice versa

// y=abhayaArr.indexOf(3);// gives the index of the element
// y = abhayaArr.slice(2,6);
// console.log(abhayaArr)
// console.log(y);

// challanges one


// const array=[1,2,3,4,5]
// array.reverse();
// array.push(0);
// array.unshift(6);
// console.log(array);

// // challage 2
// let z;
// const arrayone= [1,2,3,4,5];
// const arraytwo= [5,6,7,8,9,10];

// z= arrayone.concat(arraytwo);
// z.splice(5,1)

// console.log(z)


// objects literals
// let x;

// const details= {
//     firstName: 'abhaya',
//     lastName: 'Subedi',
//     age:22,
//     location:{
//         country: 'Nepal',
//         Province: 'one',
//         District: 'Jhapa',
//     },
//     hobbies:['swimming','coding']


// }
// x= details.location.District;
// x=details.hobbies[1]
// console.log(x);


//methods for objects
// let x;
// const obj1= {
//     name: 'abhaya',
//     rollNo: 29
// }
// const obj2= {
//     name: 'adarsha',
//     rollNo: 30
// }
// const obj3= { ...obj2, ...obj1};
// x=obj3;
// console.log(x)

//Destructuring & naming
const firstName= 'abhaya';
const age=22;
const brhther='adarsha';
const person ={
firstName,
brhther,
age
} 
console.log(person.age,person.firstName)

//Destructuring arrays
const numbers=[1,2,3,4,5]
const [fisrt,second,... subedi]=numbers;
console.log(fisrt,second,subedi)
