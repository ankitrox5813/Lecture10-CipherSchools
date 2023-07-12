let person = {
    firstName: "Ankit",
    lastName: "Singh",
     
    getFullName: function () {
      return 'The name of the person is ${person.firstName} ${person. lastName}` ;
    },
    phoneNumber: {
      mobile: "764586",
      landline: "4586",
    },
};
    console.log(person.getFullName());
    console.log(person.phoneNumber.landline);
