var express = require('express');
var router = express.Router();

router.get('/search',function(req,res,next){
	res.render('search',{title:'Community Network | Search',header:false,navbar:true});
});

module.exports = router;