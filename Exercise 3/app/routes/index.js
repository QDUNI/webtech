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

router.get("/search/:value?/:program?/:semester?/:level?", function (req, res, next) {
    const sql = "SELECT * FROM Courses WHERE title LIKE ?";
    db.all(sql, req.param("value") + "%", (err, rows) => {
        if (err)
        {
            return console.error(err.message);
        } else
        {
            //console.log(rows);

            var courses = [];
            for (let i = 0; i < rows.length; i++)
            {
                courses.push(JSON.stringify(rows[i]));
            }

            res.render("pages/search", { title: "Search courses", value: req.param("value"), courses: courses });
        }
    }
    );
});


router.get("/signin", function (req, res, next) {
    res.render("pages/signin", { title: "Sign in UU" });
});

router.get("/course/:course_id?", function (req, res, next) {
    const sql = "SELECT * FROM Courses WHERE course_id = ?";
    db.get(sql, req.param("course_id"), (err, respons) => {
        if (err)
        {
            return console.error(err.message);
        } 
        else
        {
            console.log(respons.teacher_id)
            const sql2 = "SELECT * FROM Teachers WHERE teacher_id = ?";
            db.get(sql2, respons.teacher_id, (err2, respons2) => {
                if (err2)
                {
                    return console.error(err2.message);
                }
                else
                {
                    res.render("pages/course", { title: "course", teacher: (respons2.firstname + " " + respons2.lastname)
                , description: respons.description, study_program: respons.program, course_title: respons.title
                , semester: "This course takes place in " + semesterstring(respons.semester) +"."
                , level: "The level of this course is " + levelcourse(respons.ac_level) +"."});
                }});
        }
    });
});

function semesterstring(semester){
    if(semester == 1){
        return "the first semester"

    }
    else if(semester == 2){
        return "the second semester"

    }
    else if(semester == 3){
        return "the third semester"

    }
    else if(semester == 4){
        return "the fourth semester"

    }
}

function levelcourse(level){
    if(level == "level3"){
        return "master"
    }
    else{
        return "bachelor"
    }
}

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