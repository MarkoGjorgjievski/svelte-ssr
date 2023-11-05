<script>
	import DatePicker from '$lib/components/base/datepicker/DatePicker.svelte';
	import SelectSlots from '$lib/pages/confirmation/SelectSlots.svelte';
	import SelectStaff from '$lib/pages/confirmation/SelectStaff.svelte';
	import ListingServiceItem from '$lib/pages/listing/ListingServiceItem.svelte';
	import SelectStaffCards from '$lib/templates/forms/staff/SelectStaffCards.svelte';
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
	<div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-0">
		<div class="w-full lg:pr-8">
			<SelectStaff />
		</div>
		<hr />
		<div class="w-full lg:px-12 lg:border-x">
			<label for="datepicker" class="block font-medium text-gray-800 dark:text-gray-200 mb-2"
				>Select date</label
			>
			<div class="">
				<DatePicker />
			</div>
		</div>
		<hr />
		<div class="w-full lg:pl-12">
			<SelectSlots />
		</div>
	</div>
</div>

<footer
	class="sticky bottom-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-t border-gray-200 text-sm py-0 dark:bg-gray-800 dark:border-gray-700 shadow-lg bg-slate-100"
>
	<div
		class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-4 sm:py-4"
		aria-label="Global"
	>
		<ListingServiceItem />

		<div class="flex gap-8 items-center pt-2 lg:pt-0 justify-between">
			<div class="flex gap-4 items-center">
				<dl>
					<dt
						class="text-sm font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500"
					>
						Date
					</dt>
					<dd class="text-sm font-normal text-gray-500 dark:text-gray-400">21.10.2023</dd>
				</dl>
				<dl>
					<dt
						class="text-sm font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500"
					>
						Time
					</dt>
					<dd class="text-sm font-normal text-gray-500 dark:text-gray-400">00:15</dd>
				</dl>
				<dl>
					<dt
						class="text-sm font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500"
					>
						Staff
					</dt>
					<dd class="text-sm font-normal text-gray-500 dark:text-gray-400">David</dd>
				</dl>
			</div>
			<button
				type="button"
				class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
			>
				Confirm
				<i class="bi bi-arrow-right" />
			</button>
		</div>
	</div>
</footer>
