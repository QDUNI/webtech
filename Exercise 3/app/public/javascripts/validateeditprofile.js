function validateEdit() {
    var firstname = document.getElementsByName("firstname")[0].value;
    var lastname = document.getElementsByName("lastname")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var repassword = document.getElementsByName("repassword")[0].value;
    var program = document.getElementsByName("program")[0].value;
    var level = document.getElementsByName("level")[0].value;
    var span = document.getElementById("edit__error");



    //check firstname
    if (firstname == "") {
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        var text = document.createTextNode("Firstname cannot be empty");
        span.appendChild(text);
        return false;
    } else {
        if (/\d/.test(firstname)) {
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            var text = document.createTextNode("Firstname cannot have a number");
            span.appendChild(text);
            return false;
        } else {
            if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(firstname)) {
                while (span.firstChild) {
                    span.removeChild(span.firstChild);
                }
                var text = document.createTextNode("Firstname cannot have a symbol");
                span.appendChild(text);
                return false;
            }
        }
    }

    //check lastname
    if (lastname == "") {
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        var text = document.createTextNode("Lastname cannot be empty");
        span.appendChild(text);
        return false;
    } else {
        if (/\d/.test(lastname)) {
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            var text = document.createTextNode("Lastname cannot have a number");
            span.appendChild(text);
            return false;
        } else {
            if (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(lastname)) {
                while (span.firstChild) {
                    span.removeChild(span.firstChild);
                }
                var text = document.createTextNode("Lastname cannot have a symbol");
                span.appendChild(text);
                return false;
            }
        }
    }


    if (password == repassword) {

        if (passwordReq(password) == false) {
            while (span.firstChild) {
                span.removeChild(span.firstChild);
            }
            var text = document.createTextNode("Password must be 8 chars long, has one capital letter, one small letter and 1 number ");
            span.appendChild(text);
            return false;
        }

    } else {
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        var text = document.createTextNode("Passwords don't match");
        span.appendChild(text);
        return false;
    }

    if (program == "") {
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        var text = document.createTextNode("Program needs to be defined");
        span.appendChild(text);
        return false;
    }

    if (level == "") {
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        var text = document.createTextNode("Level needs to be defined");
        span.appendChild(text);
        return false;
    }



}


//function that checks password. Returns true if atleast 8 chars long, has one capital letter, one small letter and 1 number else returns false.
function passwordReq(input) {
    // password needs to be 8 char long, have a capital Letter, small letter and at least 1 number
    if (input.length >= 8) {
        console.log("password is 8 long");
        if (/[a-z]/.test(input)) {
            if (/[A-Z]/.test(input)) {
                if (/\d/.test(input)) {
                    return true;
                }
            }
        }
    }


    return false;
}