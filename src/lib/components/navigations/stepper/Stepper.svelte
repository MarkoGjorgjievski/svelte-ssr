<script>
	/*
	The Stepper component is designed to receive a data prop [along with an additional props] containing form IDs from multiple forms. The structure of the data prop is as follows:

	`data={{ [step.slug]: forms[step.slug] }}`

	Here, `step.slug` is used as a dynamic key to associate the form data with its corresponding ID.

	Example:

	`data={{
		profile: formData1,
		account: formData2,
	}}`

	In order to submit the form from outside, the **Button** component needs to have these two props:
		- `form={_form_id}` - to submit the corresponding form from outside;
		- `formaction="?/{_form_action_name}` - to idenitify the corresponding action (in +page.server.ts);
*/

	import { page } from '$app/stores';
	import Button from '$lib/components/base/button/Button.svelte';
	import { cn } from '$lib/helpers/classValue';

	export let data;

	const { steps, forms } = data;
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
					{#each steps as step, index}
						<!-- Item -->
						<li class="flex items-center gap-x-2 shrink basis-0 flex-1 group active">
							<span
								class="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
							>
								<span
									class={cn(
										'w-7 h-7 flex justify-center items-center flex-shrink-0 bg-white dark:bg-slate-800 dark:text-white border border-gray-200 dark:border-gray-700 font-medium text-gray-800 rounded-full'
									)}
								>
									<span class="">{index + 1}</span>
									<!-- <i class="bi bi-check" /> -->
								</span>
								<span
									class="ms-2 text-sm font-medium text-gray-800 group-focus:text-gray-500 dark:text-white dark:group-focus:text-gray-400"
								>
									{step.label}
								</span>
							</span>
						</li>
					{/each}
					<!-- End Item -->
				</ul>
				<!-- End Stepper Nav -->

				<!-- Stepper Content -->
				<div class="mt-5 sm:mt-8">
					<!-- First Content -->
					{#each steps as step}
						{#if $page.params.step === step.slug}
							<div class="bg-gray-50 rounded-xl dark:bg-gray-800">
								<!-- 
									Because this component handles multiple forms,
									the slot component receives data prop with an additional property of the form ids,
									which will then be used in the implementation as follows:
									const someFormId = formFunc(data.someFormId)
								-->
								<svelte:component this={step.component} data={{ [step.slug]: forms[step.slug] }} />
							</div>
						{/if}
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
							form={$page.params.step}
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
