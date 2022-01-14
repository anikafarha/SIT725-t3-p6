const myLinkedIn = {
  imageURL: "linkedin.jpg",
  uniqueID: 1,
  description: "If you want to discuss and share any idea with me. Message me",
  title: "My Linkedin Link",
  linkURL: "#",
  linkname: "My Linkedin",
};

// For future implementation
let data = [myLinkedIn];

//Appending Contents into cards...
cardcontents = (entries) => {
  entries.forEach((dataentry) => {
    let item =
      '<div class="col s12">' +
      '<div class="card">' +
      '<div class="card-image waves-effect waves-block waves-light">' +
      '<img class="activator" src="' +
      myLinkedIn.imageURL +
      '" height="auto">' +
      '<span class="card-title">' +
      myLinkedIn.title +
      "</span>" +
      "</div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey - text text - darken - 4">' +
      myLinkedIn.title +
      '<i class="material-icons right">close</i></span>' +
      "<p>" +
      myLinkedIn.description +
      "</p>" +
      "</div>" +
      '<div class="card-action">' +
      '<a href="' +
      myLinkedIn.linkURL +
      '">' +
      myLinkedIn.linkname +
      "</a>" +
      "</div>" +
      "</div>" +
      "</div>";

    $("#myInfo").append(item);
  });
};

$(document).ready(function () {
  cardcontents(data);
});
