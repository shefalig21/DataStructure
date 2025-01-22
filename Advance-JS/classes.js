//class: classes are templhates for creating object.

class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }

    greet()
    {
        console.log(`Hello,my name is: ${this.name} and age is : ${this.age}`);
    }
}

let shefu=new Person("Shefali",21);
shefu.greet();
