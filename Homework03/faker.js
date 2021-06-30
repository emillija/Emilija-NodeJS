var faker = require('faker');
const colors = require('colors');



for ( let i = 0; i < 20; i++ ) {
    var name = faker.name.firstName(); 
    var lastName = faker.name.lastName();
    var birthDate = faker.date.past();
    var transaction = faker.finance.routingNumber();
    var amount = faker.finance.amount();
    var id = faker.finance.account(); 
    var address = faker.address.streetAddress() + ' ' + faker.address.cityName();
    console.log(`
        ${name} ${lastName} 
        Date of birth: ${birthDate}, 
        Address: ${address} 
        ID: ${id} 
        Bank transaction: ${transaction}; Balance: ${amount}€
    `.bgBrightMagenta);
};




 