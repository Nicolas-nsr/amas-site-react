import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { services, differentials } from '../data/services';
import { useReveal } from '../hooks/useReveal';
import { siteConfig } from '../config/site';
import './pages.css';

function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
}

function DiffCard({ title, description }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="diff-card reveal">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  useDocumentTitle(
    `${siteConfig.brandFullName} — Início`,
    `${siteConfig.brandFullName}: ajustes, reformas e alfaiataria de alto padrão em ${siteConfig.city}.`
  );
  const aboutRef = useReveal();

  return (
    <>
      <Hero />

      <section className="wrap">
        <p className="eyebrow">Conteúdo demonstrativo</p>
        <div className="credibility-row">
          <span>Atendimento particular</span>
          <span>Cuidado artesanal</span>
          <span>Acabamento de alta costura</span>
        </div>
      </section>

      <section className="wrap">
        <div ref={aboutRef} className="about-grid reveal">
          <div>
            <SectionTitle eyebrow="Sobre" title="Tradição que preserva o caimento." />
            <p>
              A.M.A.S. Costura Fina é especializada em ajustes e
              personalizações de peças de alto valor, com acabamento de
              excelência e atendimento sob medida. Cada peça é avaliada com
              o cuidado técnico de quem entende o valor do tecido, do corte
              e da história por trás dela.
            </p>
            <ul className="about-list">
              <li><span className="mk">—</span> Especialistas em couro e peles nobres</li>
              <li><span className="mk">—</span> Ajustes de alta precisão e alfaiataria</li>
              <li><span className="mk">—</span> Confecção e transformação sob medida</li>
            </ul>
            <NavLink to="/sobre" className="btn btn-ghost" style={{ marginTop: 20 }}>
              Conheça nossa história
            </NavLink>
          </div>
          <div className="about-media" aria-hidden="true">
            Fotografia do ateliê (placeholder)
          </div>
        </div>
      </section>

      <section className="wrap">
        <SectionTitle eyebrow="Diferenciais" title="A excelência em cada detalhe." />
        <div className="grid-3">
          {differentials.map((d) => (
            <DiffCard key={d.id} title={d.title} description={d.description} />
          ))}
        </div>
      </section>

      <section className="wrap">
        <SectionTitle
          eyebrow="Serviços"
          title="Cada peça carrega uma história."
          description="Conheça nossas áreas de especialidade."
        />
        <div className="grid-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="final-cta">
          <h2>Sua peça merece atenção especial.</h2>
          <p>
            Fale com o ateliê hoje mesmo e descubra como preservar e
            valorizar as peças que você mais gosta de vestir.
          </p>
          <div className="btn-row">
            <NavLink to="/contato" className="btn btn-solid">Solicitar orçamento</NavLink>
            <WhatsAppButton variant="ghost" message="Olá! Gostaria de solicitar um orçamento com a A.M.A.S." />
          </div>
        </div>
      </section>
    </>
  );
}
