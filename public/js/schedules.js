
function nudge() {
  Swal.fire({
    title: 'Nudge?',
    confirmButtonText: "Nudge",
    cancelButtonColor: '#d33'
  }).then((result) => {
    if(result.value) {
      Swal.Fire('Nudged!', 'You have nudged them.', 'success')
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var indCalendarE1 = document.getElementById("calendar");
  var groupCalendarE1 = document.getElementById("calendar2");

  var icalendar = new FullCalendar.Calendar(indCalendarE1, {
    plugins: [
      "interaction",
      "dayGrid",
      "timeGrid",
      "list",
      "bootstrap",
      "googleCalendar"
    ],
    editable: true,
    droppable: true,
    contentHeight: 500,
    themeSystem: "standard",
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    header: {
      left: "title",
      right: "prev,next",
    },
    footer: {
		left: "today",
		center:"",
		right: "dayGridMonth,timeGridWeek,timeGridDay"	},
    events: {
      googleCalendarId:
		"ucsd.edu_87nar99a1vmecvl0g75e4ubs4s@group.calendar.google.com"
    },
    eventColor:'lavender',
    dateClick: function(info) {
      //alert('Clicked on: ' + info.dateStr);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";

      $("#popup").css("display", "block");
    },
    eventClick: function(info, $el) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

    /*  var modal = document.getElementById("nudgeModal");
      var span = document.getElementsByClassName("close")[0];
      var cancel = document.getElementById("close");
      var nudge = document.getElementById("nudge");

      modal.style.display = "block";

      span.onclick = function() {
        modal.style.display = "none";
      };
      cancel.onclick = function() {
        modal.style.display = "none";
      };

      nudge.onclick = function() {
        document.getElementById("nudge-title").innerHTML = "Nudge Sent!";
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };*/
      // change the border color just for fun

    
      info.el.style.borderColor = "red";
    },


/*    eventRender: function(eventObj, $el) {
      $el.popover({
        title: eventObj.title,
        content: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    }
    */
  });

  var gcalendar = new FullCalendar.Calendar(groupCalendarE1, {
    plugins: [
      "interaction",
      "dayGrid",
      "timeGrid",
      "list",
      "bootstrap",
      "googleCalendar"
    ],
    editable: true,
    droppable: true,
    contentHeight: 500,
    themeSystem: "standard",
    googleCalendarApiKey: "AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0",
    defaultView: "dayGridMonth",
    header: {
	  left: "title",
	  center: "",
	  right:"prev,next",
	},
	footer: {
		left: "today",
		right: "dayGridMonth,timeGridWeek,timeGridDay"
	},
    events: {
      googleCalendarId:
        "ucsd.edu_dfuugi6lj86saaqjrnkfgdfd6s@group.calendar.google.com"
    },
    eventColor:'lavender',
    dateClick: function(info) {
      //alert('Clicked on: ' + info.dateStr);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('Current view: ' + info.view.type);
      // change the day's background color just for fun
      info.dayEl.style.backgroundColor = "red";

      $("#popup").css("display", "block");
    },
    eventClick: function(info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

    /*  var modal = document.getElementById("nudgeModal");
      var span = document.getElementsByClassName("close")[0];
      var cancel = document.getElementById("closebtn");
      var nudge = document.getElementById("nudge");
      modal.style.display = "block";*/
     var name = info.el.classList[7];
      Swal.fire({
        title: 'Nudge ' + name + '?',
        icon: 'question',
        confirmButtonText: "Nudge",
        cancelButtonColor: '#d33',
      }).then((result) => {
        if(result.value) {
          Swal.fire('Nudged!', 'Nudge sent to ' + name + '.', 'success')
        }
      });

  /*    span.onclick = function() {
        modal.style.display = "none";
      };
      cancel.onclick = function() {
        modal.style.display = "none";
      };

      nudge.onclick = function() {
        modal.style.display = "none";
        $("#nudgeModalafter").css("display", "block");
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };*/
      // change the border color just for fun
      info.el.style.borderColor = "red";
    },
    eventRender: function(info) {
      var desc = JSON.stringify(info.event.extendedProps.description);
      //var house = JSON.parse(localStorage.getItem("household"));
      //console.log(desc);
      //console.log(info.el.id);

      if(desc.includes("Alyssa")) {
        info.el.style.backgroundColor = "Plum";
        info.el.classList.add("Alyssa");
      } else if(desc.includes("Apurwa")) {
        info.el.style.backgroundColor = "SpringGreen";
        info.el.classList.add("Apurwa");
      }
      else if (desc.includes("Stacy")) {
        info.el.style.backgroundColor = "Salmon";
        info.el.classList.add("Stacy");
        
      } else if (desc.includes("User")) {
        info.el.style.backgroundColor = "PeachPuff";
        info.el.classList.add("User");
      }
      else {
        info.el.style.backgroundColor = "Red";
      }



    }

  });
  gcalendar.setOption('Height', 650);

  icalendar.render();
  icalendar.setOption('Height', 650);
  gcalendar.render();
});




