<script>
	import DatePickerBase from './DatePickerBase.svelte';

	let startDate = '2022-03-01';
	let endDate = '2022-03-03';

	const locale = {
		en: {
			days: 'Su|Mo|Tu|We|Th|Fr|Sa'.split('|'),
			months: 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|'),
			start: 0
		},
		da: {
			days: 'Sø|Ma|Ti|On|To|Fr|Lø'.split('|'),
			months: 'Jan|Feb|Mar|Apr|Maj|Jun|Jul|Aug|Sep|Okt|Nov|Dec'.split('|'),
			start: 1
		}
	};

	let culture = 'en';
</script>

<h1>DatePicker</h1>

<!-- <label>
	Culture:
	<select bind:value={culture}>
		{#each Object.keys(locale) as lang}
			<option value={lang}>{lang}</option>
		{/each}
	</select>
</label> -->

<h3>Start Date</h3>
<input type="text" bind:value={startDate} />
<DatePickerBase bind:value={startDate} {...locale[culture]} />

<!-- <h3>End Date</h3>
<input type="text" bind:value={endDate} />
<DatePickerBase bind:value={endDate} {...locale[culture]} /> -->
