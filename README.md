# Proffy
<p align="center">O Proffy é uma plataforma para você ter uma conexão mais particular com um professor da matéria que você gosta.</p>

### Descrição: 

O Proffy é uma plataforma que conta com uma versão web e uma versão mobile. Em ambas as versões, você entra na opção _Estudar_ e filtra o professor pela matéria, dia da semana e horário que melhor te atende. Após achar o professor que mais encaixa no seu perfil, você pode entrar em contato com ele por Whatsapp e sua conexão entrará pra contagem no nosso banco de dados.

### Detalhes Técnicos: 

- Versão Web

  - A versão web foi desenvolvida em ReactJS utilizando TypeScript ao invés de JavaScript, utilizamos as variáveis de Estado para grande parte das informações mostrada na tela e para as respostas do Backend, utilizamos Effect Hooks para principalmente realizar as chamadas no backend e o design é responsivo tanto para desktop quanto para aparelhos como tablets e celulares. 

- Backend

  - O backend foi desenvolvido em NodeJS utilizando TypeScript e utilizamos o KnexJS para a construção do banco de dados e suas querys.

- Mobile

  - O mobile foi desenvolvido em React Native, utilizamos muito das ferramentas fornecidas pelo Expo, como o template blank para TypeScript.

  - Na versão mobile, a navegação entre _Estudar_ e _Dar Aula_ é realizada de forma Stack, enquanto as opções dentro de Estudar chamadas _Proffys_ e _Favoritos_ é feita de forma Tab, ambas utilizando a biblioteca [React Navigation](https://reactnavigation.org/).

  - Utilizamos a biblioteca [AsyncStorage](https://github.com/react-native-community/async-storage) para armazenar os professores favoritados pelo usuário, visto que não há uma forma de Login na versão 1.0 da aplicação.

### Layout:

Os layouts da [versão web](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web) e da [versão mobile](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile?node-id=0%3A1) podem ser encontrados ao clicar neles.

### Versão Web:

```diff
- A versão web é a única que possibilita o professor realizar a inscrição dele no atual momento.
```

Nessa inscrição, o professor irá preencher um formulário com 3 tópicos: 
- Seus dados

> Fornecendo o nome dele, um link com o avatar, o whatsapp para contato e uma breve biografia sobre ele;
- Sobre a aula

> Informando a matéria que irá lecionar e o custo da hora/aula;
- Horários disponíveis

> Informando o dia da semana e de que horas até que horas serão os horários que ele pode dar a aula.

### Versão Mobile: 

A versão mobile possui a opção de você favoritar um professor, cada tenha gostado muito da maneira como ele te atendeu.
