function dobrinho(n) {
    dobro = n*2;
    return dobro;
    
}
function calcDelta(a,b,c){
    const resultado = b ** 2 -(4 * a * c)
    if( resultado < 0 ){
        return"impossivel"


    }else if ( resultado > 0 ){
        return " 2 raizes"
    
    } else (resultado == 0 )
        return "1 raiz"
    
}