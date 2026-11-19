import { useState } from 'react';
import { services } from '../data/services';
import './ContactForm.css';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  message: '',
  consent: false,
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Informe seu nome.';
  if (!values.email.trim()) {
    errors.email = 'Informe seu e-mail.';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Informe um e-mail válido.';
  }
  if (!values.serviceType) errors.serviceType = 'Selecione o tipo de serviço.';
  if (!values.message.trim()) errors.message = 'Descreva brevemente sua necessidade.';
  if (!values.consent) errors.consent = 'É necessário aceitar para enviar.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | submitted

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    // Formulário demonstrativo: não há backend nesta versão.
    // Nenhum dado é enviado de verdade — apenas simulamos o estado de UI.
    window.setTimeout(() => setStatus('submitted'), 600);
  }

  if (status === 'submitted') {
    return (
      <div className="contact-form__success" role="status">
        <h3>Formulário recebido (demonstração)</h3>
        <p>
          Este é um formulário demonstrativo: nenhuma mensagem foi enviada de
          verdade, pois esta versão do site não possui backend. Para
          ativá-lo, conecte-o a um serviço de e-mail/formulário real.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="demo-badge">Formulário demonstrativo — sem envio real</p>

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="phone">Telefone (opcional)</label>
        <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
      </div>

      <div className="field">
        <label htmlFor="serviceType">Tipo de serviço</label>
        <select
          id="serviceType"
          name="serviceType"
          value={values.serviceType}
          onChange={handleChange}
          aria-invalid={Boolean(errors.serviceType)}
          aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
        >
          <option value="">Selecione…</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
        {errors.serviceType && (
          <span id="serviceType-error" className="field-error">{errors.serviceType}</span>
        )}
      </div>

      <div className="field">
        <label htmlFor="message">Descrição da necessidade</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
      </div>

      <div className="field field--checkbox">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={handleChange}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        <label htmlFor="consent">
          Estou ciente de que meus dados serão usados apenas para esta
          solicitação de contato.
        </label>
        {errors.consent && <span id="consent-error" className="field-error">{errors.consent}</span>}
      </div>

      <button type="submit" className="btn btn-solid" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando…' : 'Enviar mensagem'}
      </button>
    </form>
  );
}
