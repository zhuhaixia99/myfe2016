var db = require('./db');
exports.queryAllTypes = function (userId, callback) {
    var sql = 'select * from t_blog_type where user_id=?';
    db.query(sql,[userId],callback);
};
exports.saveType = function (userId, typeName, callback) {
    var sql = 'insert into t_blog_type(user_id, type_name) values(?,?)';
    db.query(sql,[userId,typeName],callback);
};
exports.saveBlog = function (userId, title, typeId, content, callback) {
    var sql = 'insert into t_blog(user_id, title, blog_type_id, content) values(?,?,?,?)';
    db.query(sql,[userId,title,typeId,content],callback);
};
exports.queryBlogs = function (userId, callback) {
    var sql = 'select * from t_blog where user_id=?';
    db.query(sql,[userId],callback);
};
exports.deleteBlog = function (blogIds, callback) {
    var sql = 'delete from t_blog where blog_id in ('+blogIds+')';
    db.query(sql, [], callback);//[2,6]  ["2,6"]
};