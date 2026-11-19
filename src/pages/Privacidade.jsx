import { useEffect } from 'react';
import { siteConfig } from '../config/site';
import './pages.css';

export default function Privacidade() {
  useEffect(() => {
    document.title = `Política de Privacidade — ${siteConfig.brandFullName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Política de privacidade e tratamento de dados da A.M.A.S.');
  }, []);

  return (
    <div className="wrap legal-content">
      <header className="page-header">
        <p className="eyebrow">Privacidade</p>
        <h1>Política de Privacidade</h1>
        <p>
          Esta página é um modelo demonstrativo e deve ser revisada por um
          profissional antes da publicação em produção.
        </p>
      </header>

      <section>
        <h2>Dados coletados</h2>
        <p>
          O formulário de contato deste site é demonstrativo e não envia
          dados para nenhum servidor nesta versão. Quando conectado a um
          serviço real de envio, apenas os dados informados voluntariamente
          pelo visitante (nome, e-mail, telefone opcional, tipo de serviço
          e mensagem) serão utilizados para responder à solicitação.
        </p>
      </section>

      <section>
        <h2>Uso das informações</h2>
        <p>
          As informações enviadas seriam usadas exclusivamente para contato
          relacionado ao orçamento ou serviço solicitado, não sendo
          compartilhadas com terceiros para fins de marketing.
        </p>
      </section>

      <section>
        <h2>Contato</h2>
        <p>
          Dúvidas sobre esta política podem ser enviadas pelos canais de
          contato informados na página{' '}
          <a href="/contato">Contato</a>.
        </p>
      </section>
    </div>
  );
}
