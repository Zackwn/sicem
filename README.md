<h1 align="center">

</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Zackwn/sicem">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Zackwn/sicem">
  
  <a href="https://github.com/Zackwn/sicem/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Zackwn/sicem">
  </a>

 <a href="https://github.com/Zackwn/sicem/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Zackwn/sicem">
  </a>

  <a href="https://github.com/Zackwn/sicem/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

---

## 💻 Projeto

  <h1 align="center">
  <img alt="logo" title="#delicinha" src=".github/logo.png" width="400"/>
 </h1>

Projeto desenvolvido durante a <strong>Zenvia Experience Hackathon</strong> promovido pela empresa <strong>[Zenvia](https://www.zenvia.com/)</strong> em parceria com a <strong>[Shawee](https://shawee.io/pt/)</strong>.
O <strong>SICEM</strong> é um gerador de e-commerce para mercados, que visa estender a loja para o mundo online. Oferecendo integração com WhatsApp por meio da ZenviaAPI e ZenviaFlow.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Ionic](https://ionicframework.com/)
- [Celebrate](https://github.com/arb/celebrate)
- [Knex](http://knexjs.org/)
- [Axios](https://github.com/axios/axios)
- [Express](https://expressjs.com/pt-br/guide/routing.html)

## 🔨 Backend

O back-end foi construido com [Node.js](https://nodejs.org/en/), todo escrito com [TypeScript](https://github.com/Microsoft/TypeScript), que quando compilado gera code JavaScript puro.

O [Express](https://expressjs.com/pt-br/guide/routing.html) foi usado para lidar com as rotas de forma simples e eficaz, e foi aplicado o [Cors](https://github.com/expressjs/cors) assim possibilitando uma conexão mais segura e o [Celebrate](https://github.com/arb/celebrate) para validar as requisições.

Na autenticação geramos os hash das senhas com [Bcryptjs](https://www.npmjs.com/package/bcryptjs) e [JsonWebToken](https://jwt.io/) para gerar os tokens de validação.

O [Knex](http://knexjs.org/) foi o ORM escolhido para o nosso gerenciamento com banco de dados que em ambiente de desenvolvimento esta sendo usado o SQLite3.

## 📱 🌐 FrontEnd

Todo construído em [React](https://reactjs.org) e escrito em [TypeScript](https://github.com/Microsoft/TypeScript).
Para obter a conexão com as api's esta sendo usado [Axios](https://github.com/axios/axios).
Na construção da aplicação PWA, usamos o [Ionic](https://ionicframework.com/) para acesso às API’s nativas e gerar componentes de maneira prática.

## 🔥 Instalação

```bash
# Clone este repositório
$ https://github.com/TadeuA/NLW-1https://github.com/Zackwn/sicem.git

# Navegue até a pasta backend e execute os seguintes comandos:
$ yarn install or npm install
$ yarn knex:migrate or npm run knex:migrate
$ yarn knex:seed or npm run knex:seed
$ yarn dev or npm run dev
# Depois disso, entre na pasta frontend e execute os comandos:
$ yarn install or npm install
$ yarn start or npm run start

# Observações:
- Não esqueça de mudar a baseURL no arquivo api.ts das pastas web e mobile para o ip da sua máquina
- Para acessar a demo use o login de demonstração { email: tadeu@gmail.com, senha: 123456 }
```

## 🤔 Como contribuir

- Faça um clone desse repositório `git clone https://github.com/Zackwn/sicem.git`;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para da sua branch: `git push git push --set-upstream origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 🧾 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
