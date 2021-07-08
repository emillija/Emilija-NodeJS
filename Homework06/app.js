 const express = require('express');


 const app = express();
 app.use(express.json());


 
const medical_practitioners = [
    {
        Name: "James Joe Dwane",
        Id: 1,
        Speciality: "Cardiologists",
        Role: "Physician associate",
        City: "San Francisco"
    },
    {
        Name: "Alexander Hernandez",
        Id: 2,
        Speciality: "General Surgeon",
        Role: "Surgical practitioner",
        City: "Los Angeles"
    },
    {
        Name: "Joseph Wilson",
        Id: 3,
        Speciality: "Anesthesiologists",
        Role: "Physician associate",
        City: "Seattle"
    },
    {
        Name: "Katherine Lee Moore",
        Id: 4,
        Speciality: "Orthopaedics",
        Role: "Surgical care practitioner",
        City: "San Diego"
    },
    {
        Name: "Peter Adams",
        Id: 5,
        Speciality: "Urologists",
        Role: "Surgical care practitioner",
        City: "Washington, D.C."
    },
];


app.get('/', (req, res) => {

    res.send(medical_practitioners);

});



app.post('/medical_practitioners', (req, res) => {
    
    console.log(req.body);
    
    medical_practitioners.push(req.body);
    
    res.send(medical_practitioners);
});



app.get('/medical_practitioners/id', (req, res) => {

    let id = req.body.Id;  

    const getId =  medical_practitioners.filter( (getId) => {
        return getId.Id === id;
    });

    res.send(getId); 
});



 app.listen(4000, err => {

    if (err) {
       return console.log ('Error', err)
    };

     console.log('Listening to port ****...');
});
 


    
  



