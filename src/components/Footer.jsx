import { NavLink } from 'react-router-dom';
import { siteConfig } from '../config/site';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { contact, social } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <span className="brand-id__name" style={{ fontSize: '1.05rem' }}>
            {siteConfig.brandFullName}
          </span>
          <p className="footer-desc">
            Ajustes e personalizações de peças de alto valor, com acabamento
            de excelência e atendimento sob medida para clientes e lojas
            premium de {siteConfig.city}.
          </p>
        </div>

        <div>
          <h2>Navegação</h2>
          <ul className="footer-list">
            <li><NavLink to="/">Início</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/servicos">Serviços</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </div>

        <div>
          <h2>Contato</h2>
          <ul className="footer-list">
            <li>{siteConfig.city}</li>
            <li className={contact.phone ? undefined : 'pending-text'}>
              {contact.phone || 'Telefone em atualização'}
            </li>
            <li className={contact.email ? undefined : 'pending-text'}>
              {contact.email || 'E-mail em atualização'}
            </li>
            <li>
              {social.instagramUrl ? (
                <a href={social.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {contact.instagram || 'Instagram'}
                </a>
              ) : (
                <span className="pending-text">Instagram em breve</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {year} {siteConfig.brandFullName}. Todos os direitos reservados.</span>
        <NavLink to="/privacidade">Política de Privacidade</NavLink>
      </div>
    </footer>
  );
}
