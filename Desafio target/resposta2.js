let fibonacci = 0; let numero = 0, contadorUsuario = 10, resultado = 0, numeroAnt = 1;

while(contadorUsuario != fibonacci){
    resultado = numero + numeroAnt;
    numeroAnt = fibonacci - numero;
    fibonacci = resultado + numeroAnt;
    if(fibonacci > contadorUsuario){
        break;
    }
    console.log(fibonacci);
}

if(fibonacci == contadorUsuario){
    console.log(`${contadorUsuario} faz parte da fibonacci`);
}else{
    console.log(`${contadorUsuario} não faz parte da fibonacci`)
}
