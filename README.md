# AmicusAgricolae
Projeto de cadastro de produtores rurais, fazendas, e plantações.

O nome vem do Latin, e significa "Amigo do Agricultor"

## Funcionalidades

- CRUD completo de productors (Produtores Rurais)
- CRUD completo de rural_properties (Propriedades Rurais)
- CRUD completo de crops (Culturas / Plantações)

## Tecnologias utilizadas
Tentei selecionar tecnologias com maior afinidade umas com as outras tendo como ponto de familiaridade principal o NestJS e o ecosistema recomendado pelo Framework!

**Objetivo:** - Aproveitar ao máximo tudo que o NestJS já nos oferece de arquitetura, scaffolding, recomendações e receitas prontas para criar um projeto com uma forte sinergia entre as tecnologias utilizadas.

Lista de tecnologias utilizadas:

- **NestJS**
- **Express** (Por ser um projeto pequeno sem requisitos de alta performance, não alternei o adapter para o adapter do Fastfy)
- **NestJS Swagger** Plugin para criação de documentação automática
    - Ao rodar o projeto basta acessar sua base url + /docs para visualização da documentação ricamente detalhada utilizando todo potencial e automação do plugin graças ao mecanismo de introspectComments oferecido
- **Class-Validator e Class-Transform** - Já tinha experiencia previa com Yup e Zod, mais não achei que eles combinavam bem com NestJS, ao ver as documentações e todas facilidades e automações que teria utilizando o Class-Validator logo fiquei animado com a ideia de conhecer mais e me apaixonei, funcionou com muita sinergia com NestJS e com as documentações automaticas do Swagger.
- **PrismaORM** - Confesso não ser um grande fã do Prisma devido ao seu querybuilder gerar queries não muito otimizadas e me sentir "travado" as vezes pelo seu querybuilder. Atualmente tenho usado muito o DrizzleORM porém não havia um recipe ou recomendações de como utilizar com NestJS, e como já conhecia o Prisma acabei escolhendo pelo que eu tinha mais experiencia prévia e o NestJS possui receitas prontas e recomendações e exemplos de uso com Prisma.
- **PostgresSQL** - Banco de dados relacional e confiável
- **Jest e Supertests** - Como eles já vem no ecosistema do framework , e o sistema de scaffolding já até faz o setup basico para você, precisei de poucos ajustes para deixar tudo rodando, então decidi por utiliza-los apesar da performance inferior ao Vitest que tenho estudado ultimamente e tenho gostado muito.

## Arquitetura

- Como estou utilizando um framework opinativo e fortemente recomendativo, tentei não "re-inventar" a roda e utilizar o arsenal que já estava sendo disponibilizado pelo NestJS. Usei bastante a inversão de dependencia oferecida para conseguir aproveitar ao maximo das caracteristicas Singleton do framework, desenvolvi uma arquitetura de repositorios onde apenas 1 instancia do serviço de banco de dados fosse compartilhada entre todos repositorios, e os repositorios especificos de um recurso fossem compartilhados entre todos services que necessitassem daquele repositorio.
- **Validações** - Abusei das validações do class-validator, para que apenas chegasse em meus controladores dados confiáveis e com minimo possível de possibilidade de inpedimentos para processar a requisição, criando também decorators customizados:
    - @IsValidDocument() - Verifica se o documento do produtor é valido de acordo com seu tipo
    - @IsValidProductorId() - Verifica se campos do tipo productor_id contem ids de produtores válidos reais.
    - @IsValidRuralPropertyId - Verifica se campos do tipo rural_property_id contem ids de produtores válidos reais.
- **Tratamento de erros** - Abusei dos Exception Filters do NestJS e de seu global http error handler. No lugar de declarar vários blocos try catch aninhados e lidar com tudo manualmente, aproveitei o poder do framework de reconhecer as proprias exceções prontas oferecidas por ele e automaticamente montar a resposta adequada para o cliente.
- **Regras de negócio** - Para as logicas de programação mais especificas do caso de uso (service) implementei validações na camada de serviço que ficou responsavel por toda "inteligencia" de negócio da aplicação. Exceções lançadas por esta camada geralmente são do tipo UnprocessableEntity HTTP Status 422, simbolizando que o formato dos dados enviados estão OK (Não é um 400), porém não podemos processar a requisição devido a questões das regras de negocio. Exemplos:
    - Soma das áreas agricultável e de vegetação superando área total da propriedade
    - Soma das áreas das culturas em um mesmo ano de safra superando a área agricultável da propriedade
    - Obs.: Tentei deixar a prova de balas (bulletproof) estas regras de negócio, para que de forma alguma elas conseguissem ser burladas, independente de endpoint (Post, Patch, Put) e também considerando culturas já deletadas como disponíveis.

### Camadas

- O design da arquitetura segue muito o recomendado pelo NestJS então ficou:

Client
-> Requests
-> Validations Layer (Pipes, Class-Validator)
-> Controllers enviar Dtos para os services
-> Services aplicam as regras de negócio e enviam dtos para os repositorios
-> Repositorios devolvem entidades para o service
-> Services retornam as entidades para os Controllers
-> Controllers retornam as respostas dos requests para o Client
-> Global: A qualquer momento, uma camada que encontrar uma impossibilidade de continuar o processamento pode lançar uma exception do NestJS para interromper o processamento antecipadamente.

Fiz um Diagrama esboçando este resumo:

![Imagem do diagrama da arquitetura](assets/Diagrama_Arquitetura_Amicus_Agricolae.png)

Link para visualização online:
[Diagrama da arquitetura](https://excalidraw.com/#json=bFZ_SFM-haLpBYhE-chwK,o18803fSmVsqV7eqqo8F3g)

### Modelagem de dados

De acordo com os requisitos do projeto que eram:

*Permitir o registro de várias culturas plantadas por fazenda do produtor.*

*Um produtor pode estar associado a 0, 1 ou mais propriedades rurais.*

*Uma propriedade rural pode ter 0, 1 ou mais culturas plantadas por safra.*

Optei por um banco com apenas 3 tabelas principais e 2 relacionamentos: Produtores, Propriedades Rurais, Culturas.

Cheguei a pensar em criar uma tabela exclusivamente para as safras, mais o ganho de reaproveitamento de dados seria pequeno em relação ao aumento da complexidade que isso traria para filtragem e aplicação das regras de negócio, mapeamento de entidades no codigo, dtos, aumento de 1 crud para cadastramento de safras ou criação de um seed para alimentar a tabela com valores padrão, etc.. então tornei a safra apenas uma propriedade das culturas, tentei ser um pouco KISS neste ponto (Keep It Super Simple)

Portanto o modelo final do banco ficou assim:

![Imagem do diagrama de Dados](assets/Modelagem_Dados_Amicus_Agricolae.png)

Link para visualização online:
[Diagrama de Dados](https://dbdiagram.io/d/6835fbaf6980ade2ebb5b41e)

## Testes

- Acabei criando todos endpoints CRUD para todos recursos, e não apenas os endpoints necessários para cumprimento dos requisitos, por este motivo não criei testes de integração para todos CRUDs *(ainda)*. Porém o CRUD de Culturas que é um dos que considero mais complexos, foi totalmente coberto por testes de integração em todos seus endpoints.
- **Observação importante:** - Geralmente os testes de integração mockam os services, testando bem superficialmente apenas o controller e os contrados das APIs. Porém para maior cobertura de testes optei por realizar os mocks a nivel de repositorios, assim todas linhas de codigo dos services puderam ser executadas pelos testes de integração.
- Criei testes unitários nos pontos onde na minha opinião ficaria menos cobertos pelos testes de integração, então cobri com testes unitários minhas entidades, funções uteis, funções validadoras, entre outras.

## Instalação & Execução

1 - Clone o projeto:

```
git clone https://github.com/thereAreDevelopersInBrazil/AmicusAgricolae.git
```

2 - Entre no diretório do projeto clonado e Instale as dependências utilizando um gerenciador de pacotes de sua preferencia (npm ou yarm ou pnpm)
```
npm install
```
3 - Renomeie o arquivo ```.env.sample``` para ```.env```

4 - Substitua a conection string placeholder por sua string de conexão com postgres, exemplo:
Altere de:
```
postgresql://<USUÁRIO>:<SENHA>@<ENDPOINT>:<PORTA>/<DATABASE>?schema=<SCHEMA>
```
Para: (Utilize seu usuário e sua senha real no lugar de "postgres" e "SamplePass123")
```
postgresql://postgres:SamplePass123@localhost:5432/postgres?schema=public
```


3 - Para rodar em modo produção execute:
```
npm run build
```
e em seguida:
```
npm run start:prod
```

4 - Para rodar em modo desenvolvimento é necessário apenas:
```
npm run start:dev
```

5 - Pronto, em ambos casos (produção ou desenvolvimento) sua aplicação estará rodando e aguardando requisições na URL:
```
http://localhost:3000/
```

6 - Para acessar a documentação da API (Swagger) acesse:
```
http://localhost:3000/docs
```

## Docker

Para rodar o projeto utilizando o docker, é necessário que seja fornecida sua connection string via linha de comando,
Esta ação é necessária para manter a compatibilidade do Dockerfile com o Github actions que foi configurado para injetar as variaveis de ambiente utilizando build-args
Portanto, para rodar via docker localmente utilize o comando:
```
docker build --build-arg DATABASE_URL="sua-connection-string" -t amicus-agricolae .
```
A imagem será buildada, após a conclusão para rodar o projeto execute:
```
docker run -p 3000:3000 amicus-agricolae
```

Pronto! Seu container estará rodando e aceitando conexões pela porta 3000
