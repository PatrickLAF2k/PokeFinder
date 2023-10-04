
# PokeDex
<div style="text-align:center">
Esta é uma API simples que fornece informações sobre Pokémon. Ela utiliza a biblioteca "utils-playground" para buscar detalhes dos Pokémon.
  
![Pokemon Pokemon Journeys GIF](https://media.tenor.com/uSCX8MQJbWoAAAAC/pokemon-pokemon-journeys.gif)

</div>

## Instruções de Uso da API PokeDex
A API PokeDex é uma ferramenta simples para obter informações sobre Pokémon. Siga estas etapas para começar a usá-la:

### 1. Clone o Repositório
-Clone o repositório da API PokeDex para seu ambiente de desenvolvimento local:

### 2. Instale as Dependências
-Certifique-se de ter as dependências necessárias instaladas. No diretório do projeto, execute o seguinte comando para instalar as dependências:

```
npm install
```
### 3. Inicie o Servidor
Inicie o servidor da API PokeDex com o seguinte comando:

```
node --watch src/index.js 
```

### 4. Baixe o Insomnia
Para testar os endpoints da API, você pode usar o Insomnia, uma ferramenta de teste de API. Faça o download do Insomnia em https://insomnia.rest/download e instale-o no seu sistema.

Agora você está pronto para começar a usar a API PokeDex e testar os endpoints usando o Insomnia.

## Uso

### Listar Pokémon

Endpoint: `/pokemon?page=<número_da_página>`

- **GET** `http://localhost:8000/pokemon?page=<número_da_página>`
- Recupere uma lista de Pokémon. Você pode especificar o número da página para navegar pela lista.

![listarpokemonspage](https://github.com/PatrickLAF2k/PokeFinder/assets/141870542/1fce5519-8f24-47f0-9606-c2faac6a745a)


### Pesquisar por um Pokémon

Endpoint: `/api/pokemon/:idOuNome`

- **GET** `/api/pokemon/:idOuNome`
- Recupere detalhes sobre um Pokémon específico fornecendo seu ID ou nome.

 ![listarpokemonsporidounome](https://github.com/PatrickLAF2k/PokeFinder/assets/141870542/5bb66e08-243c-4a56-8d64-1d23212d0946)












