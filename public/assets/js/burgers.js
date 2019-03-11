$(function () {
    $("#submit-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function (data) {
            // location.reload();
        });
        console.log(newBurger);
        location.reload();
    });

    $

});
