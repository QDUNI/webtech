var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var session = require('express-session');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');
var md5 = require('js-md5');


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
router.get('/', function(req, res, next) {
    res.render('pages/index', { title: 'Express', loggedin: req.session.loggedin });

});

router.get('/profile', function(req, res, next) {
    const sql = "SELECT * FROM Students WHERE student_nr = ?";
    db.get(sql, req.session.userid, (err, respons) => {
        if (err) {
            return console.error(err.message);
        } else {
            if (req.session.loggedin)
                res.render('pages/profile', {
                    loggedin: req.session.loggedin,
                    student_nr: respons.student_nr,
                    firstname: respons.firstname,
                    lastname: respons.lastname,
                    program: respons.programm,
                    acd_level: respons.acd_level
                });
            else {
                res.send("Please login...");
            }
        }
    });
});


router.get("/search/:value?", function(req, res, next) {
    res.render("pages/search", { title: "Search courses", value: req.param("value"), loggedin: req.session.loggedin });
});

router.get("/searchdata/:value?", function(req, res, next) {
    const sql = "SELECT * FROM Courses WHERE title LIKE ?";
    db.all(sql, req.param("value") + "%", (err, rows) => {
        if (err) {
            return console.error(err.message);
        } else {
            var courses = [];
            for (let i = 0; i < rows.length; i++) {
                courses.push(JSON.stringify(rows[i]));
            }

            res.send(courses);
        }
    });
});


router.get("/signin", function(req, res, next) {
    res.render("pages/signin", { title: "Sign in UU", loggedin: req.session.loggedin });
});

router.get("/signup", function(req, res, next) {
    res.render("pages/signup", { title: "Sign up UU", error: "", loggedin: req.session.loggedin });
});

router.get("/course/:course_id?", function(req, res, next) {
    const sql = "SELECT * FROM Courses WHERE course_id = ?";
    db.get(sql, req.param("course_id"), (err, respons) => {
        if (err) {
            return console.error(err.message);
        } else {
            const sql2 = "SELECT * FROM Teachers WHERE teacher_id = ?";
            db.get(sql2, respons.teacher_id, (err2, respons2) => {
                if (err2) {
                    return console.error(err2.message);
                } else {
                    const sql3 = "SELECT course_id FROM RegisteredCourses WHERE student_nr = ?";
                    var registered = false;

                    db.all(sql3, req.session.userid, (err3, response3) => {
                        if (err3) {
                            console.log("err3 -> error");
                            return console.error(err3.message);
                        }

                        for (let i = 0; i < response3.length; i++) {
                            console.log(response3[i]);
                            if (response3[i].course_id == parseInt(req.param("course_id"))) registered = true;

                        }
                        console.log(registered);

                        res.render("pages/course", {
                            title: "course",
                            teacher: (respons2.firstname + " " + respons2.lastname),
                            description: respons.description,
                            study_program: respons.program,
                            course_title: respons.title,
                            semester: "This course takes place in " + semesterstring(respons.semester) + ".",
                            level: "The level of this course is " + levelcourse(respons.ac_level) + ".",
                            src: respons2.src_img,
                            loggedin: req.session.loggedin,
                            course_id: respons.course_id,
                            registered: registered
                        });
                    });
                }
            });
        }
    });
});

function semesterstring(semester) {
    if (semester == 1) {
        return "the first semester";

    } else if (semester == 2) {
        return "the second semester";

    } else if (semester == 3) {
        return "the third semester";

    } else if (semester == 4) {
        return "the fourth semester";

    }
}

function levelcourse(level) {
    if (level == "level3") {
        return "master";
    } else {
        return "bachelor";
    }
}

router.post("/signin", function(req, res) {
    const { studentid, password } = req.body;
    let sql = 'SELECT * FROM Students WHERE student_nr = ? AND password = ?';

    if (studentid && password) {
        db.get(sql, [studentid, password], (err, response) => {
            if (err) {
                return console.error(err.message);
            } else {
                if (response) {
                    req.session.loggedin = true;
                    req.session.userid = response.student_nr;
                    res.redirect('/');


                } else {
                    console.log("incorrect");
                    res.redirect('/signin?status=error');
                    res.end();

                }
            }

        });

    } else {
        res.redirect('/signin?status=empty');
        res.end();
    }

});

router.post("/signup", function(req, res) {
    const { firstname, lastname, studentid, password, program, level } = req.body;
    console.log(firstname, lastname, studentid, password, program, level);
    let sql = 'INSERT INTO Students (students_id, student_nr, firstname, lastname, programm, acd_level, password) VALUES(?,?,?,?,?,?,?)';

    db.get(sql, [null, studentid, firstname, lastname, program, level, md5(password)], (err, result) => {
        if (err) {
            console.log("error sign up");
            if (err.message == "SQLITE_CONSTRAINT: UNIQUE constraint failed: Students.student_nr") {
                res.render("pages/signup", { title: "Sign up UU", error: "StudentsID already in use try again" });

            }
            return console.error(err.message);
        } else {

            req.session.loggedin = true;
            res.redirect('/');


        }
    });

});

router.get("/registercourse/:course_id", function(req, res, next) {
    if (!req.session.loggedin) res.send("Please log in...");
    else {
        const sql = "INSERT INTO RegisteredCourses (student_nr, course_id) VALUES (?, ?)";
        db.run(sql, [req.session.userid, req.param("course_id")], function(err) {
            if (err) {
                res.send("error");
                return console.log(err.message);
            } else {
                res.send("Succesfully registered!");
            }
        });
    }
});

router.get("/unregistercourse/:course_id", function(req, res, next) {
    if (!req.session.loggedin) res.send("Please log in...");
    else {
        const sql = "DELETE FROM RegisteredCourses WHERE student_nr = ? AND course_id = ?";
        db.run(sql, [req.session.userid, req.param("course_id")], function(err) {
            if (err) {
                res.send("error");
                return console.log(err.message);
            } else {
                res.send("Succesfully unregistered!");
            }
        });
    }
});


module.exports = router;