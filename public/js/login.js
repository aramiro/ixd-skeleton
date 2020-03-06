$(document).ready(function() {
  $("form.login").on("submit", function(event) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });

    event.preventDefault();
    var userSearch = $("#username").val();
    var psw = $("#password").val();
    console.log(userSearch);
    var myjson;
    var found = false;
    $.getJSON("/data/data.json", function(json) {
      myjson = json;
      for (user in myjson.users) {
        if (myjson.users[user].username == userSearch) {
          if (psw == myjson.users[user].password) {
            localStorage.setItem("firstname", myjson.users[user].firstname);
            localStorage.setItem("index", user);
            found = true;
            window.location.replace("/index");
            Toast.fire({
              icon: "success",
              title: "Signed in successfully"
            });
          } else {
            Swal.fire({
              title: "Error!",
              text:
                "Wrong password. Try again or click Forgot password to rest it.",
              icon: "error",
              confirmButtonText: "Okay"
            });
          }
        }
      }
      if (!found) {
        Swal.fire({
          title: "Error!",
          text: "Couldn't find your Account",
          icon: "error",
          confirmButtonText: "Okay"
        });
      }
      //window.location.replace("/index")
      /*		if (myjson.users[userSearch]) { // if exist
				console.log("Pass")
				console.log(myjson.users[userSearch])
				$('.error').hide();
								

			} else {
				console.log("Fail")
				$('.error').show();
			}*/
    });
  });

  $("form.signup").on("submit", function(event) {
    event.preventDefault();
    var user = {};
    var psw = $("#spassword").val();
    var pswrepeat = $("#password-repeat").val();
    if (psw != pswrepeat) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match. Please try again.",
        icon: "error",
        confirmButtonText: "Okay"
      });
    } else {
      user.firstname = $("#fname").val();
      user.lastname = $("#lname").val();
      user.username = $("#susername").val();
      user.email = $("#email").val();
      user.password = psw;
      user.houseID = "";
      $.getJSON("/data/data.json", function(json) {
        myjson = json;
        console.log(user);
        myjson.users.push(user);

        jsonstr = JSON.stringify(myjson);
        console.log(jsonstr);
        localStorage.setItem(myjson, jsonstr);
        localStorage.setItem("firstname", user.firstname);
        window.location.replace("/index");
      });
    }
  });
});

/*function rememberme(email) {
	const rmCheck = document.getElementById("remember");
	const rmChecks = document.getElementById("sremember");
	var uemail = email; 
	if (localStorage.checkbox && localStorage.checkbox !== "") {
		rmCheck.setAttribute("checked", "checked");
		emailInput.value = localStorage.username; 
	}
}*/
