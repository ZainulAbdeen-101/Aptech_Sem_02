class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(` ${this.name}  ${this.age}`);
  }
}

const intro = new Person("Sameer faisal", 28);
intro.introduce();
