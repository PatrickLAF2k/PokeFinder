
# PokeDex

Esta é uma API simples que fornece informações sobre Pokémon. Ela utiliza a biblioteca [utils-playground](https://www.npmjs.com/package/utils-playground) para buscar detalhes dos Pokémon.
  
![Pokemon Pokemon Journeys GIF](https://media.tenor.com/uSCX8MQJbWoAAAAC/pokemon-pokemon-journeys.gif)

## Tecnologias Utilizadas

- Linguagem de programação: JavaScript
- Framework: [Express](https://www.npmjs.com/package/express)
- Biblioteca: [utils-playground](https://www.npmjs.com/package/utils-playground)



## Instruções de Uso da API PokeDex
A API PokeDex é uma ferramenta simples para obter informações sobre Pokémon. Siga estas etapas para começar a usá-la:

### 1. Clone o Repositório
- Clone o repositório da API PokeDex para seu ambiente de desenvolvimento local:

### 2. Instale as Dependências
- Certifique-se de ter as dependências necessárias instaladas. No diretório do projeto, execute o seguinte comando para instalar as dependências:

```
npm install
```
### 3. Inicie o Servidor
- Inicie o servidor da API PokeDex com o seguinte comando:

```
node --watch src/index.js 
```

### 4. Baixe o Insomnia
- Para testar os endpoints da API, você pode usar o [Insomnia](https://insomnia.rest/download), uma ferramenta de teste de API. Faça o download do [Insomnia](https://insomnia.rest/download) e instale-o no seu sistema.

- Agora você está pronto para começar a usar a API PokeDex e testar os endpoints usando o Insomnia.

## Uso

### Listar Pokémon

Endpoint: `/pokemon?page=<número_da_página>`

- **GET** `http://localhost:8000/pokemon?page=<número_da_página>`
- Recupere uma lista de Pokémon. Você pode especificar o número da página para navegar pela lista.

![ListarPokePorPage](https://github.com/PatrickLAF2k/PokeFinder/assets/141870542/8b18f121-a4a1-43eb-b970-14a300707236)



### Pesquisar por um Pokémon

Endpoint: `/pokemon/:<Id_ou_nome>`

- **GET** `http://localhost:8000/pokemon/<Id_ou_nome>`
- Recupere detalhes sobre um Pokémon específico fornecendo seu ID ou nome.

![listarPokeporIdOuNome](https://github.com/PatrickLAF2k/PokeFinder/assets/141870542/6b28f54c-b043-4cdb-9980-9abef7e83c50)


 ## Observações:

- Todas as rotas seguem os padrões REST.
- Todas as requisições são assíncronas.
