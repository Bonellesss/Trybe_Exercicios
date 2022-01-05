let states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí','Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo','Sergipe', 'Tocantins'];
let stateSelect = document.getElementById('state');

window.onload = function () {
    for (let i = 0;i < 27; i += 1) {
        let option = document.createElement('OPTION');

        option.innerText = states[i];
        option.value = states[i]
        stateSelect.appendChild(option)
    }
}
