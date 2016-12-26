var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'myblog'
});
exports.query = function (sql, param, callback) {
    pool.getConnection(function (err,connection) {
        connection.query(sql, param, function (err, rows) {
            if(err){
                throw err;
            }
            callback && callback(rows);
            connection.release();
        })
    });
};