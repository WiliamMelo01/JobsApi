# JobsApi
Esta API foi desenvolvida com o objetivo de fornecer dados para um site de busca de empregos como um desafio proposto pelo site devchallenges.io. A ideia por trás do desafio é criar uma plataforma para ajudar pessoas a encontrar oportunidades de emprego em diferentes cidades e áreas de atuação.

A API permite a criação, atualização e exclusão de vagas de emprego, bem como a obtenção de informações sobre todas as vagas disponíveis. Ela é essencial para alimentar o site com dados precisos e atualizados sobre as oportunidades de emprego disponíveis.

Embora o desafio do devchallenges.io já tenha fornecido uma API, ela não está mais funcionando, o que tornou necessário o desenvolvimento de uma nova API para o desafio. Esta API foi criada com o objetivo de fornecer uma solução confiável e eficiente para o desafio e pode ser adaptada para atender às necessidades de outros projetos semelhantes.

## Tecnologias utilizadas
[![My Skills](https://skillicons.dev/icons?i=nestjs,typescript,mongodb,swaggerui)](https://skillicons.dev)

## Como executar o projeto localmente

Para clonar e executar essa aplicação, você irá precisar ter instalado o  [Git](https://git-scm.com), o [Node.js](https://nodejs.org/en/download/) e também a [CLI do NestJs](https://docs.nestjs.com/cli/overview). No seu terminal execute:

```bash
# Clone este repositorio
$ git clone https://github.com/WiliamMelo01/JobsApi

# Abra um terminal na pasta raiz do projeto.

# Instale as dependencias
$ npm install

# Crie um arquivo .env na raiz do projeto e defina a conexão com o banco de dados MongoDB em uma variável de ambiente MONGODB_URL. Por exemplo:
$ MONGODB_URI=mongodb://localhost:27017/nome-do-banco-de-dados

# No arquivo .env na raiz do projeto, defina também a porta em que deseja que a API seja executada em uma variável de ambiente PORT.Por exemplo:
$ PORT=3000

# Execute o comando para iniciar o servidor em modo de desenvolvimento.
$ npm run start:dev

# Acesse http://localhost:<PORTA DEFINIDA NO ARQUIVO .env> em seu navegador para ver a página inicial do servidor.

# Observações
# È importante lembrar que o banco de dados deve estar rodando em sua máquina antes de executar o servidor.

```

A documentação da nossa API de empregos está disponível para consulta em https://wiliam-melo-job-api.up.railway.app/api-doc.

Lá você encontrará informações sobre as rotas disponíveis, seus parâmetros e exemplos de requisições e respostas. Além disso, a documentação foi gerada com o Swagger UI, o que facilita ainda mais a visualização e interação com a API.

Fique à vontade para explorar a documentação e, caso tenha alguma dúvida ou sugestão, não hesite em nos contatar.
