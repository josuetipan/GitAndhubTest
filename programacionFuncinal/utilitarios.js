recuperarTexto=(idComponete)=>{
    let componete=document.getElementById(idComponete);
    let valorComponente=componete.value;
    return valorComponente;
}

recuperarFloat=(idComponete)=>{
    let float = recuperarTexto(idComponete);
    let valorFloat = parseFloat(float);
    return valorFloat;
}

recuperarEntero=(idComponete)=>{
    let entero = recuperarTexto(idComponete);
    let valorEntero = parseInt(entero);
    return valorEntero;
}