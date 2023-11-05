<script>
	import DatePickerBase, { iso } from './DatePickerBase.svelte';

	let startDate = iso(new Date());
	// let endDate = '2022-03-03';

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

<!-- <label>
	Culture:
	<select bind:value={culture}>
		{#each Object.keys(locale) as lang}
			<option value={lang}>{lang}</option>
		{/each}
	</select>
</label> -->

<div class="space-y-2 w-full max-w-sm">
	<!-- <label for="datepicker" class="block font-medium text-gray-800 dark:text-gray-200 mb-2"
		>Select date</label
	> -->

	<input
		id="datepicker"
		type="text"
		class="py-3 px-4 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
		bind:value={startDate}
	/>

	<DatePickerBase bind:value={startDate} {...locale[culture]} />
</div>

<!-- <h3>End Date</h3>
<input type="text" bind:value={endDate} />
<DatePickerBase bind:value={endDate} {...locale[culture]} /> -->
