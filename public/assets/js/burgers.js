
  
$(function () {
  $("#new-burger").on("submit", function (event) {

    event.preventDefault();

    var newburger = {
      burger_name: $("#burger-name").val().trim()
    };

   console.log(newburger);

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

  $(".eat-burger").on("submit", function (event) {
    event.preventDefault();
    var Newburgers = {
      devourd: 1
    };

    $.ajax("/api/burgers" + this.id, {
      type: "PUT",
      data: Newburgers
    }).then(
      function () {
        console.log("created New burgers");
        location.reload();
      }
    );
  });
}
);