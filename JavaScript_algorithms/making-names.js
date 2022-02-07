const Person = function(firstAndLast) {
  let nameArray = firstAndLast.split(" ");
  let firstName = nameArray[0];
  let lastName = nameArray[1];

  this.getFullName = function() {
    return firstName.concat(" " + lastName);
  };
  
  this.getFirstName = function() {
    return firstName;
  }

  this.getLastName = function() {
    return lastName;
  }

  this.setFirstName = function(newFirst) {
    firstName = newFirst;
    return newFirst;
  }

  this.setLastName = function(newLast) {
    lastName = newLast;
  }

  this.setFullName = function(newFull) {
    nameArray = newFull.split(" ");
    firstName = nameArray[0];
    lastName = nameArray[1];
  }

  firstAndLast = firstName.concat(" " + lastName);
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.setFirstName('Robert');
bob.setLastName('Rosserson');
bob.setFullName('Robert Rosserson');
