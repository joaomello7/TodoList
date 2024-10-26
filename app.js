//configuração de rotas e inicialização do servidor
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const tarefaController = require('./controllers/tarefaController');

//configuração do motor de template(ejs) e middleware 
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//configurações de rotas
app.get('/', tarefaController.exibirTarefas);
app.get('/adicionar', (req, res) => res.render('adicionarTarefa'));
app.post('/adicionar', tarefaController.adicionarTarefa);
app.get('/remover/:id',tarefaController.removerTarefas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));


