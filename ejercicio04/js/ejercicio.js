let producto = ["Diamante", "Ruby", "Esmeralda"]
let stock = [2, 3, 4];
function guardar(){
        let name=(document.getElementById("piedra").value);
        let number=(document.getElementById("cantidad").value);
        let i=0;
        while(i<producto.length){
            if(name!=producto[i]){
                i++;
            } else if(name==producto[i]){
                document.getElementById("guardar").innerHTML="<p>"+"Ya existe"+"</p>";
                i++;
            }
        }
        if(i==3){
            producto.push(name);
            stock.push(number);
        }
        for(let i =0; i<producto.length;i++){
            console.log(producto[i])
            console.log(stock[i])
        }
}
function modificar(){
    let joya =document.getElementById("jeloury").value;
    let newJ = document.getElementById("jeloury_new").value;
    let encontrar = producto.indexOf(joya);
    producto[encontrar]=newJ;
    console.log(encontrar);
}
function inventario(){
    let joya =document.getElementById("product").value;
    let newJ = document.getElementById("num_jeloury").value;
    let encontrar = producto.indexOf(joya);
    stock[encontrar]=newJ;
    console.log(encontrar);
}
let lista= '<ul>'
for(let i=0; i<producto.length;i++){
    lista+="<li>"+producto[i]+"</li>";
}
lista+='</ul>'
let table= document.getElementById("datos").innerHTML=lista;
let lista2='<ul>';
for(let j=0; j<stock.length;j++){
    lista2+="<li>"+stock[j]+"</li>";
}
 lista2+='</ul>';
let table2=document.getElementById("amount").innerHTML+=lista2;
