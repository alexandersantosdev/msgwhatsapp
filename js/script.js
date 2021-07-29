var dados = {
    pais: '',
    ddd: '',
    numero: ''
}

var contato = ''

const setDados = (valor, name) => {
    if (valor == null || isNaN(valor)) {
        alert("Digite um numero válido")
        document.querySelector(`#${name}`).value = ''
        return
    }

    dados[name] = valor
    const { pais, ddd, numero } = dados
    contato = `${pais}${ddd}${numero}`
}

const navegar = () => {
    if (contato == null || contato == "") {
        alert("Preencha os campos corretamente")
        return
    }
    document.location.href = `https://api.whatsapp.com/send?phone=${contato}`

}