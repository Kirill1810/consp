//Напишіть код з використанням switch, що відповідає наступній конструкції if..else. Результат виведіть на екран:

const browser = prompt("який у вас браузер?");

// if(browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome'
//  || browser === 'Firefox'
//  || browser === 'Safari'
//  || browser === 'Opera') {
//   alert("Ми підтримуємо і ці браузери");
// } else {
//  alert('Маємо надію, що ця сторінка виглядає добре!')  ;

// }

switch (browser) {
  case "Crome":
  case "Firefox": 
  case "Safari":
  case "Opera":
    alert("Ми підтримуємо і ці браузери");
    break;

  default:
    alert("Маємо надію, що ця сторінка виглядає добре!");

}



