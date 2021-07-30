# Aplicação Angular

## Descrição
O objetivo desta aplicação é a implantação de um sistema para gestão de vendas de imóveis a ser utilizado por uma imobiliária. A empresa que solicitou o sistema trabalha com
a venda de imóveis rurais e urbanos. Os imóveis comercializados são dos seguintes tipos: casa, apartamento, sala comercial, lote, chácara, sítio e fazenda. O sistema deve ser capaz de cadastrar os imóveis à venda, com os seguintes atributos: código, tipo, descrição, nome do vendedor (proprietário), preço solicitado, imagem e data de cadastro.

## Ferramentas utilizadas
Visual Studio Code
Angular
Node 
Mongo DB
Express

## Sobre o Mongo DB
Esta aplicação utiliza o Mongo Cloud, o que facilita o uso da aplicação. O acesso ao Mongo Cloud está liberado e qualquer utilização deste código implicará em uma atualização automática no Mongo Cloud, dispensando o uso local do Mongo.

Para se visualizar o banco de dados, abra a aplicação MongoDB Compass instalada em seu computador. Na sessão de conexão, digite o código a seguir e depois clique para conectar.
```
mongodb+srv://leonardo:seila123@cluster0.jqouf.mongodb.net/test?authSource=admin&replicaSet=atlas-o19nrl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true
```

## Execução
1. Crie um novo projeto em uma pasta de sua escolha
```
ng new nome_do_projeto
```

2. Abra a pasta do projeto que você acabou de criar e instale o Angular Material
```
ng add @angular/material
```

3. Na mesma pasta, instale também o Flex Layout
```
ng add @angular/flex-layout@9.0.0-beta.31
```

4. Clone este repositório em uma outra pasta qualquer do seu computador
```
git clone https://github.com/JMoreiraEstudante/angular.git
```

5. Copie, na pasta onde há o clone deste repositório, a pasta "app"

6. Abra o diretório do projeto angular que você criou no passo 1, abra a pasta "src" e cole a pasta copiada no passo 5. Confirme a substituição.

7. Abra o prompt de comando na pasta do projeto criado no passo 1 e digite
```
ng serve
```

8. Abra o prompt de comando na pasta "BackEnd" onde você clonou este repositório, e digite:
```
node src/index.js
```

9. A aplicação deverá estar rodando no endereço: "http://localhost:4200
