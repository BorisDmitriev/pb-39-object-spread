//1
const euroCountries = ['Germany', 'France'];
const asianCountries = ['Japan', 'Korea'];
euroCountries.push(...asianCountries);
console.log(euroCountries);

const euroCities = ['Berlin', 'Paris'];
const asiaCities = ['Tokyo', 'Seoul'];
const worldCities = [ ...euroCities, ...asiaCities ]
console.log(worldCities);

//2
const newVariable = [...asiaCities];
console.log(newVariable);

//3
const findLargestNumber = (nums) => Math.max(...nums)
console.log(findLargestNumber([1,2,3,4,5]));

//4
const findSmallestNumber = (nums) => Math.min(...nums)
console.log(findSmallestNumber([1,2,3,4,5]));

//5
const person = {name: "John"}
const job = {role: "Teacher"}
//5.1
const newPerson = {...person};
console.log(newPerson);
//5.2
const employee = {...person, ...job};
console.log(employee);
//5.3
job.role = 'Plumber';
console.log(job);
console.log(employee);

//6
const isWhole = (...integers) => {
    let sum = 0;
    for (const num of integers) {
       sum += num;
    }
    return Number.isInteger( sum/integers.length );
}
console.log( isWhole(1, 2, 3, 4) );
console.log( isWhole(9, 2, 2, 5) );



