function person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    let person1 = new person ("Ankit", "Singh");
    let person2 = new person ("Kunal", "Singh"); 
    
    console.log(person1.firstName); 
    console.log('${person2.firstName} ${person2.lastName}');
