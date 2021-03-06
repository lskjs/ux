# Задача 1 – Counter


## Задача 1.1 – Counter



Необходимо создать React-кнопку, при нажатии на которую будет считаться количество кликов.

### Ключевые слова: 
- onClick, onChange
- this.state
- setState
- bind
- props
- Функциональный VS Классовый Component
- CSS background
- RGB

### Ссылки, которые помогут в решении:
- [Обработка событий в React](https://ru.reactjs.org/docs/handling-events.html)
- [Функциональные и классовые компоненты](https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components)

https://codesandbox.io/ – это самая удобная песочница для реакта.
Делать тут, после чего присылать [Соне в личку](https://t.me/sophiyabezruk)
![](/blog/junior/preview/task1-1.png)
## Задача 1.2 – Counter +-

Необходимо модифицировать компонент Counter, с использованием двух кнопок, при нажатии на которые цифра на счётчике будет меняться.

![](/blog/junior/preview/task1-2.png)

## Задача 1.3 – Counter with bounds

Необходимо добавить в компонент Counter возможность указывать минимальное и максимальное значения счётчика.

Не позволять менять счетчик больше и меньше этого значения программно и 
блокируя кнопки (disabled). 

**Props:**
- `min` – минимальное значение
- `max` – максимальное значение

**Пример:** 

`-10 <= n <= +10` – n больше или равно - 10 но меньше или равно 10

```jsx
<Counter min={-10} max={10} />
```
![](/blog/junior/preview/task1-3.png)


**⭐️ задача со звездочкой**: 

Прописать propTypes для компонента, принимать только целое число.

## Задача 1.4 – Counter with init state

Необходимо добавить в компонент Counter возможность указывать стартовое значения счётчика.

**Props:**
- `value` – стартовое значение счётчика

**Пример:** 

```jsx
<Counter  value={5} />
```


## Задача 1.5 – Counter with callback

Необходимо реализовать callback функцию вывода значения счётчика в консоль при нажатии кнопки.

```jsx
<Counter value={5} onChange={value => console.log(value)} />
```

## Задача 1.6 – RGB Counters

Необходимо создать три счётчика в компоненте, каждый из которых будет иметь вышеперечисленный функционал из предыдущих задач, с именами переменных аналогично составным RGB-модели цвета.


**Props**
- `red` - красный
- `green` - зелёный
- `blue` - синий 

**Пример:** 

```jsx
<Counter red={5} green={7} blue={10} />
```
![](/blog/junior/preview/task1-6.png)


## Задача 1.7 – RGB colors

Отрисовать прямоугольник `<div>` размером 50x30px со свойством background-color. Значение свойства указать вида: RGB( r, g, b) и передавать из компонента.

**Props**
- `color` - цвет прямоугольника

**Пример:** 

![](/blog/junior/preview/task1-7rectangle.png)

```jsx
<Counter color="#006363" />
```

**⭐️ задача со звездочкой**: 
Реализовать аналогичный функционал и окрашивать прямоугольник в цвета, но цвет передавать пропсами по отдельности. 

**Props**
- `red` - красный
- `green` - зелёный
- `blue` - синий 

```jsx
<Counter red={5} green={5} blue={5} />
```

## Задача 1.8 – ColorPicker

Создать компонент `<ColorPicker />` , в котором с помощью счётчиков и callback-функции `color()` можно изменить цвет прямоугольника.

**Пример:** 

```jsx
<ColorPicker value={'aaffcc'} onChange={color => console.log(color)} /> 
```
![](/blog/junior/preview/task1-8.png)

  




