const met = "i will do home works"
console.log(met.split(""))
const newmet = met.split(" ") //розділяе елементи 
console.log(newmet)

const friends = ["alina","timofi","markian"]
const newfrirnds = friends.join(", ") //зшивае елементи в масиві
console.log(newfrirnds)


const numers = [1, 2, 3]
const numers2 = [4, 5, 6]
const numers3 = [7, 8, 9]

const allNumbers = numers.concat(numers2 , numers3) //обеднуе 2 масиви в 1 

console.log(allNumbers)

console.log(numers.indexOf(2)) //показуе поточний індекс елемента
const friendsIndex = friends.indexOf("alina") //шукае номер масива 
console.log(friendsIndex)
const numer1 = numers.push(1) //добавляе елемент 1 до масива 
console.log(numers)
const numer2 = numers.pop() //забирае елемент с почятку
console.log(numers)
const numer3 = numers.shift() //забирае перший елемент у масиві і показуе
console.log(numers)
const numer4 = numers.unshift() //додае елемент на почяток 
console.log(numers)
const numer5 = numers.splice(1) //видаляе елемент по індексу 
console.log(numers)
const numer6 = numers.slice() //вирізае елемент з масиву і робить новий масив 
console.log(numers)
const numer6 = numers.slice(3, 0, 6) //3 індекс елемента який хочеш видалити або дотати 0 скільки елементів хочеш видалити 6 що хочеш додати
console.log(numers)

//array.includes(x)  — визначає, чи містить масив 
//деякий елемент x, повертаючи true або false відповідно. Використовуйте includes тоді, коли необхідно перевірити, чи є елемент в масиві і не важливий його порядковий номер.



