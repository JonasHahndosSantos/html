document.getElementById('botaoAdicionar').addEventListener('click', function() {
    const nomeTarefa = document.getElementById('nome-tarefa').value;
    const prioridadeTarefa = document.getElementById('prioridadeTarefa').value;

    if (nomeTarefa === '') {
        alert('Insira um nome a tarefa.');
        return;
    }

    const itemTarefa = document.createElement('li');
    itemTarefa.classList.add(prioridadeTarefa);
    itemTarefa.innerHTML = `
        ${nomeTarefa} - ${prioridadeTarefa.charAt(0).toUpperCase() + prioridadeTarefa.slice(1)}
        <button style="background-color: green;" onclick="completarTarefa(this)">Marcar como Concluída</button>
        <button style="background-color: red;" onclick="excluirTarefa(this)">Excluir</button>
    `;

    document.getElementById('tarefaPendente').appendChild(itemTarefa);
    document.getElementById('nome-tarefa').value = '';
});

function excluirTarefa(button) {
    const itemTarefa = button.parentElement;
    itemTarefa.remove();
}

function completarTarefa(button) {
    const itemTarefa = button.parentElement;
    const tarefaCompleta = document.getElementById('tarefaCompletas');
    const tempoAtual = new Date().toLocaleString();
    
    itemTarefa.innerHTML += ` - Concluída em: ${tempoAtual} `;
    itemTarefa.querySelectorAll('button').forEach(btn => btn.remove());
    itemTarefa.innerHTML += `<button style="background-color: red;" onclick="excluirTarefa(this)">Excluir</button>`;
    tarefaCompleta.appendChild(itemTarefa);
}