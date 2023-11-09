let user = {
    id: 1,
    name: 'Vasya',
    tatus: true,
    skils: [],
}
// for in переберає об'єкти.

for(let fieldName in user){
    // console.log(fieldName);
    console.log(fieldName, user[fieldName]);
}

//існує масив, як перебрати його кожне поле?
//цикл в середині циклу.

let users = [
    {skills: ['html', 'js', 'Angular '], id: 1, name: 'Ivan', age:50, status: true},
    {skills: ['html', 'mysql', 'React'], id: 2, name: 'Bogdana', age:14, status: true},
    {skills: ['html', 'js', 'Angular'], id: 3, name: 'Igor', age:42, status: true},
    {skills: ['html', 'mongo', 'React'], id: 4, name: 'Ira', age:30, status: true}, 
 ];

 for (let user of users){
    for(let fieldName in user){
        console.log(fieldName, user[fieldName]);
    }
    console.log('');

 }