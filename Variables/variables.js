let puntaje = 0;
const numeroVida = 5;

ganarPuntos=()=>{
    puntaje = puntaje+10;
    console.log(puntaje);
}

perderVidas =()=>{
    numeroVida=numeroVida-1;
}