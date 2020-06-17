# Задача 1 – Counter


## Task 1.1 – Counter

```
[click]  count: 12
```

Необходимо создать React-кнопку, при нажатии на которую будет считаться количество кликов.

### Ключевые слова: 
- onClick
- this.state
- setState
- bind
- Функциональный VS Классовый Component

### Ссылки, которые помогут в решении:
- [Обработка событий в React](https://ru.reactjs.org/docs/handling-events.html)
- [Функциональные и классовые компоненты](https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components)

https://codesandbox.io/ – это самая удобная песочница для реакта.
Делать тут, после чего присылать [Соне в личку](https://t.me/sophiyabezruk)

## Задача 1.2 – Counter +-


Необходимо модифицировать React-кнопку, так, чтобы при нажатии на которую будет считаться количество кликов.

```
[-] [0] [+]
```

## Задача 1.3 – Counter with bounds

```
[-] [0] [+]
```
-10 – +10

<Counter min={-10} max={10} />


## Задача 1.4 – Counter with init state

```
[-] [5] [+]
```

<Counter value={5} />


## Задача 1.5 – Counter with callback

```
[-] [5] [+]
```

<Counter value={5} onChange={value => console.log(value)} />
 

## Задача 1.6 – RGB Counters

```
R [-] [5] [+]
G [-] [5] [+]
B [-] [5] [+]
```


## Задача 1.7 – RGB colors

```
[background COLOR 50x50px ]

R [-] [5] [+]
G [-] [5] [+]
B [-] [5] [+]
```

## Задача 1.8 – ColorPicker

```
[background COLOR 50x50px ]

R [-] [5] [+]
G [-] [5] [+]
B [-] [5] [+]
```

```jsx
<ColorPicker value={'aaffcc'} onChange={color => console.log(color)} /> 
```


  




