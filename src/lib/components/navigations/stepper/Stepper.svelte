<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/base/button/Button.svelte';

	export let data;

	const { steps, form } = data;

	$: console.log($page.params.step);
</script>

<!-- Stepper -->
<div
	class="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent"
>
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Grid -->
		<div class="grid md:grid-cols-2 gap-8 lg:gap-12">
			<div>
				<!-- Title -->
				<div class="lg:py-16 md:mb-12 max-w-md">
					<h1 class="mb-4 font-semibold text-gray-800 text-xl lg:text-2xl dark:text-gray-200">
						Fully customizable rules to match your unique needs
					</h1>
					<p class="text-gray-600 dark:text-gray-400">
						We provide you with a test account that can be set up in seconds. Our main focus is
						getting responses to you as soon as we can.
					</p>
				</div>
				<!-- End Title -->
			</div>
			<div>
				<!-- Stepper Nav -->
				<ul class="relative flex flex-row gap-x-2">
					<!-- Item -->
					<li class="flex items-center gap-x-2 shrink basis-0 flex-1 group active">
						<span
							class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
						>
							<span
								class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600"
							>
								<span class="hs-stepper-success:hidden hs-stepper-completed:hidden">1</span>
								<svg
									class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
								>
							</span>
							<span
								class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400"
							>
								Step
							</span>
						</span>
						<div
							class="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-blue-500 hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"
						/>
					</li>
					<!-- End Item -->

					<!-- Item -->
					<li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
						<span
							class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
						>
							<span
								class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600"
							>
								<span class="hs-stepper-success:hidden hs-stepper-completed:hidden">2</span>
								<svg
									class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
								>
							</span>
							<span
								class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400"
							>
								Step
							</span>
						</span>
						<div
							class="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700 hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"
						/>
					</li>
					<!-- End Item -->

					<!-- Item -->
					<li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
						<span
							class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
						>
							<span
								class="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600"
							>
								<span class="hs-stepper-success:hidden hs-stepper-completed:hidden">3</span>
								<svg
									class="hidden flex-shrink-0 h-3 w-3 hs-stepper-success:block"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg
								>
							</span>
							<span
								class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400"
							>
								Step
							</span>
						</span>
						<div
							class="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700 hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"
						/>
					</li>
					<!-- End Item -->
				</ul>
				<!-- End Stepper Nav -->

				<!-- Stepper Content -->
				<div class="mt-5 sm:mt-8">
					<!-- First Content -->
					{#each steps as step}
						<div class:hidden={$page.params.step !== step.slug}>
							<div class="bg-gray-50 rounded-xl dark:bg-gray-800">
								<svelte:component this={step.component} data={{ form }} />
							</div>
						</div>
					{/each}
					<!-- End First Content -->

					<div class="mt-5 flex justify-between items-center gap-x-2">
						<Button size="small"><i class="bi bi-chevron-left" />Back</Button>
						<Button size="small">Skip<i class="bi bi-arrow-90deg-right" /></Button>
						<Button
							size="small"
							intent="primary"
							variant="solid"
							type="submit"
							form="profile"
							formaction="?/{$page.params.step}">Next<i class="bi bi-chevron-right" /></Button
						>
					</div>
				</div>
				<!-- End Stepper Content -->
			</div>
			<!-- Stepper -->
		</div>
	</div>
</div>
