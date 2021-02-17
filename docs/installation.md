## Instalação

Faça um git clone do projeto api-node-sms:
```
git@github.com:viniciusmattosrj/api-node-sms.git
```

## Encoding

Todos os arquivos estão em **UTF-8**.


#### Importante para que o git não considere alterações de permissão como modificações a serem rastreadas

```
git config core.fileMode false
```

#### Usando o nvm

No projeto **api-node-sms** execute o comando abaixo:
```
npm install
npm src/index
```

#### Utilizando o docker ao invés do NVM

Caso você utilize docker ao invés do NVM será necessário realizar a cópia do arquivo example:
```
cp -v docker-compose.yml.example docker-compose.yml
cp -v .env.example .env
```

Dentro do projeto **api-node-sms** execute:
```
docker-compose up -d
```

#### Somente em ambiente de dev deve ser concedido a permissão nas pastas:

```
sudo chmod 777 -R node_modules
```