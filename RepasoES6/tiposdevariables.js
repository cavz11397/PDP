/* let vs var vs const*/
/* Explicacion de var
El ambito de var es global */

(function explicarVar(){
    var edad=25;
    if(true){
        var edad=50;
        console.log(edad);
    }
    console.log(edad);
})();


/* Explicacion de let */

(function explicarLet(){
    let cantidad=25;
    if(true){
        let cantidad=50;
        console.log(cantidad);
    }
    console.log(cantidad);
})();


/* Explicacion de const 
el const es inmutable*/

(function explicarConst(){
    const años=25;
    if(true){
        const años=50;
        console.log(años);
    }
    console.log(años);
})();
