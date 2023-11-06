<script>
	import RatingStars from '$lib/templates/molecules/to-be-decided/RatingStars.svelte';
</script>

<div class="flex items-center mb-2">
	<RatingStars />
</div>
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
<div class="mt-4 space-y-1 text-gray-500 dark:text-gray-400 max-w-sm">
	<div class="flex items-center gap-2">
		<a href="#" class="whitespace-nowrap w-14 text-sm font-medium hover:underline">5 star</a>
		<div class="flex w-full h-4 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
			<div
				class="flex flex-col justify-center overflow-hidden bg-yellow-500 text-xs text-white text-center"
				role="progressbar"
				style="width: 57%"
				aria-valuenow="57"
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</div>
		<span class="text-sm font-medium w-14">70%</span>
	</div>
	<div class="flex items-center gap-2">
		<a href="#" class="whitespace-nowrap w-14 text-sm font-medium hover:underline">4 star</a>
		<div class="flex w-full h-4 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
			<div
				class="flex flex-col justify-center overflow-hidden bg-yellow-500 text-xs text-white text-center"
				role="progressbar"
				style="width: 57%"
				aria-valuenow="57"
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</div>
		<span class="text-sm font-medium w-14">17%</span>
	</div>
	<div class="flex items-center gap-2">
		<a href="#" class="whitespace-nowrap w-14 text-sm font-medium hover:underline">3 star</a>
		<div class="flex w-full h-4 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
			<div
				class="flex flex-col justify-center overflow-hidden bg-yellow-500 text-xs text-white text-center"
				role="progressbar"
				style="width: 57%"
				aria-valuenow="57"
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</div>
		<span class="text-sm font-medium w-14">8%</span>
	</div>
	<div class="flex items-center gap-2">
		<a href="#" class="whitespace-nowrap w-14 text-sm font-medium hover:underline">2 star</a>
		<div class="flex w-full h-4 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
			<div
				class="flex flex-col justify-center overflow-hidden bg-yellow-500 text-xs text-white text-center"
				role="progressbar"
				style="width: 57%"
				aria-valuenow="57"
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</div>
		<span class="text-sm font-medium w-14">4%</span>
	</div>
	<div class="flex items-center gap-2">
		<a href="#" class="whitespace-nowrap w-14 text-sm font-medium hover:underline">1 star</a>
		<div class="flex w-full h-4 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
			<div
				class="flex flex-col justify-center overflow-hidden bg-yellow-500 text-xs text-white text-center"
				role="progressbar"
				style="width: 57%"
				aria-valuenow="57"
				aria-valuemin="0"
				aria-valuemax="100"
			/>
		</div>
		<span class="text-sm font-medium w-14">1%</span>
	</div>
</div>
