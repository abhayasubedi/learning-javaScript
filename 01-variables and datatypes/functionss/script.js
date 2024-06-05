
// // function abhaya(){
// //     console.log("hello abhaya");
        
    
// // }
// // abhaya();


// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(5,3);

// function chelsea(player1, player2){

//     return `the player is ${player1} & another player is ${player2}`;
// }
// const players = chelsea('hazard','azpi');
// console.log(players);

// function registerUser(user='bot'){
//     // if (!user){
//     //     user='abhaya';
//     // }
// return `${user} is registerd`
// }
// console.log(registerUser('subedi'));

// ///rest parameters in functions return an array of elements

//  function array(...numbers){
//     let total=0;
//     for (const num of numbers) {
//         total += num;
//     }
// return total;
//  }
//  console.log(array(1,2,3,4,5))

// //  objects as parameters
//  function loginusers(user){
//     return `the id ${user.id} belongs to ${user.name}`;
//      }
//  const user ={
//     name:'abhaya',
//     id:2
//  }
 
//  console.log(loginusers(user))


//  // random array in the function
//  function getRandom(...arr){
// const randomIndex = Math.floor(Math.random()* arr.length);
// return arr[randomIndex]
//  }
//  console.log(getRandom(1,2,3,4,4,5,6,7,8))


//function decleration in diffrent form
// const add= function(a){
//     return + a;
// }
// console.log(add(2))



// arrow function
const subtact =(a,b) => a-b;
console.log(subtact(5,2))

// returning an object
const object =()=> ({
    nmae:'abhaya'
})
console.log(object)
//  for array
