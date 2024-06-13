// const age=17;
// if (age<=18){
//     console.log(`you cannot vote`);
// }
// else (console.log(`you can vote`))
// ag=22;
// // similar code using terniary operator
// // write first conidtion with out small bracket and that use ? (terniary oprator) print your statement, use : and print second condition
// ag<=18 ? console.log(`you cannot vote`) : console.log(`you can vote`)
// // assigning a conditional value to a variable
 age =17;
 const age1 = age>=18 ? `you can vote` : `you cannot vote`; 
 console.log(age1)
 // multiple statement

 let author=1 ;
//  let redirect;
//  if (author) {
//     alert("wlcome to dashboard")
//     console.log(redirect="/dashboard")
//  }
//  else{
//     alert("access denied");
//     console.log(redirect="/login")
//  }
 // doing this uding teranry operator

 const redirect = author ? (alert("welcome to dashboard"),('/dashboard')):(alert(`access denied`),('/login'))
 console.log(redirect)
  // if there is no else 
  author ? console.log("welcome"): null;