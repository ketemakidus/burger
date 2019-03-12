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

    $(".burger-name").on("click", function (event) {

        // $("#panel").hide();

        // var newBurger = $(this).data("newBurger");

        // var newBurger = {
        //     devourd: newBurger
        // };

        // // Send the PUT request.
        // $.ajax("/api/burgers/", {
        //     type: "PUT",
        //     data: newBurger
        // }).then(
        //     function () {
        //         console.log(newBurger);
        //         location.reload();
        //     }
        // );
    });
});
