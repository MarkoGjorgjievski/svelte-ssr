<script>
	import ClientLogosSection from '$lib/views/business/sections/testemonials/ClientLogosSection.svelte';

	export let buttons = false;
	export let blockquote = false;
</script>

<!-- Hero -->
<div
	class="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent"
>
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Grid -->
		<div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
			<div>
				<p
					class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400"
				>
					Preline: A vision for 2024
				</p>

				<!-- Title -->
				<div class="mt-4 md:mb-12 max-w-2xl">
					<h1 class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
						Fully customizable rules to match your unique needs
					</h1>
					<p class="text-gray-600 dark:text-gray-400">
						We provide you with a test account that can be set up in seconds. Our main focus is
						getting responses to you as soon as we can.
					</p>
				</div>
				<!-- End Title -->

				{#if blockquote}
					<!-- Blockquote -->
					<blockquote class="hidden md:block relative max-w-sm">
						<svg
							class="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
								fill="currentColor"
							/>
						</svg>

						<div class="relative z-10">
							<p class="text-xl italic text-gray-800 dark:text-white">
								Amazing people to work with. Very fast and professional partner.
							</p>
						</div>

						<footer class="mt-3">
							<div class="flex items-center">
								<div class="flex-shrink-0">
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										alt="Description"
									/>
								</div>
								<div class="grow ms-4">
									<div class="font-semibold text-gray-800 dark:text-gray-200">Josh Grazioso</div>
									<div class="text-xs text-gray-500">Director Payments & Risk | Airbnb</div>
								</div>
							</div>
						</footer>
					</blockquote>
					<!-- End Blockquote -->
				{/if}

				{#if buttons}
					<!-- Buttons -->
					<div class="mt-7 grid gap-3 w-full sm:inline-flex">
						<a
							class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
							href="/register"
						>
							Get started
							<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</a>
						<a
							class="inline-flex justify-center items-center gap-x-3.5 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
							href="#"
						>
							Contact sales team
						</a>
					</div>
					<!-- End Buttons -->
				{/if}
			</div>
			<!-- End Col -->

			<div>
				<slot />
			</div>
			<!-- End Col -->
		</div>
		<ClientLogosSection />
		<!-- End Grid -->
	</div>
</div>
<!-- End Hero -->
