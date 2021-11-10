
// ES7
// .includes method: check for a specific element in an array or a char in a string
// **2 = squared
// e.g. x**2 = x^2

//ES8
// .padStart and .padEnd string methods
// can leave an ending comma in function declarations without getting an error

//Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

//print the list of usernames in the format 'username0 Santa'
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

//print just the values
Object.values(obj).forEach(value => {
    console.log(value);
})

//generate an array for each key-value pair.
Object.entries(obj).forEach(value => {
    console.log(value);
})

//genereate an array of the values and remove the username word while keeping the index
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})