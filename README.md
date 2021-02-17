[![pipeline status](https://github.com/viniciusmattosrj/api-node-sms/badges/releaseCandidate/pipeline.svg)](https://github.com/viniciusmattosrj/api-node-sms/commits/releaseCandidate)

## Requerimentos

- Docker e docker-compose ou NVM
- Node &ge; 12.13.*
- Npm ou Yarn
- Totalvoice

### Tecnologias Utilizadas

* Axios
* Code style: ESLint
* Jest
* Mongo
* Rest

### Sobre

Esse projeto é base de estudo para melhor compreensão na prática dos conceitos de consumo de APIs rest e disparo do SMS.

Veja `.env.example` as [instruções](docs/installation.md) sobre as variáveis de ambiente.

É possível importar as `.collections` através do [collections](docs/collections.json).

Mais informações da API da [Total Voice(zenvia)](https://totalvoice.github.io/totalvoice-docs/#codigos-http) 


### Instalação

Para instalação verifique **[installation documentation](docs/installation.md)**.

### Débitos Técnicos / Próximos Desafios

- [ ] Criar uma interface para que usuário consiga preencher a mensagem e número
- [ ] Conectar ao mongo para persistir os sms enviados realizados
- [ ] Implementar testes unitários Jest
- [ ] Refatorar o código