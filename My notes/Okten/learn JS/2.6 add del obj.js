let user = {
    id: 1,
    age: 22,
    name: 'Vasya'
}

user.age = 34;
console.log(user);
user['status'] = false;

delete user.id;
console.log(user);