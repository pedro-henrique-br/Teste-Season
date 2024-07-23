Seguem as informações do teste: 

Para o desenvolvimento desse teste, será preciso obrigatoriamente estar escrito utilizando a Biblioteca React de preferência utilizando Typescript. O Framework css a ser empregado, pode ser o Bootstrap, Tailwindcss ou o Material Design, ou seja, a biblioteca que tiver melhor domínio. A nossa sugestão é a utilização do Material Design por utilizarmos ela no dia-a-dia, porém, não é mandatório.

Os itens que serão avaliados, serão a qualidade, concisão do código e entrega dentro do prazo.

Anexo a esse e-mail, encaminho o conjunto de requisições para a API que o Pedro irá fazer as requisições.
A Documentação dos Endpoints da API, pode ser acessado através da URL https://pethub-hml.cgtecnologia.com.br/swagger-ui/index.html#/

A autenticação é feita através do Keycloak que fornecerá o Bearer Token e com o Bearer Token, a API pode ser consumida.
O Keycloak é um servidor de autenticação compatível com OpenID e é o responsável pela geração dos Tokens.

A requisição para o login da aplicação, deve ser feita via Post, no formato x-www-form-urlencoded passando as credenciais de acesso que constam no conjunto de requisições do Postman que envio anexo.

A ordem sugerida de desenvolvimento desse projeto, é a seguinte:
Login
Cadastro de Usuário (o usuário passado já deve estar autenticado) para cadastrar os dados da Pessoa
Cadastro de Animal
Lista de animais
Detalhes de um animal
Com a sugestão acima, serão 5 telas a serem desenvolvidas.

A API, vincula os animais cadastrados ao usuário autenticado, ou seja, o Usuário João, ao fazer login no sistema, visualizará apenas os dados cadastrados por ele. Não há a possibilidade de um usuário cadastrar dados para outro usuário por exemplo.


Se tiver alguma dúvida, me coloco à disposição.