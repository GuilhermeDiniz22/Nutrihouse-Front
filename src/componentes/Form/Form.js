import { useState } from 'react';
import './Form.css';

const Form = ({ opcoesSetor = [], onAdicionarFuncionario }) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [imagem, setImagem] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (!nome.trim() || !cargo.trim() || !setor) {
      return;
    }

    onAdicionarFuncionario({
      nome: nome.trim(),
      cargo: cargo.trim(),
      setor,
      imagem: imagem.trim() || 'https://i.pravatar.cc/200?img=5',
    });

    setNome('');
    setCargo('');
    setSetor('');
    setImagem('');
  };

  return (
    <form className="colaborador-form__grid" onSubmit={aoSalvar}>
      <div className="form-campo">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          required
        />
      </div>

      <div className="form-campo">
        <label htmlFor="cargo">Cargo</label>
        <input
          id="cargo"
          type="text"
          placeholder="Digite o cargo"
          value={cargo}
          onChange={(evento) => setCargo(evento.target.value)}
          required
        />
      </div>

      <div className="form-campo">
        <label htmlFor="setor">Setor</label>
        <select
          id="setor"
          value={setor}
          onChange={(evento) => setSetor(evento.target.value)}
          required
        >
          <option value="" disabled>
            Selecione um setor
          </option>
          {opcoesSetor.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      </div>

      <div className="form-campo form-campo--full">
        <label htmlFor="imagem">Imagem</label>
        <input
          id="imagem"
          type="text"
          placeholder="Digite o endereco da imagem"
          value={imagem}
          onChange={(evento) => setImagem(evento.target.value)}
        />
      </div>

      <div className="form-acoes form-campo--full">
        <button type="submit" className="form-botao">
          Cadastrar funcionario
        </button>
      </div>
    </form>
  );
};

export default Form;
