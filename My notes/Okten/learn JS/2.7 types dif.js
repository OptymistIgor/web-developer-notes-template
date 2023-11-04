let a = 10;
let b = a;
b = b + 10;
console.log(a);

let user = {
    id: 1,
    name: 'Vasya',
}

let user2 = user;

user2['status'] = false;

console.log(user);
console.log(user2);
