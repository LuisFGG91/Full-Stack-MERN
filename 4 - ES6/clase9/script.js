
/**
 * 
    * 
    function actuallyPrintingNames() {
        let index = 0;
        let names = beatles;
        for (index; index < names.length; index++) {
            name = names[index];
            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
    console.log(beatles)
    var beatles = ['Paul', 'George', 'John', 'Ringo'];

 var magicalUnicorns; // la declaración se eleva a la parte superior del alcance por sí sola
console.log(magicalUnicorns); // Lo registramos como indefinido
magicalUnicorns = "awesome"; // la tarea se queda exactamente donde estaba
console.log(magicalUnicorns); // Lo registramos como indefinido

    */




var foo = "bar";

function magic() {
    console.log(foo);
    foo = "hello world";
    console.log(foo);
    var foo;
    console.log(foo);
}
magic();
console.log(foo);

