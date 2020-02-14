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

	  ]
	});
  
	calendar.render();
  });