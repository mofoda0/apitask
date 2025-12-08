class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    info(){
        console.log(`Brand: ${this.brand},
                     Model: ${this.model
                     }`);
    }
}

class ElectricCar extends Car{
    constructor(brand, model, battery){
        super(brand, model);  
        this.battery = battery;
    }

    info(){
        console.log(
            `Brand: ${this.brand},
             Model: ${this.model},
             Battery: ${this.battery
            }`);
    }
}
