import config from '../../config.json'
const confi = require('../package.json');
const fs = require('fs');
const url = process.env;

if (!url.HOME_PAGE) {
    throw Error("MISSING API_BASE_URL")
} else {
    config.homepage = {
        "BASE_URL": url.HOME_PAGE
    }
}

const newPack = Object.assign(config.homepage,JSON.parse(confi));
console.log(newPack);
/* fs.writeFile(`${__dirname}/package.json`, JSON.stringify(config, null, 4), cb => {
    if (cb) {
        console.error(err);
    }
}); */