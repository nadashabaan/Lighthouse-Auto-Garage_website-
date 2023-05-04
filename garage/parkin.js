var name_error = document.getElementById("name error")

var email_error = document.getElementById('email error')

function validate_name() {


    var name = document.getElementById('name').value;


    if (name.length == 0) {
        name_error.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    name_error.innerHTML = 'valid';
    return true;
}







function validate_email() {
    var email = document.getElementById('Email').value;
    if (email.length == 0) {
        email_error.innerHTML = 'Email is required'
        return false;
    }

    if (!email.match(/^[A-Za-z]\. _1-[0-9]*[@1[A-Za-z]*[\.][a-z]{2,4}$/)) {
        email_error.innerHTML = 'Email Invalid'
        return false;
    }
    email_error.innerHTML = 'valid';
    return true;
}
function ConfirmDelete() {
    return confirm("Are you sure you want to delete?");
}
