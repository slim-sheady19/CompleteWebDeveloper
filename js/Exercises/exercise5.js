// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const excitedArray = [];

const newArray = array.forEach(user => {
      excitedArray.push(user.username + '!');
})
console.log('excited array', excitedArray);
//OK

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArrayQuestionMark = array.map(user => {
    return user.username + '?';
})
console.log('array question mark', mapArrayQuestionMark);


//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
  return user.team === 'red';
})
console.log('filter array', filterArray);



//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, user) => {
  return user.score + accumulator;
}, 0);
console.log('reduce array', reduceArray);


// (1), what is the value of i?
//the array index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//2 just remmove the console log and alert

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
