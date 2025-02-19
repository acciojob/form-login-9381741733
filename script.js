document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page
            getFormvalue();
        });
    }

    function getFormvalue() {
        let fname = document.getElementById("fname").value.trim();
        let lname = document.getElementById("lname").value.trim();

        if (!fname && !lname) {
            alert("Please enter your name.");
            return;
        }

        alert(fname + " " + lname);
    }
});
