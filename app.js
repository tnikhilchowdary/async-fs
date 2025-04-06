const fs = require('fs');

fs.writeFile('callback.txt', 'Hello from callback.txt', (err) => {
    if(err){
        return console.error('Write Error:', err);
    }
    console.log("File Written Successfully");

    fs.readFile('callback.txt', 'utf8', (err, data) => {
        if(err){
            console.log('Read Error:', err);
            return;
        }
        console.log('File Content: ', data);
    });
});


//promises
const fsPromises = require('fs').promises;

fsPromises.writeFile('promise.txt', 'Hello from promise.txt')
.then(() => {
    console.log('File Written Successfully');
    return fsPromises.readFile('promise.txt', 'utf8');
})

.then((data) => {
    console.log('File Content: ', data);
})

.catch((err) => {
    console.error('Error:', err);
})


//async/await


const fs1 = require('fs').promises;

const fileOperations = async () => {
    try {
        // Writing to file
        await fs1.writeFile('example.txt', 'Hello This is written using async/await!');
        console.log("File Written Successfully");

        // Reading from file
        const data = await fs1.readFile('example.txt', 'utf8');
        console.log('File Content:', data);

        // Appending to file
        await fs1.appendFile('example.txt', '\nThis is appended text!');
        console.log('File Appended Successfully');

        // Renaming the file
        await fs1.rename('example.txt', 'renamed_example.txt');
        console.log('File Renamed Successfully');

        // Deleting the file
        await fs1.unlink('renamed_example.txt');
        console.log('File Deleted Successfully');
    } catch (err) {
        console.log(' Error:', err.message);
    }
};

fileOperations();
