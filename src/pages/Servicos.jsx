import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/services';
import { siteConfig } from '../config/site';
import './pages.css';

export default function Servicos() {
  useEffect(() => {
    document.title = `Serviços — ${siteConfig.brandFullName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Catálogo completo de serviços de ajuste, reforma e alfaiataria da A.M.A.S.');
  }, []);

  return (
    <div className="wrap">
      <header className="page-header">
        <p className="eyebrow">Serviços</p>
        <h1>Catálogo completo de especialidades</h1>
        <p>
          Avaliamos cada peça individualmente antes de confirmar prazo e
          valor. Entre em contato para agendar uma prova com hora marcada.
        </p>
      </header>

      <section>
        <div className="grid-3">
          {services.map((s) => (
            <div key={s.id} id={s.id}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="final-cta">
          <h2>Não encontrou o que procura?</h2>
          <p>Fale com o ateliê e descreva sua peça — avaliamos e orçamos sob medida.</p>
          <div className="btn-row">
            <WhatsAppButton message="Olá! Gostaria de saber mais sobre um serviço específico." />
          </div>
        </div>
      </section>
    </div>
  );
}
