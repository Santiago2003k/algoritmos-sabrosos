function calculadora_compra(){
    const resultado = document.getElementById("resultado");
    let nombre = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    precio=parseInt(precio);
    let cantidad =document.getElementById("cantidad").value;
    cantidad=parseInt(cantidad)
    let boolean = document.getElementById("descuento").value;
    
    if(boolean=="si" || boolean=="Si"){
        let total=precio*cantidad;
        let descuento=total*0.1;
        let total_d=total-descuento;
        resultado.innerHTML="Total a pagar ="+total_d;
    } else {
        let total=precio*cantidad;
        resultado.innerHTML="Total a pagar = "+total;
    }

}