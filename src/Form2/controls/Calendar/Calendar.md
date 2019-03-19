Calendar example:

```js
<CalendarForm
            initialValues={{
              calendar1: null,
              calendar2: '2019-01-01',
              calendar3: '2019',
              calendar4: new Date('2019-01-06'),
              calendar5: new Date('invalid'),
              calendar6: Date.now(),
            }}
            onChange={values => console.log('onChange', values)}
          />
```