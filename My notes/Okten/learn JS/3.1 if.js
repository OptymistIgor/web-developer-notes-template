
// if(color === 'red'){
    //     console.log("Stop!");
    // } else {
        //     console.log("Go!");
        // }
let color = prompt('Enter color');

if(color === 'red'){
    console.log("Stop!");
}else if (color === 'green' && confirm('Is road clear?')) {
    // if (confirm('Is road clear?')){
    //     console.log('go!')
    // }else {
    //     console.log('just wait!')
    // }
    console.log("Go!");
}else if (color === 'yellow'){
console.log("Wait!");
}else {
    console.log('????'); 
}
