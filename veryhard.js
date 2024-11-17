class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        console.log("Lets go on a run!");
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`);
    }
}
class Programmer extends Person {
    constructor(name,job, age, language){
        super(name,job,age);
        this.languages = languages;
        this.busy = true;
    }
    completeTask(){
        this.busy = false;
    };
    acceptNewTask(){
        this.buy = true;
    };
    offerNewTask(){
        if(this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }
    learnLanguage(newSkill){
        this.language.push(newSkill);
    }
    listLanguage(){
        console.log(this.language);
    }
}