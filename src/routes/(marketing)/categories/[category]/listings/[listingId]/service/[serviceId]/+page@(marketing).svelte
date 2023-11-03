<script>
	import DatePicker from '$lib/components/base/datepicker/DatePicker.svelte';
	import ListingServiceItem from '$lib/pages/listing/ListingServiceItem.svelte';
	import SelectStaffCards from '$lib/templates/forms/staff/SelectStaffCards.svelte';
</script>

<header
	class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-0 dark:bg-gray-800 dark:border-gray-700"
>
	<div
		class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-4 sm:py-4"
		aria-label="Global"
	>
		<ListingServiceItem />
	</div>
</header>
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full">
	<div class="w-full flex flex-col md:flex-row">
		<div class="w-full">
			<SelectStaffCards />
		</div>
		<div class="w-full">
			<DatePicker />
		</div>
	</div>
	<!-- <a
		class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 mb-8"
		href="#"
	>
		<svg
			class="w-3 h-3"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			viewBox="0 0 16 16"
		>
			<path
				fill-rule="evenodd"
				d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
			/>
		</svg>
		Back to Page
	</a> -->
</div>
