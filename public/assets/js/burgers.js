// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#new-burger").on("click", function (event) {
    event.preventDefault();

    var newburger = {
      burger_name = $("#burger-name").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function () {
        console.log(newburger);
        location.reload();
      }
    )
  });

  $(".eat-burger").on("click", function (event) {
    event.preventDefault();

    var newburgers = {
      devourd: 1
    };

    // Send the POST request.
    $.ajax("/api/burgers" + this.id, {
      type: "PUT",
      data: newburgers
    }).then(
      function () {
        console.log("created new burgers");
        location.reload();
      }
    );
  });


}
);
