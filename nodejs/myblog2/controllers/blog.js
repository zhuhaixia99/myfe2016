exports.viewPost = function (req, res) {
    res.render('viewPost',{user:req.session.loginUser});
};
