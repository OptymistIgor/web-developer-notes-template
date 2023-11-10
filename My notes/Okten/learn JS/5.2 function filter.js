function userFilter(users) {
    let filteredUsers = [];
    for (let user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

let users = [
    {skills: ['html', 'js', 'Angular '], id: 1, name: 'Ivan', age:50, status: true},
    {skills: ['html', 'mysql', 'React'], id: 2, name: 'Bogdana', age:16, status: true},
    {skills: ['html', 'js', 'Angular'], id: 3, name: 'Igor', age:42, status: true},
    {skills: ['html', 'mongo', 'React'], id: 4, name: 'Ira', age:30, status: true}, 
 ];

 let filter = userFilter(users);
 console.log(filter);
