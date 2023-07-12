const coder = {
    isCoding: false,
    printIntroduction: function () {
        console.log('My name is ${this.name}. Am I Coding?: ${this.isCoding}'); 
    },
};
const me = Object.create(coder);
me.name = "Ankit Singh";

me.isCoding = true;
me.printIntroduction();
