let arr = [10, 20, 30, 44, 55];
console.log(arr);

console.log(arr.push('New celement'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('!!!'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

let join = arr.join(';');
console.log(join);

let arr2 = [66, 77, 88]
let concat = arr.concat(arr2);
console.log(concat);
console.log(concat.reverse());

console.log(concat)
let slice = concat.slice(0, 4);
console.log(slice);
console.log(concat);

let splice = concat.splice(0, 4, '!!!!', '@3@#$$', 'What is it?');
console.log(splice);
console.log(concat);
concat.splice(concat.indexOf(4), 1)
// з 4 індекса видалить 1

console.log(concat.includes(11));
console.log('hello okten'.includes('ok'));
// Шукає чи є вкладання, в цьому випадку 'ok'


