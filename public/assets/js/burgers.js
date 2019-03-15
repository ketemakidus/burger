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

        $('.burger-id').on('click', function(event) {
            event.preventDefault();
    
            var newBurger = {
                  data: newBurger
            }
            $.ajax('/api/burgers/', {
                type: 'PUT',
                data: newBurger
            }).then(function(data){
                console.log(newBurger);
                location.reload();
            })
        });
    });

