//task_1.1
let person = {
  name: 'Sasha',
  age: 31,
  city: 'Ekaterinburg',
}

console.log(Object.values(person))

//task_1.2
let original = {
  id: 1,
  name: 'Free Plan',
  type: 'Personal',
}

let copy = { ...original }
copy.id = 2
console.log(original)
console.log(copy)

//task_1.3
let person2 = {
  name: 'Masha',
  age: 32,
  city: 'Saint-Petersburg',
}

let clone = Object.assign({}, person2)
clone.name = 'Natasha'
console.log(person2)
console.log(clone)

//task_2.1
let user = {}
console.log(user?.city)

//task_2.2
const location = {
  address: {
    city: 'Ekaterinburg',
    zip: '620000',
  },
}

console.log(location && location.address?.zip)

//task_2.3
let data = {
  name: 'Test',
}

console.log(data?.items)

//task_3.1
console.log(Object.keys(person))

//task_3.2
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
  color: 'red',
}

console.log(Object.values(car))

//task_3.3
console.table(Object.entries(person))

//task_4.1
let user2 = {
  id: 1,
  username: 'sasha_lapina',
  firstName: 'Sasha',
  lastName: 'Lapina',
  age: 31,
  gender: 'female',
}

console.log(JSON.stringify(user2))

//task_4.2
let jsonString = '{"id":1,"username":"sasha_lapina","firstName":"Sasha","lastName":"Lapina","age":31,"gender":"female"}'
console.log(JSON.parse(jsonString))

//task_4.3
let jsonString2 =
  '{"user": {"id": 1, "name": "Sasha Lapina", "email": "sl@mail.com", "address": {"street": " ", "city": "Ekaterinburg", "postalCode": "620000"}}}'

console.log(JSON.parse(jsonString2))

//task_5.1
let fruits = ['apple', 'banana']
fruits.push('orange')
console.log(fruits)

//task_5.2
let numbers = [1, 2, 3, 4, 5]
let sq_numbers = numbers.map(function (e) {
  return Math.pow(e, 2)
})
console.log(sq_numbers)

//task_5.3
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let filtered_numbers2 = numbers2.filter(function (e) {
  return e % 2 === 0
})

console.log(filtered_numbers2)

//task_6.1
let person3 = {
  name: 'Elena',
  age: 18,
}

let { name, age } = person3
console.log(name, age)

//task_6.2
let fruits2 = ['яблоко', 'банан', 'груша']
let [first, second] = fruits2
console.log(first, second)

//task_6.3
let person4 = {
  name1: 'Alice',
}

let { name1 = 'Test', age1 = 99 } = person4
console.log(name1, age1)
