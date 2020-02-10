[[docs]](https://yukio.ru/styleguide/#sider)
[[storybook]](https://yukio.ru/storybook/?selectedKind=Sider&selectedStory=Default)
[[sourse code]](https://gitlab.isuvorov.com/buzzguru/ui/blob/develop/src/Sider/Sider.jsx)
Стандартный вид компонента
```jsx
<Sider
  left={
    <div style={{ border: '1px solid red' }}>Текст слева</div>
  }
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```
Длинный текст с левой стороны
```jsx
<Sider
  left={
    <div style={{ border: '1px solid red' }}>Очень длинный текст в левом блоке, который растягивается в зависимости от ширины контента</div>
  }
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```

Отступ между блоками
```jsx
<Sider
  gap={20}
  left={<div style={{ border: '1px solid red' }}>Очень длинный текст в левом блоке</div>}
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```

По центру
```jsx
<Sider
  gap={20}
  verticalAlign="center"
  left={<div style={{ border: '1px solid red' }}>Очень длинный текст в левом блоке</div>}
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```

Сверху
```jsx
<Sider
  gap={20}
  verticalAlign="flex-start"
  left={<div style={{ border: '1px solid red' }}>Очень длинный текст в левом блоке</div>}
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```

Снизу
```jsx
<Sider
  gap={20}
  verticalAlign="flex-end"
  left={<div style={{ border: '1px solid red' }}>Очень длинный текст в левом блоке</div>}
  right={<div style={{ border: '1px solid #000' }}>Контент в правом блоке</div>}
/>
```
