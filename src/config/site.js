// Configuração central do site A.M.A.S.
// IMPORTANTE: os valores abaixo são placeholders. Substitua pelos dados
// reais do ateliê antes de publicar o site em produção.

export const siteConfig = {
  brandName: 'A.M.A.S.',
  brandFullName: 'A.M.A.S. Costura Fina Premium',
  tagline: 'Detalhes que valorizam sua imagem. Ajustes que preservam o padrão de fábrica.',
  city: 'Porto Alegre, RS',

  // Defina o número no formato internacional, somente dígitos (ex: 5551999990000).
  // Enquanto o número real não for informado, os botões de WhatsApp ficam
  // desabilitados visualmente (ver componente WhatsAppButton).
  whatsapp: {
    number: '555191241212', // ex.: '5551999990000'
    defaultMessage: 'Olá! Gostaria de saber mais sobre os serviços da A.M.A.S.',
  },

  contact: {
    address: 'Bairro São Geraldo — Porto Alegre, RS', // ex.: 'Rua Exemplo, 123 — Porto Alegre, RS'
    phone: '(51) 99124-1212', // ex.: '(51) 99999-0000'
    email: 'contato@amas.com.br', // ex.: 'contato@amas.com.br'
    instagram: '@amas.costurafina', // ex.: '@amas.costurafina'
  },

  social: {
    instagramUrl: 'https://www.instagram.com/amas.costurafina',
  },
};

export function buildWhatsAppUrl(message) {
  const { number, defaultMessage } = siteConfig.whatsapp;
  if (!number) return null;
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}
