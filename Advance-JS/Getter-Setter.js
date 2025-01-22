const person={
    firstName: "John",
    lastName: "Doe",
  
    //getter method
    get fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
  
    //setter method
    set fullName(name) {
      const [first,last]=name.split(" ");
      this.firstName=first;
      this.lastName=last;
    }
  };
  
  //using getter
  console.log(person.fullName);
  console.log("");
  //Uisng setter
  person.fullName="Cassy Smith";
  
  console.log(person.firstName); 
  console.log(person.lastName);  
  console.log(person.fullName); 
  console.log("");





  const car={
    brand: "Toyota",
    model: "Corolla",
  
    //getter method
    get fullCarName(){
      return `${this.brand} ${this.model}`;
    },
  
    //setter method
    set fullCarName(carName) {
      const parts=carName.split(" ");
      this.brand=parts[0];
      this.model=parts.slice(1).join(" "); // Handles multi-word models
    }
  };
  
  //Using getter
  console.log(car.fullCarName); //Toyota Corolla
  
  //Using setter
  car.fullCarName ="Honda Civic";
  
  console.log(car.brand);       //Honda
  console.log(car.model);       //Civic
  console.log(car.fullCarName); //Honda Civic
  
  //another setter example with a multi-word model
  car.fullCarName="Ford Mustang GT";
  
  console.log(car.brand);       //Ford
  console.log(car.model);       //Mustang GT
  console.log(car.fullCarName); //Ford Mustang GT
  