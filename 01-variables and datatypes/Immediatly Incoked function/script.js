// (function ()
// {
//     const name= 'abhaya';
//     console.log(name);
//     const hello = ()=> (console.log(`hello ${name} `));
//     hello();
// }()) ;


// // remember for immediately invocked syntax
// (function(subedi){
//     console.log(`hello ${subedi}`)
// })("adarsha")


//  1st function challanges
// function getCelcius(feh){
//     const celsius =(feh -32) * 5/9;
//     return celsius
// }
// console.log(getCelcius(52))

// in arrow function
//  const getCelcius = (f) => (f-32)*5/9;
//  console.log(`the temp in celsius is ${ getCelcius(32)}`)

// 2nd challange
// function minmax(array){
//     const min=Math.min(...array)
//     const max= Math.max(...array)
//     return `min number is ${min} and maximum number is ${max}`
// }
// console.log(minmax([1,2,3,14,5]))

//3rd challange
(function (len,wid){
    const area= len* wid
    const output= `the lenght is ${len}, the width is ${wid} and its area is ${area}`
    console.log(output)
})(5,3);