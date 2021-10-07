# mongodb-express-req [![Build Status](https://travis-ci.org/floatdrop/mongodb-express-req.svg?branch=master)](https://travis-ci.org/floatdrop/mongodb-express-req)

> Get db connection in request


## Install

```
$ npm install --save mongodb-express-req
```


## Usage

```js
var app = require('express')();

var expressMongoDb = require('mongodb-express-req');
app.use(expressMongoDb('mongodb://localhost/db_name'));

app.get('/', function (req, res, next) {
	// req.db => Db object
  req.db.collection('collection_name').insertOne({ email, password })
});
```


## API

### expressMongoDb(uri, [options])

#### uri

*Required*  
Type: `string`

[Connection string uri](http://docs.mongodb.org/manual/reference/connection-string/).

#### options

All options from [MongoClient](http://mongodb.github.io/node-mongodb-native/2.0/api/MongoClient.html) are accepted as well.

##### property

Type: `String`  
Default: `db`

Property on `request` object in which db connection will be stored.


## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop), [Dev Singh](http://github.com/devksingh4), [Roman Shmigelsky](http://github.com/roman-sh)
