var txtquant = window.document.querySelector('input#quantidade')
var divresult = window.document.querySelector('div#resultado')

function calcular() {

    var quant = Number(txtquant.value)
    var valorFormatado = quant.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var NOTA200 = 0, NOTA100 = 0, NOTA50 = 0, NOTA20 = 0, NOTA10 = 0, NOTA5 = 0, NOTA2 = 0
    var MOEDA1 = 0, MOEDA50 = 0, MOEDA25 = 0, MOEDA10 = 0, MOEDA5 = 0

    divresult.innerHTML = ``

    if (quant == 0) {
        window.alert(`Insira um valor maior que 0`)
        txtquant.value = ``
        txtquant.focus()
    } else {

        window.document.querySelector('div#total').innerHTML = `<p>O valor selecionado foi ${valorFormatado}</p>`

        while (quant >= 200) {
            quant = quant - 200
            NOTA200++
        }
        while (quant >= 100) {
            quant = quant - 100
            NOTA100++
        }
        while (quant >= 50) {
            quant = quant - 50
            NOTA50++
        }
        while (quant >= 20) {
            quant = quant - 20
            NOTA20++
        }
        while (quant >= 10) {
            quant = quant - 10
            NOTA10++
        }
        while (quant >= 5) {
            quant = quant - 5
            NOTA5++
        }
        while (quant >= 2) {
            quant = quant - 2
            NOTA2++
        }
        while (quant >= 1) {
            quant = quant - 1
            MOEDA1++
        }
        while (quant >= 0.50) {
            quant = quant - 0.50
            MOEDA50++
        }
        while (quant >= 0.25) {
            quant = quant - 0.25
            MOEDA25++
        }
        while (quant >= 0.10) {
            quant = quant - 0.10
            MOEDA10++
        }
        while (quant >= 0.05) {
            quant = quant - 0.05
            MOEDA5++
        }      

        if (NOTA200 != 0) {
            divresult.innerHTML += `<p>${NOTA200} notas de R$ 200,00 💸</p>`
        }
        if (NOTA100 != 0) {
            divresult.innerHTML += `<p>${NOTA100} notas de R$ 100,00 💸</p>`
        }
        if (NOTA50 != 0) {
            divresult.innerHTML += `<p>${NOTA50} notas de R$ 50,00 💸</p>`
        }
        if (NOTA20 != 0) {
            divresult.innerHTML += `<p>${NOTA20} notas de R$ 20,00 💸</p>`
        }
        if (NOTA10 != 0) {
            divresult.innerHTML += `<p>${NOTA10} notas de R$ 10,00 💸</p>`
        }
        if (NOTA5 != 0) {
            divresult.innerHTML += `<p>${NOTA5} notas de R$ 5,00 💸</p>`
        }
        if (NOTA2 != 0) {
            divresult.innerHTML += `<p>${NOTA2} notas de R$ 2,00 💸</p>`
        }
        if (MOEDA1 != 0) {
            divresult.innerHTML += `<p>${MOEDA1} moedas de R$ 1,00 🪙</p>`
        }
        if (MOEDA50 != 0) {
            divresult.innerHTML += `<p>${MOEDA50} moedas de R$ 0,50 🪙</p>`
        }
        if (MOEDA25 != 0) {
            divresult.innerHTML += `<p>${MOEDA25} moedas de R$ 0,25 🪙</p>`
        }
        if (MOEDA10 != 0) {
            divresult.innerHTML += `<p>${MOEDA10} moedas de R$ 0,10 🪙</p>`
        }
        if (MOEDA5 != 0) {
            divresult.innerHTML += `<p>${MOEDA5} moedas de R$ 0,05 🪙</p>`
        }

        var valorFormatado = quant.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        if (quant > 0) {
            divresult.innerHTML += `<p>${valorFormatado} centavos sobraram</p>`
        }
    }

}