function suma(a) {
    let acumulador =1;
    for (let index = 1; index <= a; index++) {
        acumulador = acumulador * index;
    }

    return acumulador;
}
module.exports=suma