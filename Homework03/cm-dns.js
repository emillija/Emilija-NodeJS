const dns = require('dns');


dns.lookup('google.com', (err, value) => {
    if(err) {
        console.log("errorrrr");
        return;
    };

    console.log(value); 
})


dns.resolve('wikipedia.com', function onLookup(err, address) { 
    console.log(`Address: ${address}`);
    if(err) {
        console.log('errrorrr');
    };
});


dns.resolve('google.com', 'MX', (err, value) => { //mx = mail exchange records
    if(err) {
        console.log(err);
        return;
    };

    console.log(value);
});




dns.reverse('8.8.8.8', (err, value) => { //dokolku sakame da go doznaeme OWNerot na IP adresa
        if(err) {
            console.log('errorrrrrrrrrr');
            return;
        };
    
        console.log(value); //IP adresata na domenot
    });




dns.resolve('archive.org', (err, address) => {
    if (err) 
        throw err;
    console.log(`ip address: ${JSON.stringify(address)}`);
  
    address.forEach( (add) => {
      dns.reverse(add, (err, hostnames) => {
        if (err) {
          throw err;
        }
        console.log(`reverse for ${add} is ${JSON.stringify(hostnames)}`);
      });
    });
  });