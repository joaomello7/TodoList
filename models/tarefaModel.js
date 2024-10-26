let tarefas = [];
function adicionarTarefa(titulo){
    tarefas.push({id:Date.now(),titulo});
}

function obterTarefas(){
    return tarefas;
}

function removerTarefas(id){
    tarefas = tarefas.filter(tarefas => tarefas.id !== id);
}

module.exports = {adicionarTarefa,obterTarefas,removerTarefas};
