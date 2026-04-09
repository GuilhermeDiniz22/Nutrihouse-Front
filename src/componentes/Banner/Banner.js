import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <span className="banner__eyebrow">NutriHouse</span>
        <h1 className="banner__title">Cuide da sua saúde com alimentação equilibrada</h1>
        <p className="banner__text">
          Planos personalizados, receitas práticas e dicas para transformar sua rotina sem
          radicalismos.
        </p>

        <div className="banner__actions">
          <button className="banner__cta" type="button">Conhecer planos</button>
          <button className="banner__cta banner__cta--ghost" type="button">Falar com nutricionista</button>
        </div>

        <div className="banner__highlights" aria-label="Destaques da NutriHouse">
          <span className="banner__chip">+2.500 alunos</span>
          <span className="banner__chip">Atendimento online</span>
          <span className="banner__chip">Receitas em 15 min</span>
        </div>
      </div>

      <div className="banner__image-wrap">
        <img className="banner__image" src="/imagens/banner.png" alt="Banner da NutriHouse" />
      </div>
    </section>
  );
}

export default Banner;
