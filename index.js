class Jungle {
    constructor(name, animals) {
        this.name = name
        this.animals = []
        this.foods = ["GRAINS","MEAT","FISH"]
        this.actions = ["Speak","Eat","Sleep","Play"]
        this.data = animals
    }
   
    init(){
       console.log(`Welcome to the ${this.name} Jungle!!!`)
       this.data.forEach(animal => {
        switch(animal.specie) {
            case "Tiger":
              this.animals.push(new Tiger(animal.name, animal.sex))
              break;
            case "Monkey":
              this.animals.push(new Monkey(animal.name, animal.sex))
              break;
            case "Snake":
              this.animals.push(new Snake(animal.name, animal.sex))
              break;
            default:
              this.animals.push(new Animal(animal.name, animal.sex))
          }
       })
    }

    soundOff(){
        console.log("\nAll animals will sound off!!!")
        this.animals.forEach(animal => {
            animal.speak()
        })
    }

    doRandomAction(){
        console.log("\nJungle will do random actions!!")
        this.animals.forEach(animal => {
            switch(this.getRandom(this.actions)) {
                case "Speak":
                  animal.speak()
                  break;
                case "Eat":
                  animal.eat(this.getRandom(this.foods))
                  break;
                case "Sleep":
                  animal.sleep()
                  break;
                case "Play":
                  if(animal instanceof Monkey){
                    animal.play()
                  } else {
                      console.log(`this animal ${animal.name} cannot play`)
                  }
                  break;
                default:
                  return false
            }
        })
    }

    getRandom(array){
      return array[Math.round(Math.random() * (array.length - 1))]
    }
}

class Animal {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
        this.energy = 0
    }

    speak(){
        this.energy -= 3
    }

    sleep(){
        this.energy += 5
    }

    eat(){
        this.energy += 10
    }
}

class Tiger extends Animal {
    constructor(name, sex){
        super(name, sex)
    }

    speak(){
        super.speak()
        console.log(`${this.name} the tiger roars. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    sleep(){
        super.sleep()
        console.log(`${this.name} the tiger sleep. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    eat(food){
        if(food === "GRAINS"){
            console.log(`${this.name} the tiger try to eat ${food} and says: I cant it that!. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
        }
        else{
          super.eat()
          console.log(`${this.name} the tiger is eating ${food}. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
        }
    }
}

class Monkey extends Animal {
    constructor(name, sex){
        super(name, sex)
    }

    speak(){
        this.energy -= 4
        console.log(`${this.name} the monkey scream. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    sleep(){
        super.sleep()
        console.log(`${this.name} the monkey sleep. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    eat(food){
        this.energy += 2
        console.log(`${this.name} the monkey is eating ${food}. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
    }

    play(){
       if (this.energy >= 8) {
         this.energy -= 8
         console.log(`${this.name} the monkey is playing and scream: Oooo Oooo Oooo. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
       } else {
         console.log(`${this.name} the monkey try to play and scream: I’m too tired. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
       }
    }
}

class Snake extends Animal {
    speak(){
        super.speak()
        console.log(`${this.name} the snake is hissing. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    sleep(){
        super.sleep()
        console.log(`${this.name} the snake sleep. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy}`);
    }

    eat(food){
        super.eat()
        console.log(`${this.name} the snake is eating ${food}. ${this.sex === "Male" ? "His" : "Her"} current energy is ${this.energy} `);
    }
}

function main(){
    const animals = [{
                       name: "Dodo",
                       sex: "Male",
                       specie: "Monkey"
                     },
                     {
                        name: "Molly",
                        sex: "Male",
                        specie: "Snake"
                      },
                      {
                        name: "Bella",
                        sex: "Female",
                        specie: "Tiger"
                      }
                    ]
    const jungle = new Jungle("Amazonas", animals)
    jungle.init();
    jungle.soundOff();
    jungle.doRandomAction();
}
 
 main()
