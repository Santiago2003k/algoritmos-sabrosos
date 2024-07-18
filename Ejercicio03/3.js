let average=0;
function promedio(){
    const resultado = document.getElementById("resultado");
    let inicio = parseInt(document.getElementById("entrada").value);
    resultado.innerHTML="";
    if (inicio<11 && inicio>0){
        let i=1;
        while(i<=inicio){
            resultado.innerHTML+="<input type=number class='mx-2 my-2' placeholder='Ingrese número'  class= num"+i+">";
            let num =parseInt(document.getElementsByClassName("num"+i).value);
            average=average+num;
            i++;
        }
        resultado.innerHTML+="<button class='btn btn-success text-center w-50' type='submit' onclick='sacarP()'>"+"Promediar"+"</button>";
    }
}
function sacarP(){
   console.log(average);
    }
