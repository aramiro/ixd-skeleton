$(document).ready(function() {
	user = JSON.parse(localStorage.getItem("user"));
	console.log(user);

  $("div#details").on("click", function(event) {
    event.preventDefault();

    Swal.fire({
      title: "Personal Information",
	  text: "Name: " + user.firstname + " " + user.lastname,
	  text: "Email " + user.email,
      text: "Log out?",
      confirmButtonText: '<i class="fas fa-sign-out-alt"> Logout?</i>'
    }).then(result => {
      localStorage.removeItem("firstname");
      localStorage.removeItem("user");

      if (result.value) {
		Swal.fire("Logging out!");
		window.location.replace("/");
      }
    });
  });


  $("div#roommates").on("click", function(event) {
	event.preventDefault();
	Swal.fire({
		title: "Roommates",
		text: "",
		
	})
  });
});
