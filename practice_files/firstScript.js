// for (i=0; i<10; i++){
//     console.log('Hello from first script!!!!')
// }

// ES5 syntax
function fullName(title, first, last) {
    if (!title) { title = 'Honorable')
    return title + " " + first + " " + last;
}

// ES6 syntax
const fullName = (title='Honorable, first, last) => {
return \`${title} ${first} ${last}\`}
}

// function func() {
//     if (true) {
//         var tmp = 123;
//     }
//     console.log(tmp); // prints 123
// }