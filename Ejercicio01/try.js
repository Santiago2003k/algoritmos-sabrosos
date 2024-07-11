function calculadora(){
    const resultado_interes = document.getElementById("resultado_interes");
    const resultado_pago = document.getElementById("pago_mensual");
    const resultado = document.getElementById("resultado");
    let valor = document.getElementById("valor_moto").value;
    valor=parseInt(valor);
    let tasa = document.getElementById("tasa").value;
    tasa=parseInt(tasa);
    let cuota = document.getElementById("cuota").value;
    cuota=parseInt(cuota)
    let interes_mes = valor*(tasa/100);
    let pago_mensual=(valor/cuota)+interes_mes;
    let total=pago_mensual*cuota;
    resultado_interes.innerHTML ="Valor interes mensual = "+interes_mes;
    resultado_pago.innerHTML= "Valor a pagar mensual = "+pago_mensual;
    resultado.innerHTML ="Valor total = "+total;
}