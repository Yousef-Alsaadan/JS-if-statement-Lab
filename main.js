//Q1
var eatsPlants = false;
var eatsAnimals = true;

var output = eatsPlants || eatsAnimals ? "omnivore" : 
eatsPlants || eatsAnimals ? "carnivore" : 
eatsPlants || eatsAnimals ? "herbivore" : "undefined";


console.log('(' + eatsPlants + ', ' + eatsAnimals + ', ' + output + ')');


//Q2
var musicians = 1;

if (musicians <= 0) {
    console.log('not a group');
} else if (musicians == 1) {
    console.log('solo');
} else if (musicians == 2) {
    console.log('duet');
} else if (musicians == 3) {
    console.log('trio');
} else if (musicians == 4) {
    console.log('quartet');
} else if (musicians > 4) {
    console.log('this is a large group');
} else{
    console.log('uncorrect values');
}


//Q3
var room = 'billiards room';
var suspect = 'Mr. Parkes';
var weapon = '';
var solved = false;


//Q4
var balance = -325;
var checkBalance = true;
var isActive = true;

if (checkBalance === true){
    if (isActive === true){
        console.log('Your balance is: ' + balance);
    } else{
        console.log('Your account is not active');
    }
} else{
    console.log('You not allowed to check your balance');
}


//Q5
var flavor = 'vanilla';
var vessel = 'bowl';
var toppings = 'peanuts';

if (flavor === "vanilla" || flavor === "chocolate"){
    if (vessel === "cone" || vessel === "bowl"){
        if (toppings === "sprinkles" || toppings === "peanuts") {
            console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
        }
    }
}