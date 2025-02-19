document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("userForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            getFormvalue();
        });
    } else {
        console.error("Form not found! Check if the form exists in the HTML.");
    }
});

function getFormvalue() {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();

    if (!fname && !lname) {
        alert("Please enter your name.");
        return;
    }

    let fullName = `${fname} ${lname}`;
    alert(fullName);
    console.log("Full Name:", fullName);
}
