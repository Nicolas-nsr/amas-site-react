# A.M.A.S. Costura Fina Premium — Site Institucional

Site institucional em React + Vite para o ateliê A.M.A.S. Costura Fina
Premium, com identidade visual própria (creme, dourado, tinta escura,
Playfair Display + Jost).

## Como executar localmente

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

## Documentação e testes

O projeto é um site estático e não possui uma API de backend. A especificação
OpenAPI documenta as páginas públicas do site; ela não representa endpoints
de dados nem o envio do formulário.

- Swagger UI local: `http://127.0.0.1:4173/api-docs.html`
- Especificação OpenAPI: `http://127.0.0.1:4173/openapi.yaml`
- Testes end-to-end: com o preview rodando em outra janela, execute
  `npx cypress run`.

Os testes verificam a renderização da Home, as quatro páginas internas, o
acesso direto a uma rota SPA e a disponibilidade da especificação OpenAPI.

## Deploy na Cloudflare

O `wrangler.toml` publica `dist` como assets estáticos e usa
`not_found_handling = "single-page-application"` para servir o app shell nas
rotas da SPA. Isso evita depender de uma regra `_redirects` curinga que possa
entrar em loop no deploy pelo Wrangler. Configure o build como `npm run build`
e o deploy como `npx wrangler deploy`.

## Estrutura do projeto

```
src/
  components/   Header, Footer, Hero, SectionTitle, ServiceCard,
                WhatsAppButton, ContactForm (+ CSS de cada um)
  config/       site.js — dados de contato e WhatsApp (placeholders)
  data/         services.js — serviços e diferenciais exibidos no site
  hooks/        useReveal.js — animação de revelação ao rolar
  pages/        Home, Sobre, Servicos, Contato, Privacidade
  index.css     estilos globais e utilitários
  styles/       variables.css — variáveis de identidade visual
```

## Antes de publicar — dados pendentes

Os seguintes dados são **placeholders** e precisam ser preenchidos em
`src/config/site.js` antes de publicar em produção:

- `whatsapp.number` — número real no formato internacional (ex.: `5551999990000`).
  Enquanto estiver vazio, os botões de WhatsApp aparecem desabilitados
  (não simulam um link que não funcionaria).
- `contact.address`, `contact.phone`, `contact.email`, `contact.instagram`
- `social.instagramUrl`

Nenhum dado real do negócio foi inventado nesta versão.

## Funcionalidades implementadas

- Header fixo com menu mobile funcional (abre/fecha, `aria-expanded`).
- Hero com entrada animada e dupla CTA.
- Seções Sobre, Diferenciais e Serviços com animação de revelação ao rolar
  (`IntersectionObserver`), respeitando `prefers-reduced-motion`.
- Botão flutuante de WhatsApp (desabilitado até número real ser configurado).
- 5 rotas com React Router: `/`, `/sobre`, `/servicos`, `/contato`, `/privacidade`.
- Formulário de contato demonstrativo com validação real no cliente,
  mensagens de erro associadas aos campos e estado de envio — deixa claro
  que não há backend nesta versão (nenhum dado é enviado de verdade).
- Navegação SPA baseada em hash para compatibilidade com GitHub Pages.
- Sem preços explícitos e sem carrinho de seleção, por decisão de produto
  já validada no site anterior (orçamento sempre sob avaliação da peça).

## Limitações conhecidas

- Sem backend: o formulário de contato não envia dados de verdade.
- Imagens são placeholders em CSS (nenhuma foto real do ateliê foi usada,
  pois ainda não foi fornecida).
- Dados de contato (telefone, endereço, e-mail, Instagram) ainda não
  preenchidos — ver seção acima.

## Sugestões para a próxima versão

- Conectar o formulário de contato a um serviço real (ex.: e-mail
  transacional ou endpoint próprio).
- Substituir os placeholders de imagem por fotografias reais do ateliê.
- Ampliar os testes end-to-end Cypress para menu mobile e validação do
  formulário.
- Avaliar depoimentos de clientes, se houver e puderem ser usados.

## Checklist de validação manual

- [ ] `npm install` conclui sem erros.
- [ ] `npm run dev` sobe o servidor e a Home carrega.
- [ ] `npx cypress run` passa em todos os testes.
- [ ] `/api-docs.html` e `/openapi.yaml` estão disponíveis no build.
- [ ] Menu mobile abre e fecha corretamente (testar < 760px).
- [ ] Todos os links do header/footer levam às rotas corretas.
- [ ] Acesso direto a `/sobre`, `/servicos`, `/contato`, `/privacidade`
      funciona sem passar pela Home primeiro.
- [ ] Formulário de contato valida campos obrigatórios e mostra erros.
- [ ] Submeter o formulário válido mostra a mensagem de confirmação
      demonstrativa (sem indicar envio real).
- [ ] Botões de WhatsApp aparecem desabilitados enquanto o número não for
      configurado em `src/config/site.js`.
- [ ] Ativar `prefers-reduced-motion` no sistema remove as animações.
- [ ] Nenhum erro no console do navegador.
