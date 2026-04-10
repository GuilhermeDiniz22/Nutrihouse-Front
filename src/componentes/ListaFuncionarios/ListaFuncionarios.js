import './ListaFuncionarios.css';

const ListaFuncionarios = ({ funcionarios = [] }) => {
  return (
    <section className="lista-funcionarios" aria-labelledby="titulo-lista-funcionarios">
      <h2 id="titulo-lista-funcionarios">Funcionarios cadastrados</h2>

      {funcionarios.length === 0 ? (
        <p className="lista-funcionarios__vazia">Nenhum funcionario cadastrado ainda.</p>
      ) : (
        <div className="lista-funcionarios__grid">
          {funcionarios.map((funcionario, indice) => (
            <article
              className="funcionario-card"
              key={`${funcionario.nome}-${funcionario.cargo}-${funcionario.setor}-${indice}`}
            >
              <img
                className="funcionario-card__imagem"
                src={funcionario.imagem}
                alt={`Foto de ${funcionario.nome}`}
              />

              <div className="funcionario-card__conteudo">
                <h3>{funcionario.nome}</h3>
                <p>{funcionario.cargo}</p>
                <span>{funcionario.setor}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ListaFuncionarios;
