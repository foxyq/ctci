const h = require("./3.0-helper");

class Shelter {
  constructor() {
    this.dogs = new h.Queue();
    this.cats = new h.Queue();
    this.all = new h.Queue();
    this.tmp = new h.Queue();
  }

  addDog(animal) {
    this.dogs.add(animal);
  }

  addCat(animal) {
    this.cats.add(animal);
  }

  addAll(animal) {
    this.all.add(animal);
  }

  addAnimal(animal) {
    if (animal.type === "dog") {
      this.addDog(animal);
    } else if (animal.type === "cat") {
      this.addCat(animal);
    }

    this.addAll(animal);
  }

  removeType(type) {
    let queueToRemoveFrom = "";

    if (type === "dog") {
      queueToRemoveFrom = this.dogs;
    } else if (type === "cat") {
      queueToRemoveFrom = this.cats;
    }

    while (!this.all.isEmpty() && this.all.peek().type !== type) {
      this.tmp.add(this.all.remove());
    }

    const removedAnimal = this.all.remove();
    queueToRemoveFrom.remove();

    while (!this.all.isEmpty()) {
      this.tmp.add(this.all.remove());
    }

    while (!this.tmp.isEmpty()) {
      this.all.add(this.tmp.remove());
    }

    return removedAnimal;
  }

  removeDog() {
    return this.removeType("dog");
  }

  removeCat() {
    return this.removeType("cat");
  }

  removeAll() {
    return this.all.remove();
  }

  removeAnimal() {
    const a = this.all.peek();

    if (a.type === "dog") {
      this.removeDog();
    } else if (a.type === "cat") {
      this.removeCat();
    }

    return a;
  }
}

const shelter = new Shelter();

shelter.addDog;

shelter.addAnimal({ type: "dog", name: "shanti" });
shelter.addAnimal({ type: "dog", name: "jessi" });
shelter.addAnimal({ type: "cat", name: "donna" });
shelter.addAnimal({ type: "dog", name: "dunco" });
shelter.addAnimal({ type: "cat", name: "cunda" });
shelter.addAnimal({ type: "cat", name: "shiaomi" });
shelter.addAnimal({ type: "dog", name: "grgl" });

console.log(shelter.cats);
console.log(shelter.dogs);
console.log(shelter.all);
console.log(" ");

console.log(shelter.removeAnimal(), "dog shanti");
console.log(shelter.removeCat(), "cat donna");
console.log(shelter.removeAnimal(), "dog jessi");
console.log(shelter.removeAnimal(), "dog dunco");
console.log(shelter.removeDog(), "dog grgl");
console.log(" ");

console.log(shelter.all);
