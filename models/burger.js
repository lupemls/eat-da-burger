const orm = require('../config/orm');

const burger = {
    selectAll: cb => {
        orm.selectAll('burgers', result => {
            cb(result);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne('burgers', cols, vals, (result) => {
            cb(result);
        });
    },
    updateOne: (cols, condition, cb) => {
        orm.updateOne('burgers', cols, condition, (result) => {
            cb(result);
        });
    }

}

module.exports = burger;