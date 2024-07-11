//Condicionales reducidas
//let descuento = true;
//let valor = 10000;
//let mensaje = descuento == true ? valor*10/1000 : "No hay descuento";
//console.log(mensaje);
//while
//let i=0;
//let mis_parrafos = '';
//while(i<=10){
   // mis_parrafos += '<p>'+i+'<p>';
    //i=i+2;
//document.getElementById("respuesta").innerHTML=mis_parrafos;
//do while
//let num = 95;
//let parrafo= '';
//do{
//    console.log("Valor del do: ",num)
//    num=num+10
//} while(num<=100);
//num =95;
//while(num<=100){
  //  console.log("El valor con while: "+num)
    //num=num+10;
// Función tradicional
//function calcularFactorial(n) {
    //if (n === 0 || n === 1) {
        //return 1;
    // } else {
       // return n * calcularFactorial(n - 1);//recurvidad
    //}
//}
//let resultado= calcularFactorial(5);
// Función flecha (arrow function)
 //const algo = () =>{ return 3+5 };
    //console.log(algo());
// Sin usar nada más
 //const otro = (n1, n2)=> n1 + n2;
// console.log(otro(4, 4));
//Arrays
let fluvers = ["Manzana", "Cereza", "Banana", "Coco", "Peraz"]
    console.log(fluvers);
        let listaFrutas= `<ul>
                            <li>`+fluvers[0]+`</li>
                            <li>`+fluvers[1]+`</li>
                            <li>`+fluvers[2]+`</li>
                        </ul>`;
    fluvers[1]="Mango";
    console.log(fluvers);
    //Agregar datos al final del arreglo
    fluvers.push("Mandarina")
    // last
    fluvers.pop();
    // first
    fluvers.shift();
    //añade uno o más elementos al inicio
    fluvers.unshift("Grape");
    let nuevaLista = "<ul>"
document.getElementById("respuesta").innerHTML = listaFrutas;
    for(let i = 0; i<fluvers.length; i++){
        console.log(fluvers[i]);
        nuevaLista+="<li>"+fluvers[i]+"</li>";
    }
    nuevaLista+="</ul>"
    document.getElementById("respuesta2").innerHTML=nuevaLista;
    // forEach ejecuta una función para cada elemento del array.
let filas ="";
fluvers.forEach(function(elemento) {
    filas += "<tr>";
    filas+="<td>"+elemento+"</td>"
    filas+="</tr>"
    console.log(elemento);
});
document.getElementById("datos").innerHTML=filas;

// map crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
let numeritos = [1, 2, 3, 4];
let dobles = numeritos.map(function(numero) {
  return numero * 2;
});
console.log(dobles);
// para enconcontrarlo
let dato = 'naranja';
let pos = fluvers.indexOf(dato);
console.log(pos)
