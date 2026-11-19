import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header__bar">
        <NavLink to="/" className="brand-id" onClick={() => setMenuOpen(false)}>
          <span className="brand-id__mark" aria-hidden="true">A</span>
          <span>
            <span className="brand-id__name">{siteConfig.brandName}</span>
            <span className="brand-id__sub eyebrow">Costura Fina Premium</span>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contato" className="btn btn-solid site-header__cta">
          Solicitar orçamento
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegação mobile"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contato" className="btn btn-solid" onClick={() => setMenuOpen(false)}>
          Solicitar orçamento
        </NavLink>
      </nav>
    </header>
  );
}
