# LSK ux subrepo: @lskjs/theme

- Цвета и шрифты можно глобально использовать с помощью пропсов
- 1 раз выбиранная палитра цветов и можно использовать её на всех подобных проектах, не надо придумывать каждый раз и подбирать дизайн
- Eсли захочешь её заменить, все цвета с помощью переменных меняются в 1 файле

Чтобы подключить и использовать нашу тему из пакета @lskjs/theme во всем проекте:

## Default 

1. `npm i @lskjs/theme`
2. Прокинуть тему в начальную точку приложения ( Layout, App, Uapp )
```
export default class Uapp extends BaseUapp {
  theme = theme
```
или
 ```
<ThemeProvider theme={theme}>

</ThemeProvider>
```
2. Использование в Styled Components
```
import getTheme from '@lskjs/theme/getTheme';

getTheme(props.theme, 'colors.primary')
```

## Custom

Если нужно переопределить стандартную тему, необходимо дополнительно:

Добавить в проект файл theme.js , в котором:

```
import theme from '@lskjs/theme';

export default {
  ...theme,
  colors: {
    ...theme.colors,

  },
};


export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#333333',
    secondary: '#f39c12',
    lightGrey: '#f1f1f1',
    greyText: '#b5b5b5',
    darkBackground: '#1a1a1a',
    ...
  },
  fonts: {
    ...theme.fonts,
    fontFamily: ... ,
    fontFamily2: ... ,
  }
  whiteSpace: 'pre-line',
};
```
