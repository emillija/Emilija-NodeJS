module.exports = (people,age) => {
    let counter = 0;
  
    people.forEach(person => {
      if (person.age < age) {
        counter++;
        console.log(`Name ${person.name}, LastName: ${person.lastname}`);
      }
    
    });
    
    console.log('We found ' + counter + ' minors.');
  };
