//#1
//Declare a variable called 'name' that has the value of your name.

var name = "molly";

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

if (name == "Ben"){
  console.log("yes")
}
else {
  console.log("no")
}

//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods

var favoriteFoods = ["chicken fingers", "brussel sprouts", "quiche", "avocado toast", "ratatouille", "turkey bacon"];

//#4
//use a for loop to log each food in the 'favoriteFoods' array

for (i=0; i<favoriteFoods.length; i++){
  console.log(favoriteFoods[i]);
}

//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name

var favoriteMovie = {runtime:112, title:"Kill Bill", director:"Quentin Tarantino"}

//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument

function sayHi(name){ //feels like I should be putting in String name but I can't see any evidence that's necessary in JavaScript
  return console.log("Hello " + name + "!");
}

//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array

function friend(name, age, vocation){
  this.name = name;
  this.age = age;
  this.vocation = vocation;
}

var Nicole = new friend("Nicole Kawamoto", "22", "Mechanical Saleslady");
var David = new friend("David Poyer", "28", "Legislative Aid");
var Sky = new friend("Sky Andersen", "25", "Finance Assistant");

var friends[Nicole, David, Sky];
//var friends[friend Nicole, friend David, friend Sky]; //this seems unnecessary but my instincts want me to ensure this is an array of object type friend

//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'

for(i=0; i<friends.length; i++){
  console.log("My friend " + friends[i].name + " is " + friends[i].age + " years old and is a " + friends[i].vocation + " for work.");
  //or maybe document.Write()
}

//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor

function User(email, password){
  this.email = email;
  this.password = password;
}

//not sure if i'm supposed to be doing more with this one

//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively

function nFactorial(num){
  //error
  if (num < 0){
    return null;
  }
  //base case
  else if (num == 0){
    return 1;
  }
  //recursive call
  else {
    return (num * nFactorial(num-1));
  }

