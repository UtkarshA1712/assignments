const fs = require('fs');


const cleanFile = (filePath) => {

    fs.readFile("example.txt", 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const cleanedContent = data.replace(/\s+/g, ' ').trim();
        console.log(cleanedContent)

        fs.writeFile("example.txt", cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
};


const filePath = 'example.txt'; 
cleanFile(filePath);
