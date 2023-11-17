// let users = [
//     {name: 'Ivan', age:50, status: true},
//     {name: 'Bogdana', age:14, status: true},
//     {name: 'Igor', age:42, status: true},
//     {name: 'Ira', age:30, status: true}, 
//  ];
// 1 forEach метод!!!

    // users.forEach(function (value){
    //     console.log(value);

    // users.forEach(function (value, index, array){
        // console.log(value, index);
//  });

// users.forEach(value => console.log(value));
// users.forEach((value, index)=> console.log(value, index));
// value === user назва може бути довільною


// let callUser = users.forEach(value => value.age > 30);
//     console.log(callUser);
//     console.log(users);

//..................

// 2 map метод!!!

//1
//  let mapedUsers = users.map(function (value, index) {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     }
//     return newUser;
//  })
// console.log(mapedUsers)

//2
// let mapedUsers = users.map(function (value, index) {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     };
//  })
// console.log(mapedUsers)


//3   ...(spred operator)
// let mapedUsers = users.map(function (value, index) {
//     return {...value, index: index + 1,};
//  })
// console.log(mapedUsers)


//4 arrow func
// let mapedUsers = users.map((value, index) => {
//     return {name: value.name, age: value.age, status: value.status, id: index + 1 }
// })
// console.log(mapedUsers)


//5 find func
// let find = users.find(value => value.name === 'max');
// console.log(find)


//6 every, some
// console.log(users.every(value => value.status));
// console.log(users.some(value => value.status));


//7 sort по зростангю, та навпаки по спадан.значенння.
// let sort = users.sort(( us1, us2) => {
//     return us2.age - us1.age;
// });
// console.log(sort);


//8 sort порівняння стрінги
// let sort = users.sort((usr1, usr2) => {
//     if(usr1.name > usr2.name){
//         return 1
//     } if (usr1.name < usr2.name){
//         return -1
//     } if (usr1.name === usr2.name){
//         return 0
//     }
// });

let users = [
    {name: 'Ivan', age:50, status: true},
    {name: 'Bogdana', age:14, status: true},
    {name: 'Igor', age:42, status: true},
    {name: 'Ira', age:30, status: true}, 
 ];
//9 reduce 
// let reduce = users.reduce((acc, user) => {
//     if(user.status) {
//         acc.statT.push(user);
//     } else {user.status
//         acc.statF.push(user);
//     } return acc
// }, {statT: [], statF: []});
    
// console.log(reduce)

// let reduce = users.reduce((accum, user) => {}, {});

// let reduce = users.reduce((accum, user)=>{
//     if(user.status){
//         accum.statT.push(user)
//     } else {accum.statF.push(user)}
// }, {statT: [], statF: []});
