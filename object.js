// const user = {
//     userName: "kirill",
//     login: "login1234",
//     age: 15,
//     friends: ["alina", "Timofi", "Markian"],
//     addres: {
//       contry: "Ukraine",
//       village: "Hotiv",
//     },
//     //метод обекту це функція яку ми в обекті поставили в ключь

//     showFriends() {
//       const helpFriengs = "ваші друзі це ";
//       for (let i = 0; i < this.friends.length; i++) {
//         const friend = this.friends[i];

//         helpFriengs = helpFriengs + friend;
//       }

//       return helpFriengs;
//     },

//     changeLogin(newlogin) {
//       this.login = newlogin;
//       return this.login;
//     },
//   };
//   const userCountry = user.addres.contry;
//   const userLogin = user.login;

//   console.log(userLogin);

//   console.log(user.changeLogin("log13"));

//   console.log(userCountry);

const cart = {
  items: [
    {
      name: "🍎",
      price: 50,
    },

    {
      name: "🍇",
      price: 70,
    },

    {
      name: "🍋",
      price: 60,
    },

    {
      name: "🍓",
      price: 110,
    },
  ],

  getItems() {
    let message = "у вашій корзині  е такі продукти";
    for (let i = 0; i < this.items.length; i++) {
      message = message + this.items[i].name;
    }
    return message;
  },

  add(newProduct) {
    this.items.push(newProduct);
    return this.items;
  },

  remove(productName) { 
    const remowePrompt = prompt("Який продукт ви хочете видалити?"); 
    for (let i = 0; i < this.items.length; i++) {
        const produkt = this.items[i];
        if (remowePrompt === produkt.name){
        const indexElement = this.items.indexOf(produkt)
        this.items.splice(indexElement, 1 )
    }
    }
    
    const indexElement = this.items.indexOf(remowePrompt); 
    return this.items; 
  },

  clear() {
    for (let i = 0; i <= this.items.length; i++){
    //    this.items.pop() 
    //    this.items.shift()
    this.items.splice(0, this.item.length )
    return this.items
    }
  },
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};
console.log(cart.add({
    name: "🍋",
    price: 55,
}))

console.log(cart.getItems());
console.log(cart.remove());
console.log(cart.clear());
