function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        // console.log('Valor inválido');
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return ;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        // console.log(`Valor inválido: o número precisar estar entre ${menorValor} e ${maiorValor}`);
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return ;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número é secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número é secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
