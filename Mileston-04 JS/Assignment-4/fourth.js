function validProposal(person1,person2) {
    if(typeof(person1) !== "object" || typeof(person2) !== "object"){
        return "Invalid"
    }
    if((person1.gender === person2.gender) || (Math.abs(person1.age - person2.age)) > 7){
        return false
    }
    return true
}

// let person1 = { name: "Rahul", gender: "male", age: 28 };
// let person2 = { name: "Joya", gender: "female", age: 21 };

let person1 = { name: "toya", gender: "female", age: 24 };
let person2 = { name: "bjoy", gender: "male", age: 25 };

// let person2 = "Mizan";
// let person1 =  {name: "mitu", gender: "male", age: 32 };


let obj = validProposal(person1,person2);
console.log(obj);

