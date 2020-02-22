const faker = require ('faker')
const fs = require('fs');
const { performance } = require('perf_hooks');

var filename = 'reports.csv'
for (var i=0; i< 10000000; i++) {
    var id = i;
    var imageReport = faker.random.number();
    var string = ` ${id}, ${imageReport}\n`
    fs.appendFileSync(filename, string)
}