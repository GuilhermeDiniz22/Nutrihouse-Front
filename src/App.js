import './App.css';
import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import ListaFuncionarios from './componentes/ListaFuncionarios/ListaFuncionarios';

const funcionarios = [
  {
    nome: 'Ana Souza',
    cargo: 'Nutricionista',
    setor: 'Nutricionista',
    imagem: 'https://i.pravatar.cc/200?img=32',
  },
  {
    nome: 'Bruno Lima',
    cargo: 'Analista Financeiro',
    setor: 'Financeiro',
    imagem: 'https://i.pravatar.cc/200?img=14',
  },
  {
    nome: 'Carla Mendes',
    cargo: 'Assistente Administrativo',
    setor: 'Administrativo',
    imagem: 'https://i.pravatar.cc/200?img=47',
  },
];

function App() {
  const [funcionariosLista, setFuncionariosLista] = useState(funcionarios);

  const adicionarFuncionario = (novoFuncionario) => {
    setFuncionariosLista((listaAtual) => [...listaAtual, novoFuncionario]);
  };

  return (
    <div className="App">
      <div className="app-shell">
        <Banner />

        <section className="colaborador-form" aria-labelledby="titulo-colaborador">
          <h2 id="titulo-colaborador">Preencha os dados do colaborador</h2>
          <p className="colaborador-form__intro">
            Informe os dados para cadastrar o colaborador na plataforma.
          </p>

          <Form
            onAdicionarFuncionario={adicionarFuncionario}
            opcoesSetor={['Nutricionista', 'Atendimento', 'Financeiro', 'Administrativo', 'TI', 'Gerencia']}
          />
        </section>

        <ListaFuncionarios funcionarios={funcionariosLista} />
      </div>
    </div>
  );
}

export default App;
