// Buffer gi cita podatocite kako binarni broevi
// Niza od celi broevi koi sekoj od niv pretstavuvaat byte na podatoci

// const buff = Buffer.from('Helloooo');

// console.log(buff);

// console.log(buff[0]);

// console.log(buff[1]);

// console.log(buff[2]);

// console.log(buff.toString())





const buf = Buffer.alloc(8); // so alloc kje isprinta 8 bajti 
buf.write('Hey!'); //4 bajti
console.log(buf);

buf[0] = 12; 
console.log(buf.toString());




// const buffer2 = Buffer.from ( [1, 4, 7, 2, 8, 9] );
// console.log(buffer2); 



// const buffer3 = Buffer.from('blablabla...')
// console.log(buffer3);
// console.log(buffer3.toString());

