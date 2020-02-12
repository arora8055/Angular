interface Animal {
    name : string;
    whoAmI() : void;
}

interface Mammal {
    brushHair() : void;
}

interface wingedAnimal {
    fly() : void;
}

class Bat implements Animal , Mammal , Animal {
    name :string;

    constructor(name : string){
        this.name = name;
    }

     whoAmI() : void {
        console.log('My name is '+this.name);   
    }

    brushHair() : void {
        console.log('I must brush my hair to look pretty');
    }
    fly() : void {
        console.log('Flying Jatt');
    }
}

let bat = new Bat('Aman');
bat.whoAmI();
bat.brushHair();
bat.fly();

