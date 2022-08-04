function toReal(valor: number){
    let valorConvertido = (parseFloat(valor.toFixed(2)).toLocaleString('pt-BR'))
    let valorFinal = valorConvertido.indexOf(',') === -1 ? valorConvertido.concat(',00') : valorConvertido
    valorFinal = (valorFinal.length - (valorFinal.indexOf(',') + 1)) === 2 ? valorFinal : valorFinal.concat('0')
    return valorFinal }

export default toReal