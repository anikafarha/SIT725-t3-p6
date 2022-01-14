const submitMsg = (project) => {
  $.ajax({
    url: "/projects",
    contentType: "application/json",
    data: JSON.stringify(project), //access in body
    type: "POST",
    success: function (result) {
      alert("Message Sent");
    },
  });
};

//Adding a new Project (from about.html)...
const newMsg = () => {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();

  let submit = { name, email, message };
  console.log("New Project created by " + submit.name);
  submitMsg(submit);
};

//script to run in the About Page...
$(document).ready(function () {
  $(".modal").modal();

  //Calling in Function to request for projects
  newSubmit();
});
