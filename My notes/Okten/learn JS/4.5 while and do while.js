let users = [
    {skills: ['html', 'js', 'Angular '], id: 1, name: 'Ivan', age:50, status: true},
    {skills: ['html', 'mysql', 'React'], id: 2, name: 'Bogdana', age:14, status: true},
    {skills: ['html', 'js', 'Angular'], id: 3, name: 'Igor', age:42, status: true},
    {skills: ['html', 'mongo', 'React'], id: 4, name: 'Ira', age:30, status: true}, 
 ];

 let i = 0;
 while (i < users.length) {
    let user = users[i];
    console.log(user)
    i++;
 }

 do {
    console.log('Test server, test'); 
    //спочатку виконується do а потім while якщо він true
 } while (false)