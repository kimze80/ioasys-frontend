Estes documento README tem como objetivo fornecer as informações necessárias para realização do projeto Empresas.

### O QUE FAZER ?

- Você deve fazer um fork deste repositório para o desenvolvimento do teste. Após o desenvolvimento você deve enviar por email um link do seu repositório. Nós iremos avaliar seu projeto e retornar o resultado do seu teste.

### ESCOPO DO PROJETO

- Login e acesso de Usuário já registrado
  - Para o login usamos padrões OAuth 2.0. Na resposta de sucesso do login a api retornará 3 custom headers (access-token, client, uid);
  - Para ter acesso as demais APIS precisamos enviar esses 3 custom headers para a API autorizar a requisição;
- Listagem de Empresas
- Detalhamento de Empresas
- Filtro de Empresas por nome e tipo

### Informações Importantes

- Layout e recortes disponíveis no Zeplin
- https://app.zeplin.io/
- user: teste_web
- senha: teste_ioasys

- Integração disponível a partir de uma collection para Postman (https://www.getpostman.com/apps) disponível neste repositório. Para utilizar a collection, vá até o postman e import a colllection que está disponível neste repositório, assim você terá acesso as documentação da API.

- É obrigatório utilização do ReactJS/Angular.

- É importante criar o layout responsivo, usando boas práticas e organização.

- Independente de onde conseguiu chegar no teste é importante disponibilizar seu fonte para analisarmos.

### Dados para Teste

- Servidor: http://empresas.ioasys.com.br
- Versão da API: v1
- Usuário de Teste: testeapple@ioasys.com.br
- Senha de Teste : 12341234

### Dicas

- Você pode utilizar um dos frameworks: Bootstrap(http://getbootstrap.com/) ou Materializecss(http://materializecss.com).
- No postman existem alguns parâmetros no header que devem ser passados em todas requests exceto na de login, eles serão retornados no endpoint de login, nos headers da request.
- Sobrou tempo? Testes unitários, integração e e2e no sistema são bem vindos.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
