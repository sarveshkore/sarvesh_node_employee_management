function main(req, res) {
    const fs = require('fs');
    fs.readFile("f1_created.txt", 'utf-8', (err, data) => {
        if (err) {console.log(err);}
        else{console.log(data);}
        res.send(data);
    });
}

module.exports = {
    main: main
};
