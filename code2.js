function person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    let person1 = new person ("Shantanu", "Shubham");
    let person2 = new person ("Anurag", "Mishra"); 
    
    console.log(person1.firstName); 
    console.log('${person2.firstName} ${person2.lastName}');
