const Tarefa = require('../models/tarefaModel');

exports.exibirTarefas = (req,res) => {
    const tarefas = Tarefa.obterTarefas();
    res.render('index',{tarefas});
};

exports.adicionarTarefa = (req, res) => {
    const {titulo} = req.body;
    Tarefa.adicionarTarefa(titulo);
    res.redirect('/');
};

exports.removerTarefas = (req,res) => {
    const {id} = req.params;
    Tarefa.removerTarefas(parseInt(id));
    res.redirect('/');
;}
