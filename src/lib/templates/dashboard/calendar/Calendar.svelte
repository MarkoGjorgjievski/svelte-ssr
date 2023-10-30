<script lang="ts">
	import FullCalendar, { type CalendarOptions } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
    import './calendar.css'

	let options: CalendarOptions = {
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin],
		dateClick: (event) => alert('date click! ' + event.dateStr),
		events: [
			{ title: 'event 1', date: '2019-04-01' },
			{ title: 'event 2', date: '2019-04-02' }
		]
	};
</script>

<FullCalendar {options} />
