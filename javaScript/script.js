function getImage() {
  $.get("https://dog.ceo/api/breeds/list/all", function (data) {
    var imageUrl = data.message.bulldog[1];
  });
}

$("#get-image-btn").click(getImage);
