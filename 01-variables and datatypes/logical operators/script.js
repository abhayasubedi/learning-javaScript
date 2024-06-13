// ||= assign the right side value only if the left is a falsy value

let a= null;
a ||= 20
console.log(a);

// &&= assign the right side value only if the left is a truthy value
let b = true;
if (b){
    b=20
}
console.log(b) // result is 20
b &&= 30
console.log(b)// result is 30