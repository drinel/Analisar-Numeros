window.addEventListener("load", addEvent);

function addEvent(){

let num = document.getElementById('numero')
let list = document.getElementById('secnum')
let res = document.getElementById('res')
let add = document.getElementById('add')
let fim = document.getElementById('finalizar')
let limp = document.getElementById('limpar')
let valores = []


 add.addEventListener("click", adicionar);
 fim.addEventListener("click", finalizar);
 limp.addEventListener("click", limpar);



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`

        list.appendChild(item)
        res.innerHTML = '' // esvazia o resultado depois de inserir novo numero

    } else {
        window.alert('Valor ínvalido ou já inserido. ')
    }

    num.value = ''
    num.focus() 

}

function finalizar() {

    if (valores.length == 0) {
        window.alert('Adicione um valor')
    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            //for(let pos = 0; pos < valores.length; pos++)
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            } else
            if (valores[pos] < menor) {
                menor = valores[pos]
            }


        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} elementos</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
   
}

function limpar() {

    valores.length = 0

    list.innerHTML = ''
    res.innerHTML = ''



}

}