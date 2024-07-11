function promedio(){
    const resultado = document.getElementById("resultado");
    let inicio = parseInt(document.getElementById("entrada").value);
    let acum=0;
    if (inicio<11 && inicio>0){
        for(let i=1; i<=inicio;i++){
            resultado.innerHTML="";
            resultado.innerHTML+="<input type=number id="+i+">";
            let num=parseInt(document.getElementById("num1"));
            acum=acum+num;
        }
    }
}