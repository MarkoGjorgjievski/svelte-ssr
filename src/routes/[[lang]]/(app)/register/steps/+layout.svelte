<div class="flex w-full h-1.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
	<div
		class="flex flex-col justify-center overflow-hidden bg-blue-500"
		role="progressbar"
		style="width: 50%"
		aria-valuenow={50}
		aria-valuemin={0}
		aria-valuemax={100}
	/>
</div>

<div class="h-full">
	<div class="flex h-full items-center">
		<main class="w-full mx-auto">
			<div class="max-w-3xl px-4 py-10 lg:px-8 lg:py-14 mx-auto">
				<slot />
				<a
					href="/"
					class="py-2 px-3 mt-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium
				bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2
				focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900
				dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
				>
					Abort
					<!-- </button> -->
				</a>
			</div>
		</main>
	</div>
</div>
