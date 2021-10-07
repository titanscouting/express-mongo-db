'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = (uri, opts) => {
	if (typeof uri !== 'string') {
		throw new TypeError('Expected uri to be a string');
	}

  var dbName = /(?<=\/)\w*(?=\?)/.exec(uri)?.toString() || /(?<=\/)\w*(?=$)/.exec(uri)?.toString()
  if (!dbName) {
		throw new Error('Database name not found in connection string');
	}

	opts = opts || {};
	var property = opts.property || 'db';
	delete opts.property;

	var connection;

	return function expressMongoDb(req, res, next) {
		if (!connection) {
			connection = MongoClient.connect(uri, opts);
		}

		connection
			.then(function (db) {
				req[property] = db.db(dbName);
				next();
			})
			.catch(function (err) {
				connection = undefined;
				next(err);
			});
	};
};
