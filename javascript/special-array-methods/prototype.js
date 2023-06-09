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
    
}