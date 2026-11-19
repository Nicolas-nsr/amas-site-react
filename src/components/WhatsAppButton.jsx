import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '../config/site';
import './WhatsAppButton.css';

// Botão de WhatsApp reutilizável. Se o número real ainda não foi
// configurado em src/config/site.js, o botão aparece desabilitado
// em vez de simular um link que não funcionaria de verdade.
export default function WhatsAppButton({
  message,
  className = '',
  variant = 'solid',
  floating = false,
}) {
  const url = buildWhatsAppUrl(message);
  const label = floating ? 'Falar no WhatsApp' : 'Conversar pelo WhatsApp';

  if (!url) {
    return (
      <button
        type="button"
        className={`${floating ? 'wa-float' : `btn btn-${variant}`} ${className}`.trim()}
        disabled
        title="Número de WhatsApp ainda não configurado"
      >
        <MessageCircle size={floating ? 22 : 16} />
        {!floating && <span>{label}</span>}
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${floating ? 'wa-float' : `btn btn-${variant}`} ${className}`.trim()}
      aria-label={label}
    >
      <MessageCircle size={floating ? 22 : 16} />
      {!floating && <span>{label}</span>}
    </a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <div className="wa-float-wrap">
      <WhatsAppButton floating message={siteConfig.whatsapp.defaultMessage} />
    </div>
  );
}
