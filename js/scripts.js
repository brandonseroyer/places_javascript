$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmarks").append(
      '<div class="new-landmark">' +
        '<div class="form-group">' +
          '<label for="landmark">Landmarks</label>' +
          '<input type="text" class="form-control landmark">' +
        '</div>' +
      '</div>'
    )
  });

  $("form#travels").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputCity = $("input#city").val();
    var inputDate = $("input#date").val();
    var inputNotes = $("input#notes").val();
    var place = { name: inputName, city: inputCity, date: inputDate, notes: inputNotes, landmarks:[] }

    $(".new-landmark").each(function() {
      var landmarkName = $(this).find("input.landmark").val();

      var inputLandmark = {name: landmarkName};

      place.landmarks.push(inputLandmark);
    });

    $("ul#places").append('<li><span class="place">' + place.name + '</span></li>')

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(place.name);
      $(".city").text(place.city);
      $(".date").text(place.date);
      $(".notes").text(place.notes);
      $("ul.landmarks").text("");
        place.landmarks.forEach(function(landmark) {
          $("ul.landmarks").append("<li>" + landmark.name + "</li>")
        });

    });

    $("input#name").val("");
    $("input#city").val("");
    $("input#date").val("");
    $("input#notes").val("");
    $("input.landmark").val("");

  });
});
