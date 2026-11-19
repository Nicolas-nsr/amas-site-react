import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteConfig } from '../config/site';
import './pages.css';

export default function Contato() {
  useEffect(() => {
    document.title = `Contato — ${siteConfig.brandFullName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', `Fale com a ${siteConfig.brandFullName} em ${siteConfig.city}.`);
  }, []);

  const { contact } = siteConfig;

  return (
    <div className="wrap">
      <header className="page-header">
        <p className="eyebrow">Contato</p>
        <h1>Vamos falar sobre sua peça</h1>
        <p>Atendimento com hora marcada, no ateliê, na loja ou a domicílio.</p>
      </header>

      <section>
        <div className="contact-grid">
          <div className="contact-card">
            <span className="eyebrow">Endereço</span>
            <p style={{ marginTop: 8 }}>{siteConfig.city}</p>
            <p className="pending" style={{ marginTop: 4 }}>
              {contact.address || ''}
            </p>
          </div>
          <div className="contact-card">
            <span className="eyebrow">Telefone / WhatsApp</span>
            <p className="pending" style={{ marginTop: 8 }}>
              {contact.phone || ''}
            </p>
            <p className="muted">Atendimento com hora marcada</p>
          </div>
          <div className="contact-card">
            <span className="eyebrow">E-mail</span>
            <p className="pending" style={{ marginTop: 8 }}>
              {contact.email || ''}
            </p>
            <p className="muted">Resposta em até 1 dia útil</p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title="Fale conosco agora" description="Use o WhatsApp para um retorno mais rápido." />
        <WhatsAppButton message="Olá! Gostaria de falar com a A.M.A.S." />
      </section>

      <section>
        <SectionTitle title="Ou envie uma mensagem" />
        <ContactForm />
      </section>
    </div>
  );
}
