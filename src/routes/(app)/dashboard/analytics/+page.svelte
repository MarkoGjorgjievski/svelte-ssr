<script>
	import AnalyticsComingSoon from '$lib/templates/dashboard/analytics/AnalyticsComingSoon.svelte';
</script>

<div class="relative">
	<AnalyticsComingSoon />
	<div class="fixed top-0 h-full w-full backdrop-filter backdrop-blur bg-white/10" />

	<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
		<div class="text-center">
			<div
				class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
			>
				Coming soon
			</div>
		</div>
	</div>
</div>

<style>
	.backdrop-blur {
		backdrop-filter: blur(2px);
	}
</style>
