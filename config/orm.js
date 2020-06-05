var connection = require("../config/connection.js");

const printQuestions = (num) => {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

const makeStatement = (obj) => {
    let result;
    for(key in obj) {
        result = `${key} = ${obj[key]}`;
    }

    return result;
}

// Object for all our SQL statement functions.
const orm = {
    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestions(vals.length)})`;

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: (table, cols, condition, cb) => {
        const queryString = `UPDATE ${table} SET ${makeStatement(cols)} WHERE ${condition}`;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;
