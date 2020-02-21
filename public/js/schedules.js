document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
  
	var calendar = new FullCalendar.Calendar(calendarEl, {
	  plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'timeline', 'list', 'bootstrap' ],
	  defaultView: 'dayGridMonth',
	  defaultDate: '2020-02-07',
	  header: {
		left: 'prev,next today',
		center: 'title',
		right: 'dayGridMonth,timeGridWeek,timeGridDay'
	  },
	  events: [

	  ],

	  dateClick: function(info) {
		//alert('Clicked on: ' + info.dateStr);
		//alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
		//alert('Current view: ' + info.view.type);
		// change the day's background color just for fun
		info.dayEl.style.backgroundColor = 'red';

		$("#popup").css("display", "block");

	  }

	});
  
	calendar.render();

  });

