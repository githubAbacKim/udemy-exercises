class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, 'just logged in');
        return this;
    }

    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

let userOne = new User('kimabac@ninja.com', 'Kim');
let userTwo = new User('ayenabac@ninja.com','Ayen');

let admin = new Admin('blaire@ninja.com', 'Blaire');

let users = [userOne, userTwo];

admin.deleteUser(userOne);

console.log(users)