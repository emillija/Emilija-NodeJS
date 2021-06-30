const http = require('http');


const server = http.createServer(); 


server.on('request', function (request, response) {
    response.write('Hello ');
    response.write('Hello ');
    response.write('This is... '); 
    
  
    
    let data = JSON.stringify({id: 7, name: 'Emilija', lastName: "Stamenkovska", years: 20, email: "emily@blabla.com"}); 
    response.end(data); 
    response.end('ups'); 
});

server.listen(1112, function () {
    console.log('Listening on port ****...');
});



http.get('http://localhost:1112/', (request) => { 
    let data = ''; 
    request.on('data', (chunk) => { 
        data += chunk;
    });
    request.on('end', () => { 
        console.log(data);
    });
})
    .on('error', (error) => {
       console.log(error);
    });



// console.log(require('http').STATUS_CODES); 
//1xx = INFORMATION 
//2xx = SUCCESS
//3xx = REDIRECT
//4xx = CLIENT ERROR(404 not found)
//5xx = SERVER ERROR


