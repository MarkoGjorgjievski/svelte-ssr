<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Input from '$lib/components/forms/input/Input.svelte';
	import { accountSchema } from '$lib/templates/forms/register/AccountSchema';
	import type { AccountSchema } from '$lib/templates/forms/register/AccountSchema';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let data: { account: SuperValidated<AccountSchema> };

	const { form, errors, enhance } = superForm(data.account, {
		id: 'account',
		validators: accountSchema
	});
</script>

<SuperDebug data={$form} />

<form method="POST" use:enhance id="account">
	<div class="grid grid-cols-2 gap-4">
		<Input
			id="lastName"
			name="lastName"
			label="Last name"
			bind:value={$form.lastName}
			errorMessage={$errors.lastName || ''}
			intent={$errors.lastName ? 'danger' : 'default'}
		/>
	</div>
</form>

<form>
	<!-- Card -->
	<div
		class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
	>
		<div
			class="relative h-40 rounded-t-xl bg-gray-100 dark:bg-gray-700 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center"
		>
			<div class="absolute top-0 right-0 p-4">
				<button
					type="button"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
							d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
						/>
						<path
							d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
						/>
					</svg>
					Upload header
				</button>
			</div>
		</div>

		<div class="pt-0 p-4 sm:pt-0 sm:p-7">
			<!-- Grid -->
			<div class="space-y-4 sm:space-y-6">
				<div>
					<label class="sr-only"> Product photo </label>

					<div class="grid sm:flex sm:items-center sm:gap-x-5">
						<!-- <div
							class="-mt-8 relative z-10 bg-gray-100 dark:bg-gray-700 inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800"
						/> -->
						<img
							class="-mt-8 relative z-10 inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800"
							src="https://images.unsplash.com/photo-1507914630432-36c25334fe9a?auto=format&fit=crop&q=80&w=2049&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Description"
						/>

						<div class="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
							<button
								type="button"
								class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
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
										d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
									/>
									<path
										d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
									/>
								</svg>
								Upload logo
							</button>
							<button
								type="button"
								class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-red-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-red-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
							>
								Delete
							</button>
						</div>
					</div>
				</div>

				<div class="space-y-2">
					<label
						for="af-submit-app-project-name"
						class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
					>
						Business name
					</label>

					<input
						id="af-submit-app-project-name"
						type="text"
						class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
						placeholder="Enter business name"
					/>
				</div>

				<div class="space-y-2">
					<label
						for="af-submit-project-url"
						class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
					>
						Project URL
					</label>

					<input
						id="af-submit-project-url"
						type="text"
						class="py-2 px-3 pr-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
						placeholder="https://example.so"
					/>
				</div>

				<div class="space-y-2">
					<label
						for="af-submit-app-category"
						class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
					>
						Category
					</label>

					<select
						id="af-submit-app-category"
						class="py-2 px-3 pr-9 block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
					>
						<option selected>Select a category</option>
						<option>Ecommerce</option>
						<option>Finance</option>
						<option>Marketplace</option>
						<option>Social</option>
						<option>Others</option>
					</select>
				</div>

				<div class="space-y-2">
					<label
						for="af-submit-app-description"
						class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
					>
						Description
					</label>

					<textarea
						id="af-submit-app-description"
						class="py-2 px-3 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
						rows="6"
						placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
					/>
				</div>
			</div>
			<!-- End Grid -->

			<div class="mt-5 flex justify-end gap-x-2">
				<!-- <button
					type="button" -->
				<a
					href="/register/steps/profile"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium
				bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2
				focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900
				dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
				>
					Back
					<!-- </button> -->
				</a>
				<!-- <button
					type="button" -->
				<a
					href="/dashboard"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
				>
					Finish
				</a>
				<!-- </button> -->
			</div>
		</div>
	</div>
	<!-- End Card -->
</form>
