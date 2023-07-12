let person = {
    firstName: "Shantanu",
    lastName: "Shubham",
     
    getFullName: function () {
      return 'The name of the person is ${person.firstName} ${person. lastName}` ;
    },
    phoneNumber: {
      mobile: "12345",
      landline: "6789",
    },
};
    console.log(person.getFullName());
    console.log(person.phoneNumber.landline);
