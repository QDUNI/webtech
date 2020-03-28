var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');
var session = require('express-session');

//session setup 
router.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'ssshhhhh!.th1s,1s,a:s',
    cookie: {
        maxAge: 1000 * 60 * 30,
        sameSite: true
    }
}));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/index', { title: 'Express' });
    console.log(req.session.userid);
});

router.get;

router.get("/search/:value?", function (req, res, next) {
    res.render("pages/search", { title: "Search courses", value: req.param("value") });
});


router.get("/signin", function (req, res, next) {
    res.render("pages/signin", { title: "Sign in UU" });
});

router.post("/signin", function (req, res) {
    const { studentid, password } = req.body;
    let sql = 'SELECT * FROM Students WHERE student_nr = ? AND password = ?';

    if (studentid && password)
    {
        db.get(sql, [studentid, password], (err, response) => {
            if (err)
            {
                return console.error(err.message);
            } else
            {
                if (response)
                {
                    req.session.loggedin = true;
                    req.session.userid = response.student_nr;
                    res.redirect('/');


                } else
                {
                    res.send('incorrect Username and Password!');
                    res.end();
                }
            }

        });
    } else
    {
        res.send('Please enter Username and Password!');
        res.end();
    }

});

module.exports = router;