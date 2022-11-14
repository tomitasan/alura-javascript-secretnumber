const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

// console.log('Numero secreto:', numeroSecreto);

// substitui dinamicamente o menor valor do sorteio
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

// substitui dinamicamente o maior valor do sorteio
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;