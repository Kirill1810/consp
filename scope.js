const a = 84;
//зміна "а" е глобальною 
if(5>3){
    console.log(a);
}

const userAge = prompt("вік");

if(userAge < 18) {
    const message = `ви не повнолітній вам ${userAge}`
    console.log(message)
    if(userAge > 19) {
        const mes =("й")
        console.log(mes)
    }
    if(userAge < 19) {
        const mes2 =("g")
        console.log(mes2)
    }
    
}


//Використовуючи конструкцію if..else, напишіть код,
 //що запитує: ‘Яка “офіційна” назва JavaScript?’
  //Якщо відвідувач вводить “ECMAScript”, виведіть 
  //“Правильно!”,
 //в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”


//  const qation = prompt("js") 

// if( qation === js ) {

// console.log(alert("правильно"))
  
// } else{
//     console.log(alert("no")) 
// }







