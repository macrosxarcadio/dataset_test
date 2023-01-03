const config = require('../config/config.default.json');
const fs = require('fs');
const url = process.env;

if (!url.API_BASE_URL) {
    throw Error("MISSING API_BASE_URL")
} else {
    config.api = {
        "BASE_URL": url.API_BASE_URL
    }
}

fs.writeFile(`${__dirname}/../src/config.json`, JSON.stringify(config, null, 4), cb => {
    if (cb) {
        console.error(err);
    }
});


