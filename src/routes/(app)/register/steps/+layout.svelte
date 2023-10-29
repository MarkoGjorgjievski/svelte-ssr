<div class="flex w-full h-4 bg-gray-200 overflow-hidden dark:bg-gray-700">
	<div
		class="flex flex-col justify-center overflow-hidden bg-blue-500"
		role="progressbar"
		style="width: 50%"
		aria-valuenow={50}
		aria-valuemin={0}
		aria-valuemax={100}
	/>
</div>

<slot />
