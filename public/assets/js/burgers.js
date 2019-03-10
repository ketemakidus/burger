$(function () {

  $("#new-burger").on("submit", function (event) {

    event.preventDefault();

    var newburger = {
      burger_name: $("#burger-name").val().trim()
    };

    console.log(newburger);

    $.ajax("/api/burger", {
      type: "PUT",
      data: newburger
    }).then(
      function () {
        console.log(newburger);
        location.reload();
      }
    )
  });

  $("#new-burger").on("submit", function (event) {
    event.preventDefault();
    var Newburgers = {
      burger_name:$("#burger-name").val().trim(),
      devourd:1
    };

    $.ajax("/api/burger" + this.id, {
      type: "POST",
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