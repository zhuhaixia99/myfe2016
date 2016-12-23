var blogModel = require('../models/blogModel');
exports.adminIndex = function (req, res) {
    res.render('adminIndex',{user:req.session.loginUser});
};
exports.blogType = function (req, res) {
    var userId = req.session.loginUser.user_id;
    blogModel.queryAllTypes(userId, function (result) {
            res.render('blogType',{
                user: req.session.loginUser,
                types: result
            });
    });
};
exports.addBlogType = function (req, res) {
    var typeName = req.body.typeName;
    if(typeName!= ''){
        var userId = req.session.loginUser.user_id;
        blogModel.saveType(userId, typeName, function (result) {
            if(result.affectedRows>0){
                res.redirect('/blogType');
            }else{
                res.redirect('/addBlogType');
            }
        });
    }

};
exports.newBlog = function (req, res) {
    var userId = req.session.loginUser.user_id;
    blogModel.queryAllTypes(userId,function (result) {
            res.render('newBlog',{
                user: req.session.loginUser,
                types:result
            });
    });

};
exports.addBlog = function (req, res) {
    var userId = req.session.loginUser.user_id;
    var title = req.body.title;
    var typeId = req.body.typeId;
    var content = req.body.content;
    /*console.log("typeId: "+typeId);*/
    if(title!=""||content!=""){
        blogModel.saveBlog(userId, title, typeId, content,function (result) {
            if(result.affectedRows>0){
                res.redirect('/blogs');
            }else {
                res.redirect('/newBlog');
            }
        });
    }

};
exports.listBlogs = function (req, res) {
    var userId = req.session.loginUser.user_id;
    blogModel.queryBlogs(userId, function (result) {
        res.render('blogs',{
            user: req.session.loginUser,
            blogs: result
        });
    });

};