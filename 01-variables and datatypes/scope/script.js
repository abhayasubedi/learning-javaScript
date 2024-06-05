
 // Var let you to access the variables in the global scope.
 if (true){
    const a=100;
    var b =120;
    let c =20;
 }
 console.log(b)

 // Nested scope
 function first(){
    const c=100;
    function second(){
        const b=200;
           
    }
    console.log(c+b)
 }
