//ARRAYS

let verduras = 
{
    v1 : "Tomate 🍅",
    v2 : "Lechuga 🥬",
    v3 : "Zanahoria 🥕"
};

//Escoger un objeto
document.write ("Verdura: "+verduras.v3+"<br>")

//Recorrer objetos
for(let clave in verduras){
    document.write("Verdura -->"+verduras[clave]+"<br>");
}

let frutas = ["Mango 🥭", "Fresas 🍓", "Banano 🍌"]
//Escoger un objeto
document.write ("Fruta: "+frutas[2]+"<br>")

for (let x = 0; x < frutas.length; x++)
{
    document.write("fruta->"+frutas[x]+"<br>");
}

//Sancocho de datos

let sancocho =
[
    "texto",
    true,
    9890,
    function ()
    {
        return "Hola 🐸"
    },
    ["Sancocho 1", 666, false],
    {
        s1: "Sancocho 2",
        s2: 777
    }
];
document.write("<br>")

//Mostrar datos
document.write ("dato: "+sancocho[0] +"<br>");
document.write ("dato: "+sancocho[1] +"<br>");
document.write ("dato: "+sancocho[2] +"<br>");
document.write ("dato: "+sancocho[3]() +"<br>");
document.write ("dato: "+sancocho[4][0] +"<br>");
document.write ("dato: "+sancocho[4][1] +"<br>");
document.write ("dato: "+sancocho[4][2] +"<br>");
document.write ("dato: "+sancocho[5].s1+"<br>");
document.write ("dato: "+sancocho[5].s2 +"<br>");
document.write("<br>")

let sancocho2 = {
    s1: "texto1",
    s2: 9898,
    s3: false,
    s4: function ()
    {
        return "hola 🐸";
    },
    s5: ["Sancocho1", "9090", true],
    s6: {
        ss1: "sancocho 2",
        ss2: 767676,
    }
};

//Mostrar datos

document.write ("dato: "+sancocho2.s1 +"<br>");
document.write ("dato: "+sancocho2.s2 +"<br>");
document.write ("dato: "+sancocho2.s3 +"<br>");
document.write ("dato: "+sancocho2.s4() +"<br>");
document.write ("dato: "+sancocho2.s5[0] +"<br>");
document.write ("dato: "+sancocho2.s5[1] +"<br>");
document.write ("dato: "+sancocho2.s5[2] +"<br>");
document.write ("dato: "+sancocho2.s6.ss1 +"<br>");
document.write ("dato: "+sancocho2.s6.ss2+"<br>");
document.write("<br>")

//métodos de los arrays

let frutas2 = ["Sandia", "Mango", "Banano", "Uva"];
document.write("frutas:"+frutas2+"<br>")
document.write ("Total frutas: "+frutas2.length+"<br>");
frutas2.push("Manzana"); //método push (Agrega un dato)
document.write("frutas:"+frutas2+"<br>")
document.write ("Total frutas: "+frutas2.length+"<br>");
frutas2.pop(); //método pop (Elimina el último dato)
document.write("frutas:"+frutas2+"<br>")
document.write ("Total frutas: "+frutas2.length+"<br>");
frutas2.shift(); //método shift (Elimina el primer dato)
document.write("frutas:"+frutas2+"<br>")
document.write ("Total frutas: "+frutas2.length+"<br>");
frutas2.unshift("Kiwi"); //método unshift (Agrega un dato en primera posición)
document.write("frutas:"+frutas2+"<br>")
document.write ("Total frutas: "+frutas2.length+"<br>");
let frutasSeleccionadas = frutas2.slice(2,4); //método slice (Selecciona datos específicos)
document.write ("Total frutas: "+frutasSeleccionadas+"<br>");
let frutaEliminada = frutas2.splice(2,1); //método splice (Elimina un dato específico)
document.write ("Total frutas: "+frutas2+"<br>");


document.write("<br>")
frutas2.forEach(function(fruta, pos){
    document.write(fruta+" ------ "+pos+"<br>");
}); //Ciclo integrado


