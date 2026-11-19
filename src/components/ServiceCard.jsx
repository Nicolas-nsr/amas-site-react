import { NavLink } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import './ServiceCard.css';

export default function ServiceCard({ service }) {
  const ref = useReveal();
  return (
    <article ref={ref} className="service-card reveal">
      <div className="service-card__media" aria-hidden="true">
        <span>{service.title}</span>
      </div>
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <NavLink to={`/servicos#${service.id}`} className="service-card__link">
          Saiba mais →
        </NavLink>
      </div>
    </article>
  );
}
