<h2 id="technologies">💻 Stack</h2>

- React
- Typescript
- MUI(Material Design)

<h2 id="started">🚀 Como rodar este repositório em sua maquina local</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://github.com/) v20.12.1

<h3>Clonando na maquina local</h3>

Como Clonar esse repositório

```bash
git clone https://github.com/pedro-henrique-br/Teste-Season
```

<h3>Iniciando</h3>

Como iniciar este repositório? 

para evitar a necessidade de um proxy usei CORS Anywhere para evitar o erro de cross-origin

Basta entrar no link abaixo e requisitar o acesso temporario
https://cors-anywhere.herokuapp.com/corsdemo

DOCS - do cors-demo(https://github.com/Rob--W/cors-anywhere/issues/301)

```bash
cd Teste-Season
npm install
npm run dev
```

Crie um .env na raiz do projeto com os acessos de auth do keycloak

```bash
VITE_GRANT_TYPE = grant-type
VITE_CLIENT_ID = client-id
VITE_USERNAME = username
VITE_PASSWORD = password
VITE_CLIENT_SECRET = client-secret
```
