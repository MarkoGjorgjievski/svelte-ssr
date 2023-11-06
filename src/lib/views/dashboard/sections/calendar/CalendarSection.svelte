<script lang="ts">
	import FullCalendar, { type CalendarOptions } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import timegridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';

	import './calendar.css';

	let options: CalendarOptions = {
		initialView: 'dayGridWeek',
		plugins: [timegridPlugin, daygridPlugin, interactionPlugin],
		headerToolbar: {
			left: 'title',
			right: 'prev,today,next dayGridWeek,dayGridDay'
		},
		allDaySlot: true,
		allDayText: 'all-day',
		eventMinHeight: 15,
		dayHeaderFormat: { weekday: 'short', day: 'numeric' },
		slotMinTime: '06:00',
		slotMaxTime: '23:00',
		slotLabelFormat: {
			hour: 'numeric',
			minute: '2-digit',
			omitZeroMinute: false,
			hour12: false
		},
		eventTimeFormat: {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			meridiem: false
		},
		nowIndicator: true
	};
</script>

<div
	class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
>
	<FullCalendar {options} />
</div>
