# PSI do Futuro

## Descrição
O PSI do Futuro é uma aplicação web desenvolvida como um teste para uma vaga de front end. O projeto visa exibir uma listagem de psicólogos e fornecer uma visão detalhada sobre cada profissional, utilizando Nextjs e Tailwind.


## Funcionalidades

- **Listagem de Psicólogos**: Visualização de uma lista de psicólogos com informações básicas.
- **Página de Detalhes**: Exibição de informações detalhadas sobre cada psicólogo ao clicar em um item da lista.
- **Design Responsivo**: Layout otimizado para diferentes tamanhos de tela, garantindo uma boa experiência em dispositivos móveis e desktops.
- **Loader de Carregamento**: Indicador visual enquanto os dados estão sendo carregados.


## Tecnologias Utilizadas

`-` Next.js 14

`-` Node.js 20

`-` React

`-` Tailwind CSS

## Instalação

`-` Instale as dependências:
```bash
npm install
````

`-` Inicie o servidor de desenvolvimento:
```bash
npm run dev
````


## Estrutura dos Arquivos

- **`page.tsx`**: Página principal que exibe a listagem de psicólogos.
- **`psi/[id]/page.tsx`**: Página de detalhes para exibir informações detalhadas sobre o psicólogo selecionado.
- **`components/card.tsx`**: Componente de Card utilizado para exibir informações de psicólogos na listagem.
- **`assets`**: Contém imagens e ícones utilizados na aplicação.
- **`public/psicologos.json`**: Arquivo JSON utilizado como fonte de dados para os psicólogos no lugar de uma API.

