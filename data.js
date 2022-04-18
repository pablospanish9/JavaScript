export let workers = [
    { name:"Claire", age: "51 ", level: "10",price:"120" },
    { name:"Robert", age: "60", level: "8",price:"85" },
    { name:"Mia", age: "45", level: "5",price:"70" },
    { name:"Anna", age: "32" , level: "6", price:"80" },
    { name:"Lukas", age: "28 ", level: "7",price:"65" },
   
   
]

//this is my getAll method, assign the entire array to a new variable, 
//and export this new variable.
export let myWorkers = workers
console.log (myWorkers)
// console.log (workers)

export function getItem(n){
let found = myWorkers.find((worker) => {
    return worker.name === n;
});
console.log(found);
console.log(n);
}

