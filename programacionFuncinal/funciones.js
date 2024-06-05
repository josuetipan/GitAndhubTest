 

sumar=(valor1,valor2)=>{
    let sumar;
    sumar = valor1+ valor2;
    return sumar;
}

restar=(valor1,valor2)=>{
    let restar;
    restar = valor1 - valor2;
    return restar;
}
 
ejecutarOperacion=(operar)=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultado;
    resultado = operar(valor1,valor2);
    console.log(resultado);
}





ejecutar=(fn)=>{
    console.log("Estoy ejecutando funciones....");
    fn();
}

imprimir=()=>{
    console.log("Estoy imprimiendo");
}
saludar=()=>{
    alert("Aprendiendo programacion Funcional");
}

testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("Aprendiendo programacion Funcional");
    });
}