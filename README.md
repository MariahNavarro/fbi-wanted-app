# Procurados do FBI

Aplicativo mobile desenvolvido com **React Native + Expo** que consome a API pública **FBI Wanted** e exibe, em uma lista, as pessoas da lista de procurados do FBI, com foto, nome e descrição.

## Funcionalidades

- Consumo de API REST com `fetch`
- Indicador de carregamento (`ActivityIndicator`)
- Tratamento de erro caso a requisição falhe
- Lista com foto, título e descrição de cada item (`FlatList`)

## API utilizada

- **FBI Wanted API**
- Endpoint: `https://api.fbi.gov/wanted/v1/list`
- Gratuita, sem necessidade de chave de acesso
- Documentação: https://www.fbi.gov/wanted/api

## Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- JavaScript

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- App **Expo Go** instalado no celular (Android ou iOS)

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/MariahNavarro/fbi-wanted-app.git
   cd meu-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npx expo start
   ```

   Se o celular não conectar, use o modo túnel (requer login com `npx expo login`):

   ```bash
   npx expo start --tunnel
   ```

4. Escaneie o QR Code com o app **Expo Go**.

## Estrutura do projeto

```
meu-app/
├── App.js          # Tela principal: consumo da API e listagem
├── app.json        # Configurações do Expo
├── index.js        # Ponto de entrada
└── package.json    # Dependências e scripts
```

## Como funciona

1. Ao abrir o app, o `useEffect` faz uma requisição `GET` para a API do FBI.
2. Os dados retornados (campo `items`) são guardados no estado com `useState`.
3. A `FlatList` renderiza um card para cada item, exibindo foto, nome e descrição.

## Aviso

Os dados exibidos são reais e pertencem ao FBI (Federal Bureau of Investigation). O app tem finalidade exclusivamente educacional.

## Autora

Desenvolvido por **SEU NOME**.
