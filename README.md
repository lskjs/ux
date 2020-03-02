# Lego Starter Kit / UX libraries

это монореп (управляется lenrа'ой), для фронтовых компонентов, тут нет никакого серверного кода и поэтому нету .env
нас интересует в данный момент ui
`npm run dev` - делает просто сборку src=>build, это необходимо, когда мы линкуем пакеты к реальному  проекту и тестриуем в живой среде

## How to run

```sh
git clone git@github.com:lskjs/ux.git lskjs-ux
cd lskjs-ux
npm install
npm run bootstrap
cd packages/ui
npm run storybook
```

## TODO

[If you could help us](TODO.md)


## Tutorial

### 1. Как сделать лендинг на CRA

```sh
npx create-react-app landing
cd landing
npm start
```

https://github.com/facebook/create-react-app
https://github.com/lskjs/tutorial/tree/steps/step1

### 2. Как добавить кнопку (@lskjs/button) на CRA лендинг

```sh
npm i @lskjs/button
npm i lodash react-icons2
```

```jsx
import Button from "@lskjs/button";
        
<Button paint="primary">Primary</Button>
```

Попробовать код можно в [ветке step2](https://github.com/lskjs/tutorial/tree/steps/step2). Сравнить изменения с предыдущего шага можно [> тут <](https://github.com/lskjs/tutorial/compare/steps/step1...steps/step2)
