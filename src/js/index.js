const button = document.querySelector(".input-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function adicionarNovaTerefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });
    input.value = ''

    mostrarTarefas()
}
function mostrarTarefas() {
    let novaLI = ''
    minhaListaDeItens.forEach((item, posicao) =>{
        novaLI = novaLI + `
        <li class="task ${item.concluida && 'done'}">
        <img src="./src/img/verificado.png" alt="terefa verificada" onclick ="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="./src/img/lixo.png" alt="terefa para o lixo" onclick ="deletarItem(${posicao})">
        </li>
        `

    })
    listaCompleta.innerHTML = novaLI

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens) )

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 
    mostrarTarefas()
    
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao,1)
    mostrarTarefas()

}
function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTerefa);
