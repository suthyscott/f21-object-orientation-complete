const person = {
    firstName: "Scott",
    lastName: 'Sutherland',
    age: 24
}

// console.log(person.firstName)
// console.log(person['lastName'])

const meal = {
    appetizer: "Bread, balsamic vinegar and olive oil",
    entree: "Chicken Parmesan",
    dessert: "Lava Cake",
    drink: "Sparkling Water"
}

// Making a new variable called dessert, whose value comes from the dessert property on the meal object.
const {dessert} = meal
// const dessert = meal.dessert

const {appetizer, entree} = meal

// Aliasing/destructuring
// const {drink: myDrink} = meal
// const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal


// console.log(myDessert, myEntree, myAppetizer, myDrink)

// for (const key in person){
//     // console.log(person[key])

//     // Console.log these two things to see both the values and the property names.
//     console.log(key, person[key])

//     // checking the object values
//     if(person[key] === "Sutherland"){
//         console.log('this is the last name;', person[key])
//     }

//     // checking the object properties
//     if(key === 'lastName'){
//         console.log('this is the last name;', person[key])

//     }
// }


person.job = 'Foundations Instructor';

person['pet'] = 'Schnauzer'
// console.log(person)

delete person.pet


    /*
        let this = {}
    */

class Dog {    
    constructor(dogName, dogBreed, dogAge){
        console.log('Dog class', dogName, dogBreed, dogAge)
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;

        this.toys = []
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}`)
    }

    addToy(toy){
        this.toys.push(toy)
    }
}

// const lassie = new Dog('Lassie', 'Collie', 10)
// const beethoven = new Dog('Beethoven', 'St. Bernard', 12)
// lassie.greeting()
// console.log(lassie)

// lassie.addToy('rubber bone')

// console.log(lassie)

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, puppyTrainingLevel){
        console.log("Puppy class",dogName, dogBreed, dogAge, puppyTrainingLevel)
        super(dogName, dogBreed, dogAge)

        this.trainingLevel = puppyTrainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
    }

    greeting(){
        super.greeting()
        console.log("And I am a puppy!")
    }
}

const leo = new Puppy("Leo", 'Labradoodle', 1, 0)

// leo.greeting()
// leo.levelUp(2)
// console.log(leo)