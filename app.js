//Step 1 - create an object
const donaldDuck = {
    createdBy: 'Walt Disney',
    name: 'Donald Duck',
    nickname: 'Don',
    species: 'Duck',
    gender: 'Male',
    significantOther: 'Daisy Duck'

};
//Step 2 print name to console
console.log(donaldDuck.name);

//Step 3 add a new property
donaldDuck.canFly = false;

//Step 4 add a new method
// You are almost there this is a function, you need a METHOD.
const dack = {
    say() {
        return "DACK DACK! Is this what a duck sounds like?";
    }
};

console.log(dack.say());

//Step 5 add another method
donaldDuck.sayHello = function () {
    console.log(this.name);
};

//Step 6 call new method
donaldDuck.sayHello();

//Step 7 modify ducks name property
donaldDuck.name = "Duck McDuckFace";

donaldDuck.sayHello();

//Step 8 add another method with if/else
donaldDuck.fly = function() {
    if (this.canFly == true) {
    console.log("I can fly!");
    } else {
    console.log("No flying for me!")
    }
};

// Step 9 call the method
donaldDuck.fly();

//Step 10 modify property
donaldDuck.canFly = true;

//Step 11 call the method again with new property value
donaldDuck.fly();
