import { NavLink } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { siteConfig } from '../config/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__text reveal is-visible">
        <p className="eyebrow">Atendimento Premium em {siteConfig.city}</p>
        <h1>A arte de vestir bem</h1>
        <p className="hero__lead">{siteConfig.tagline}</p>
        <div className="hero__actions">
          <NavLink to="/servicos" className="btn btn-solid">Conheça nossos serviços</NavLink>
          <WhatsAppButton variant="ghost" message="Olá! Gostaria de falar com a A.M.A.S." />
        </div>
      </div>

      <div className="hero__media reveal is-visible" aria-hidden="true">
        <div className="hero__placeholder">
          <span>Fotografia do ateliê</span>
          <small>Imagem demonstrativa — substituir por foto real</small>
        </div>
      </div>
    </section>
  );
}
