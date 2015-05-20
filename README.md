# bunyan-mongo
[![bunyan-mongo](http://img.shields.io/npm/v/bunyan-mongo.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-mongo)
[![bunyan-mongo](http://img.shields.io/npm/dm/bunyan-mongo.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-mongo)
[![bunyan-mongo](http://img.shields.io/npm/l/bunyan-mongo.svg?style=flat-square)](https://www.npmjs.com/package/bunyan-mongo)
[![Build Status](https://img.shields.io/travis/qualitybath/bunyan-mongo.svg?style=flat-square)](https://travis-ci.org/qualitybath/bunyan-mongo)
[![Coveralls](https://img.shields.io/coveralls/qualitybath/bunyan-mongo.svg?style=flat-square)](https://coveralls.io/r/qualitybath/bunyan-mongo)
[![code climate](https://img.shields.io/codeclimate/github/qualitybath/bunyan-mongo.svg?style=flat-square)](https://codeclimate.com/github/qualitybath/bunyan-mongo)

**Bunyan stream for MongoDB integration**

First install bunyan...

```
npm install bunyan
```

Then install bunyan-mongo

```
npm install bunyan-mongo
```

##Basic Setup

```javascript
var bunyan  = require("bunyan"),
	BunyanMongo = require("bunyan-mongo"),
	log;

log = bunyan.createLogger({
	name: "myApp",
	streams: [{
        type: "raw",
        stream : new BunyanMongo({
            mongodb_ip: "your_mongodb_ip",
            mongodb_port: "your_mongodb_port",
            safe: false
        })
	}],
	level: "error"
});

log.error("hello bunyan mongo");
```
You can also pass an optional error handler.

```javascript
new BunyanMongo({
    mongodb_ip: "your_mongodb_ip",
    mongodb_port: "mongodb_listening_port",
    safe: true,
    error: function(error){
        console.log(error);
    }
});
```

###Defaults
bunyan-mongo sets the following defaults:

* `mongodb_ip` => `localhost`
* `mongodb_port` => `27017`
* `safe` => `true`


## Authors
* [Jackson Delahunt](https://github.com/sabrehagen)

***
This library was adapted from  [bunyan-slack](https://github.com/qualitybath/bunyan-slack)

The MIT License  
Copyright (c) 2015 [stemn.com](https://www.stemn.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
