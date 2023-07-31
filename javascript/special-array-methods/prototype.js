// constructor function
function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email,'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out')
}

// inheretance from the User
function Admin(...args){
    User.apply(this,args)
    this.role  = 'super admin';
}
// inheret the user methods to admin
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    })
    console.log(u.email, 'has been deleted')
}

let userOne = new User('kimabac@ninja.com', 'Kim');
let userTwo = new User('ayenabac@ninja.com','Ayen');
let admin = new Admin('blaire@ninja.com', 'Blaire');

let users = [userOne, userTwo, admin]

userTwo.login();

// call the function to delete a user
admin.deleteUser(users[1])
console.log(users)