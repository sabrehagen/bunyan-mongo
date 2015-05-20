var mongoCol    = require('mongo-col'),
    mongoStream = require('mongo-stream');

function BunyanMongo(options) {
    options = options || {};

    this.mongodb_ip   = options.mongodb_ip   || 'localhost';
    this.mongodb_port = options.mongodb_port || 27017;
    this.error        = options.error        || function(){};

    this.safe = options.hasOwnProperty('safe') ? options.safe : true;

    var mongoInsertStream = mongoStream(mongoCol('piped-collection', null, { dbOptions: { safe: this.safe } }));

    return mongoInsertStream.insert({
        safe: this.safe
    });
}

module.exports = BunyanMongo;
