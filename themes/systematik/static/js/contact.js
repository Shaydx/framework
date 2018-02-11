/*Ajax contact form*/
$("#kontaktmig").submit(function (event) {
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "formhandler.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                formFailure(text);
            }
        }
    });
}

function formSuccess() {
    $("#formfeedback").removeClass("hidden");
    $("#kontaktmig").addClass("hidden");
    $("#formfailure").addClass("hidden");
}

function formFailure(text) {
    $("#formfailure").removeClass("hidden");
    $("#formfailure").html(text);
}
