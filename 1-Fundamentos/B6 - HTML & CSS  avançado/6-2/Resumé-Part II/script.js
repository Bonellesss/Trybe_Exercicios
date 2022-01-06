let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí','Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo','Sergipe', 'Tocantins'];
let stateSelect = document.getElementById('state');
let labels = ['Nome: ', 'E-mail: ', 'CPF: ', 'Endereço: ', 'Cidade: ', 'Estado: ', 'Tipo de Moradia: ', 'Resumo do currículo: ', 'Cargo: ', 'Descrição do Cargo: ', 'Data de Inicio: ']
let nomes = ["name", "email", "cpf", "adress", "city", "state", "type", "abstract", "ocupation", "description", "date"]
let form = document.getElementById('form');

window.onload = function () {
    for (let i = 0;i < 27; i += 1) {
        let option = document.createElement('OPTION');

        option.innerText = states[i];
        option.value = states[i];
        stateSelect.appendChild(option);
    }
}

document.getElementById('submit').addEventListener('click', function (event)  {
    event.preventDefault();
    createResume()
})

function createResume() {
    if (document.getElementsByTagName('main')[0].lastElementChild.id === 'div-resume') {
    document.getElementById('div-resume').outerHTML = '';
    }
    let container = document.createElement('div');

    container.id = 'div-resume';
    document.getElementsByTagName('MAIN')[0].appendChild(container); 
    
    formPrint()
}

function formPrint() {
    let textContainer = document.getElementById('div-resume');
    for (let i = 0; i < nomes.length; i += 1) {
        let text = document.createElement('p');
        let nome = nomes[i]
        text.innerText = labels[i] + document.getElementById('form').nome.value;
        textContainer.appendChild(text)
    }
}