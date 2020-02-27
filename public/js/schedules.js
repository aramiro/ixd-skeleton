document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
	  plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'bootstrap', 'googleCalendar' ],
	  googleCalendarApiKey:'AIzaSyD_OFNIKMzCwC7ZotObECp4sUNZ7hH-iv0',
	  defaultView: 'dayGridMonth',
	  defaultDate: '2020-02-07',
	  header: {
		left: 'prev,next today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay'
	  },
	  events: 
			{
				googleCalendarId: 'ucsd.edu_87nar99a1vmecvl0g75e4ubs4s@group.calendar.google.com'
			}
	  ,

	  dateClick: function(info) {
		//alert('Clicked on: ' + info.dateStr);
		//alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
		//alert('Current view: ' + info.view.type);
		// change the day's background color just for fun
		info.dayEl.style.backgroundColor = 'red';

		$("#popup").css("display", "block");

	  } 
	  /*,

	  eventClick: function(info) {
		  $("nudge").css("display", "");
	  }
*/
	});
  
	calendar.render();

  });

  $('#toggle > div').click(function() {
    var ix = $(this).index();
    
    $('#individualCalendar').toggle( ix === 0 );
    $('#groupCalendar').toggle( ix === 1 );
});

