const fs = require('fs')




const file = 'file.txt';


//kopira file
fs.copyFile(file, 'newFile.txt', (err) => {
        if (err){
             console.log(err);
            }
        });
        
const newFile = 'newFile.txt';



//menuva ime na file
fs.rename(newFile, 'renamedFile.txt', (err) => {
    if (err) {
     console.error(err)
    };
});



//dodava tekst vo file
fs.writeFile('renamedFile.txt', 'random text', (err) => {
    if(err) {
        console.log(err);
    };
});


//kreira direktorium
const folder = "newFolder";
fs.mkdir(folder, err => {
    if(err) {
        console.log(err);
    };
});


//brise direktorium
fs.rmdir(folder, err => {
    if(err) {
        console.log(err)
    }
})