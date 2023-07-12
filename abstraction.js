class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    addAddress(newAddress) {
        this.address = newAddress;
    }
    getDetails() {
        console.log('Name is: ${this.name}, and address is: ${this.address}');
    }
}

    let person1 = new Person("Ankit", 22);
    person1.addAddress ("Jharkhand");
    person1.getDetails();
