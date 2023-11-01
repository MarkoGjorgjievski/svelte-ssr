<script>
	import WorkingHoursDayItem from './WorkingHoursDayItem.svelte';
</script>

<form>
	<!-- Card -->
	<div
		class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
	>
		<div class="p-4 sm:p-7">
			<!-- Grid -->
			<div class="space-y-4 sm:space-y-6">
				<div class="hs-accordion-group" data-hs-accordion-always-open>
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
					<WorkingHoursDayItem />
				</div>
			</div>
		</div>
	</div>
</form>
