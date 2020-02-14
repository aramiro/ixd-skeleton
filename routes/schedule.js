/*const Calendar = require("@fullcalendar/core");
const dayGridPlugin = require("@fullcalendar/daygrid");
const timeGridPlugin = require("@fullcalendar/timegrid");
const listPlugin = require("@fullcalendar/list");
const timelinePlugin = require("@fullcalendar/timeline");
const bootstrapPlugin = require("@fullcalendar/bootstrap");
*/

/*import { Calendar } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import timelinePlugin from '@fullcalendar/timeline';
import bootstrapPlugin from '@fullcalendar/bootstrap';
*/
/*document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, timelinePlugin, bootstrapPlugin ]
  });

  calendar.render();
});
*/

/*
 * GET schedule page.
 */

exports.view = function(req, res){
	res.render('schedule');
  };

