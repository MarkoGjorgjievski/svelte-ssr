<!-- DatePicker REPL. Keep it -->
<!-- https://svelte.dev/repl/f391b3186f804fb0bb0931e73388553a?version=3.46.4 -->

<script context="module">
	export function iso(date) {
		const pad = (n) => (n < 10 ? '0' + n : n);
		return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
	}
</script>

<script>
	export let value = iso(new Date());
	export let days = 'Su|Mo|Tu|We|Th|Fr|Sa'.split('|');
	export let months = 'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|');
	export let start = 0; // first day of the week (0 = Sunday, 1 = Monday)
	export let offset = 0; // offset in months from currently selected date

	let date = iso(new Date());

	$: acceptDate(value);

	function acceptDate(value) {
		const newDate = new Date(value);

		if (!isNaN(newDate)) {
			date = iso(newDate);
		}
	}

	function go(direction) {
		offset = offset + direction;
	}

	function selectDate(newValue) {
		date = newValue;
		value = newValue;
		offset = 0;
	}

	$: viewDate = viewDateFrom(date, offset);

	$: month = months[viewDate.getMonth()];

	$: year = viewDate.getFullYear();

	$: weeks = weeksFrom(viewDate, date, start);

	function viewDateFrom(date, offset) {
		var viewDate = new Date(date);
		viewDate.setMonth(viewDate.getMonth() + offset);
		return viewDate;
	}

	function weeksFrom(viewDate, date, start) {
		var first = new Date(viewDate.getTime());
		first.setDate(1);
		first.setDate(first.getDate() + ((start - first.getDay() - 7) % 7));

		var last = new Date(viewDate.getTime());
		last.setDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate());
		last.setDate(last.getDate() + ((start - last.getDay() + 6) % 7));

		var d = new Date(first.getTime()),
			M = viewDate.getMonth(),
			Y = viewDate.getFullYear(),
			week = [],
			weeks = [week];

		while (d.getTime() <= last.getTime()) {
			var dd = d.getDate(),
				mm = d.getMonth(),
				yy = d.getFullYear(),
				value = iso(d);

			week.push({
				date: dd,
				value,
				class: [
					date === value ? 'selected' : '',
					mm == M ? '' : (mm > M ? yy >= Y : yy > Y) ? 'future' : 'past',
					dd == new Date().getDate() &&
					mm == new Date().getMonth() &&
					yy == new Date().getFullYear()
						? 'today'
						: ''
				].join(' ')
			});

			d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);

			if (d.getDay() === start) {
				week = [];
				weeks.push(week);
			}
		}

		return weeks;
	}
</script>

<div
	class="bg-white border shadow-sm rounded-xl dark:bg-slate-800 text-gray-800 dark:text-gray-100 dark:border-gray-700 w-full max-w-sm min-w-[350px] select-none"
>
	<div class="divide-y divide-gray-200 dark:divide-gray-700">
		<div class="flex justify-between py-3 px-3">
			<button class="btn" on:click={() => go(-1)}><i class="bi bi-chevron-left" /></button>
			<button>{month} {year}</button>
			<button class="btn" on:click={() => go(+1)}><i class="bi bi-chevron-right" /></button>
		</div>
		<div class="py-1 px-3 flex justify-between bg-gray-50 dark:bg-slate-800">
			{#each days as day}
				<th class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
					>{day}</th
				>
			{/each}
		</div>
		{#each weeks as week}
			<div class="flex justify-between py-1 px-3 last:hidden">
				{#each week as day}
					<button
						class="btn {day.class} font-normal h-[2.375rem] w-[2.375rem] rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-100"
						on:click={() => selectDate(day.value)}>{day.date}</button
					>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	button.past,
	button.future {
		opacity: 0.5;
	}
	button.selected {
		@apply font-semibold text-white bg-blue-600;
	}
	button.today {
		@apply border border-blue-600;
	}
</style>
