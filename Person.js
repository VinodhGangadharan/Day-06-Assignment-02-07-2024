//Write a Person class to hold all the details

class Person {

  constructor(firstName, lastName, age, department, email, mobile, city)
  {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.department=department;
      this.email=email;
      this.mobile=mobile;
      this.city = city;
  }
  getpersonDetails()
  {
      return `Name: ${this.firstName} ${this.lastName}
      age: ${this.age}
      department: ${this.department}
      email: ${this.email}
      mobile: ${this.mobile}
      city: ${this.city}`;
  }
}
const person1 = new Person("Rahul", "Raj",30, "IT-Technology", "abcrahul@gmail.com", 9876543210, "Chennai");
const person2 = new Person("Shyam","Kumar", 31, "Admin", "abcshyam@gmail.com", 8967453210, "Coimbatore");

console.log(person1.getpersonDetails());
console.log(person2.getpersonDetails());

/*Output:

      Name: Rahul Raj
      age: 30
      department: IT-Technology
      email: abcrahul@gmail.com
      mobile: 9876543210
      city: Chennai

      Name: Shyam Kumar
      age: 31
      department: Admin
      email: abcshyam@gmail.com
      mobile: 8967453210
      city: Coimbatore
      
      */