ejecutarSumar=()=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    console.log("Valor 1>>>>>"+valor1+"VAlor2>>>>>>>"+valor2);
    let resultado = sumar(valor1,valor2);
    console.log("La suma es de "+resultado)
}

sumar=(valor1,valor2)=>{
    let sumar;
    sumar = valor1+ valor2;
    return sumar;
}

restar=(valor1,valor2)=>{
    let restar;
    restar = valor1 - valor2;
    return restar
}
ejecutarResta=()=>{
    let valor1 = recuperarFloat("txtValor1");
    let valor2 = recuperarFloat("txtValor2");
    let resultado = restar(valor1,valor2);
    console.log("La resta es de "+resultado);
}