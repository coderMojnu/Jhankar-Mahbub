class Parent{
    constructor(){
        this.fatherName = "Mojnu";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const child1 = new Child("Mohammad");
const child2 = new Child("Raian");
console.log(child1, child2);