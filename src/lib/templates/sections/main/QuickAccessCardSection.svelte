<script>
	import CategoryCardGrid from './CategoryCardGrid.svelte';
	import CityCardGrid from './CityCardGrid.svelte';
</script>

<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto flex flex-col gap-6">
	<CategoryCardGrid />
	<hr class=" dark:border-gray-800" />
	<CityCardGrid />
</div>
