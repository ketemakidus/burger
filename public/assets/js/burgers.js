

$(function () {


  $("#submit-burger").on("click", function (event) {

    event.preventDefault();

    var newburger = {
      burger_name: $("#burger_name").val().trim()
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

  $("eat-burger").on("click", function (event) {
    event.preventDefault();
    var newburgers = {
      devourd: 1
    };

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
