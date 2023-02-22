//* syntactic sugar

class Instructor{
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);


const solaiman = new  Instructor('Solaiman Khan', 'Dhaka');
console.log(solaiman);


class Vehicle{
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;

    }
    getName(){
        return this.make + " " + this.model; 
    }

}

const car = new Vehicle('Toyota', 'Corolla', 'Black');
console.log(car);