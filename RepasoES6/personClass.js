class Person {
    constructor(name,age,job){
        this.name= name;
        this.age= age;
        this.job = job;
    }

    show(){
        return `Hello ${this.name}`;
    }
}

const person = new Person('Ana', 25, 'Teacher');
console.log(`name: ${person.name}`);
console.log(person.show());