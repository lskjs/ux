# Task 2


## tast 2.1
```
convert({ name: {firstName, lastName} , bdate,  address: '325345, Some street, Samara, Russia'   }) 
=> { fullName, age, isAdult, address: {country, city, postcode}   }
```

## task 2.2
```js
[user, user, user]
=> 
[user2, user2, user2]
```


## task 2.3
```
[
   fullName [* (if !isAdult)]
   age
   
   if (isAdult) {
   ----
   country
   city
   postcode
   ----
   }
]
```

