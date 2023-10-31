<script>
	import Calendar from '$lib/templates/dashboard/calendar/Calendar.svelte';
	import EventStackItem from '$lib/templates/lists/EventStackItem.svelte';
	import { fly, slide } from 'svelte/transition';

	let isOpen = true;
</script>

<div class="py-4">
	<div class="flex w-full">
		<div class="{isOpen ? 'w-3/4' : 'w-0'} transition-all duration-300">
			{#if isOpen}
				<div class="pr-8" transition:fly={{ x: -100, duration: 300 }}>
					<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8 mt-2">
						Upcoming appointments
					</h2>
					<div class="flex flex-col gap-4" transition:slide={{ duration: 700, delay: 100 }}>
						<EventStackItem />
						<!-- <hr class=" dark:border-gray-800" /> -->

						<EventStackItem />
						<!-- <hr class=" dark:border-gray-800" /> -->

						<EventStackItem />
						<!-- <hr class=" dark:border-gray-800" /> -->

						<EventStackItem />
					</div>
				</div>
			{/if}
		</div>
		<div class="w-full relative">
			<button
				class="absolute top-10 flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400"
				on:click={() => (isOpen = !isOpen)}
			>
				{#if isOpen}
					<i class="bi bi-arrow-bar-left" />
				{:else}
					<i class="bi bi-arrow-bar-right" />
				{/if}
			</button>
			<Calendar />
		</div>
	</div>
</div>
