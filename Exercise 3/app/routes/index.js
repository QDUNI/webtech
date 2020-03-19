var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

router.get("/search", function (req, res, next) {
  res.render("pages/search", { title: "Search courses" });
});

module.exports = router;
