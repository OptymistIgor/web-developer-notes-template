 let users = [
    {skills: ['html', 'js', 'Angular '], id: 1, name: 'Ivan', age:50, status: true},
    {skills: ['html', 'mysql', 'React'], id: 2, name: 'Bogdana', age:14, status: true},
    {skills: ['html', 'js', 'Angular'], id: 3, name: 'Igor', age:42, status: true},
    {skills: ['html', 'mongo', 'React'], id: 4, name: 'Ira', age:30, status: true}, 
 ];
 console.log(users);
 console.log(users[0]);
 console.log(users[0].age);


let user0 = users[0];

 console.log(user0.age);
 console.log(user0['age']);

 
 console.log(users[0].skills[2]);
 console.log(users['skills'][2]);
 console.log();

 
