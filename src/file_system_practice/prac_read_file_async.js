function main(req, res) {
    const fs = require('fs');
    fs.readFile("data_async.txt", 'utf-8', (err, data) => {
        if (err) {console.log(err);}
        else{console.log(data);}
        res.send(data);
    });
}

module.exports = {
    main: main
};
