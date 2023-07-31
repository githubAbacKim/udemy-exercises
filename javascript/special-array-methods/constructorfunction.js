function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

let userOne = new User('kimabac@ninja.com', 'Kim');
let userTwo = new User('ayenabac@ninja.com','Ayen');

console.log(userOne)
userTwo.login();