const fs = require('fs');

//ASYNC methods, we fire a callback function when this is done

// reading files
// Async, not block the code
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files

fs.writeFile('./docs/blog1.txt', 'Hello, world!!', ()=>{
    console.log('file was written');
})

fs.writeFile('./docs/blog2.txt', 'Hello again', ()=>{
    console.log('file was written');
})

// directories

if (!fs.existsSync('./assets')){ //Sync block the code
    fs.mkdir('./assets', (err)=>{
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else{
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}