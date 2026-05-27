# Portfólio - David Pessoa

Este repositório contém o código-fonte do meu portfólio pessoal, publicado em [davidpessoa.com.br](https://davidpessoa.com.br). O projeto apresenta minha trajetória profissional, formação, habilidades técnicas, certificados, projetos desenvolvidos e canais de contato.

## Descrição

O site foi construído como uma aplicação web estática, usando HTML, CSS e JavaScript. A página inicial funciona no formato de one page, com navegação por seções, enquanto os detalhes de cada projeto são carregados em uma rota separada a partir de dados centralizados no arquivo `dados.json`.

O portfólio também possui suporte a internacionalização em português e inglês, componentes HTML reutilizáveis para header e contato, listagem dinâmica de projetos, certificados e habilidades, além de metadados Open Graph para melhorar o compartilhamento em redes sociais.

## Principais Funcionalidades

- Apresentação pessoal com links para LinkedIn, WhatsApp, e-mail e GitHub.
- Seções de currículo, formação, habilidades, projetos, certificados e contato.
- Página individual para cada projeto.
- Conteúdo dinâmico carregado a partir de `dados.json`.
- Suporte a múltiplos idiomas com `i18next`.
- Carrossel de certificados com Swiper.
- Layout responsivo baseado no template Kards.
- Arquivos de currículo em PDF na pasta `CV-file`.

## Ferramentas e Tecnologias Utilizadas

- **HTML5**: usado para estruturar as páginas e seções do portfólio de forma simples e sem necessidade de build.
- **CSS3**: usado para estilização, responsividade e adaptação visual do template base.
- **JavaScript**: usado para carregar componentes, renderizar listas dinâmicas, controlar idioma, menu, scroll suave e página de projetos.
- **jQuery**: mantido por compatibilidade com o template Kards e seus plugins de animação, validação, navegação e manipulação do DOM.
- **i18next**: usado para internacionalização, permitindo alternar o conteúdo entre `pt-BR` e `en`.
- **Swiper**: usado para criar o carrossel responsivo de certificados.
- **Masonry / imagesLoaded**: usados para organizar a grade de projetos depois que as imagens são carregadas.
- **Font Awesome**: usados para exibir ícones de redes sociais, navegação e elementos visuais.
- **JSON**: usado como fonte de dados simples para projetos, certificados e habilidades, facilitando manutenção sem precisar alterar diretamente o HTML.

## Por Que Essas Ferramentas Foram Escolhidas

O projeto usa uma stack estática porque o objetivo é ter um portfólio leve, fácil de hospedar no GitHub Pages e simples de manter. HTML, CSS e JavaScript são suficientes para entregar a experiência principal sem dependências pesadas ou processo de compilação.

O `dados.json` foi utilizado para separar conteúdo e estrutura. Dessa forma, novos projetos, certificados e habilidades podem ser adicionados alterando apenas os dados, enquanto os scripts cuidam da renderização na interface.

O `i18next` foi escolhido para tornar o site acessível em mais de um idioma, mantendo os textos organizados em arquivos de tradução dentro da pasta `locales`.

O Swiper foi usado porque oferece um carrossel responsivo pronto e confiável para os certificados. Já o jQuery e os plugins existentes foram mantidos porque fazem parte do template original Kards e continuam atendendo bem às interações do site.

## Estrutura do Projeto

```text
.
├── index.html                 # Página inicial do portfólio
├── dados.json                 # Dados de projetos, certificados e habilidades
├── components/                # Componentes HTML reutilizáveis
│   ├── header.html
│   └── contact.html
├── css/                       # Estilos principais, base e ícones
├── js/                        # Scripts de carregamento, i18n e interações
├── projetos/                  # Página de detalhes dos projetos
│   ├── index.html
│   ├── project.css
│   └── project.js
├── locales/                   # Arquivos de tradução
│   ├── en/translation.json
│   └── pt-BR/translation.json
├── images/                    # Imagens do site, projetos, certificados e skills
├── fonts/                     # Fontes locais
└── CV-file/                   # Currículos em PDF

```

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Página inicial do portfólio. |
| `/#intro` | Seção inicial/apresentação. |
| `/#about` | Seção sobre mim. |
| `/#resume` | Seção de currículo e experiências. |
| `/#skills` | Seção de habilidades técnicas. |
| `/#portfolio` | Lista de projetos. |
| `/#certificate` | Lista/carrossel de certificados. |
| `/#contact` | Seção de contato. |
| `/projetos/?id=N` | Página de detalhes do projeto correspondente à posição `N` no array `projetos` de `dados.json`. |
| `/?lang=pt-BR` | Abre a página inicial em português. |
| `/?lang=en` | Abre a página inicial em inglês. |

## Como Executar Localmente

Como o projeto carrega arquivos via `fetch`, o ideal é executá-lo com um servidor local em vez de abrir o `index.html` diretamente no navegador.

Uma opção simples é usar:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Como Adicionar Novos Conteúdos

Para adicionar um novo projeto, edite o array `projetos` em `dados.json` e, se necessário, acrescente as traduções correspondentes em `locales/en/translation.json` e `locales/pt-BR/translation.json`.

Para adicionar certificados ou habilidades, edite as respectivas seções `certificados` e `skills` em `dados.json`.

## Créditos

O layout foi adaptado a partir do template Kards, da Styleshout. O arquivo `readme.txt` original foi mantido no projeto com informações de licença, créditos e recursos utilizados pelo template base.
