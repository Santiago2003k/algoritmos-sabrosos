function promedio(){
    const resultado = document.getElementById("resultado");
    let inicio = parseInt(document.getElementById("entrada").value);
    resultado.innerHTML="";
    if (inicio<11 && inicio>0){
        for(let i=1; i<=inicio;i++){
            resultado.innerHTML+="<input type=number class='mx-2 my-2' placeholder='Ingrese número'  id= num"+i+">";
            let num=parseInt(document.getElementById("num "+i));
        }
        resultado.innerHTML+="<button class='btn btn-success text-center w-50' type='submit' onclick='sacarP()'>"+"Promediar"+"</button>";
        function sacarP(){
            for(let i=1;i<=inicio;i++){
                
            }
        }
    }
}