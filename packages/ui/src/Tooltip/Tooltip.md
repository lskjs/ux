[[docs]](https://yukio.ru/styleguide/#tooltip)
[[storybook]](https://yukio.ru/storybook/?selectedKind=Tooltip&selectedStory=Default)
[[sourse code]](https://gitlab.isuvorov.com/buzzguru/ui/blob/develop/src/Tooltip/Tooltip.jsx)

Стандартный вид компонента
```jsx
<Tooltip id="1" overlay="This is tooltip" noStyle>
  <Typography view="huge-3">Tooltip</Typography>
</Tooltip>
```

С разных сторон
```jsx
<div style={{ display: 'inline-block', flexDirection: 'column' }}>
  <Tooltip id="1" overlay="This is tooltip" place="right">
    Tooltip
  </Tooltip>
  <br />
  <Tooltip id="2" overlay="This is tooltip" place="top">
    Tooltip
  </Tooltip>
  <br />
  <Tooltip id="3" overlay="This is tooltip" place="left">
    Tooltip
  </Tooltip>
  <br />
  <Tooltip id="4" overlay="This is tooltip">
    Tooltip
  </Tooltip>
</div>
```

Как ссылка
```jsx
<Tooltip
  id="1"
  overlay="This is tooltip"
  componentClass="a"
  href="https://google.com"
>
  Tooltip
</Tooltip>
```

Без данных
```jsx
<Tooltip overlay="This is tooltip" />
```