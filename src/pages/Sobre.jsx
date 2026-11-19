import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import { differentials } from '../data/services';
import { siteConfig } from '../config/site';
import './pages.css';

export default function Sobre() {
  useEffect(() => {
    document.title = `Sobre — ${siteConfig.brandFullName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', `A história, a missão e os valores da ${siteConfig.brandFullName}.`);
  }, []);

  return (
    <div className="wrap">
      <header className="page-header">
        <p className="eyebrow">Sobre</p>
        <h1>Tradição e precisão em cada ajuste.</h1>
        <p>
          A A.M.A.S. Costura Fina nasceu do cuidado com os detalhes que
          outros serviços de costura costumam ignorar. Atendemos lojas de
          grife e clientes que valorizam discrição, exclusividade e um
          acabamento que preserva o padrão de fábrica da peça original.
        </p>
      </header>

      <section>
        <SectionTitle title="Missão" />
        <p>
          Entregar ajustes e transformações que respeitam a identidade de
          cada peça — do tecido ao corte — devolvendo ao cliente uma roupa
          que veste como se tivesse sido feita sob medida desde o início.
        </p>
      </section>

      <section>
        <SectionTitle title="Valores" />
        <ul className="about-list">
          <li><span className="mk">—</span> Discrição no atendimento a clientes e lojas parceiras</li>
          <li><span className="mk">—</span> Transparência no orçamento, sempre após avaliação da peça</li>
          <li><span className="mk">—</span> Respeito pela técnica e pela origem de cada material</li>
        </ul>
      </section>

      <section>
        <SectionTitle title="Diferenciais" />
        <div className="grid-3">
          {differentials.map((d) => (
            <div key={d.id} className="diff-card">
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
