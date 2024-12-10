const user = {
  userName: "kirill",
  login: "login1234",
  age: 15,
  friends: ["alina", "Timofi", "Markian"],
  addres: {
    contry: "Ukraine",
    village: "Hotiv",
  },
  //метод обекту це функція яку ми в обекті поставили в ключь

  showFriends() {
    const helpFriengs = "ваші друзі це ";
    for (let i = 0; i < this.friends.length; i++) {
      const friend = this.friends[i];

      helpFriengs = helpFriengs + friend;
    }

    return helpFriengs;
  },

  changeLogin(newlogin) {
    this.login = newlogin;
    return this.login;
  },
};
const userCountry = user.addres.contry;
const userLogin = user.login;

console.log(userLogin);

console.log(user.changeLogin("log13"));

console.log(userCountry);
