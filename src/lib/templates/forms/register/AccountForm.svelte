<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Input from '$lib/components/forms/input/Input.svelte';
	import { accountSchema } from '$lib/templates/forms/register/AccountSchema';
	import type { AccountSchema } from '$lib/templates/forms/register/AccountSchema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import Button from '$lib/components/base/button/Button.svelte';
	import Select from '$lib/components/forms/select/Select.svelte';

	export let data: { account: SuperValidated<AccountSchema> };

	const { form, errors, enhance } = superForm(data.account, {
		id: 'account',
		validators: accountSchema
	});

	const categories = [
		{ label: 'one', value: '1' },
		{ label: 'two', value: '2' }
	];
</script>

<form method="POST" use:enhance id="account">
	<!-- Card -->
	<div
		class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
	>
		<div
			class="relative h-40 rounded-t-xl bg-gray-100 dark:bg-gray-700 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center"
		>
			<div class="absolute top-0 right-0 p-4">
				<Button><i class="bi bi-upload" /> Upload header</Button>
			</div>
		</div>

		<div class="pt-0 p-4 sm:pt-0 sm:p-7">
			<!-- Grid -->
			<div class="space-y-4 sm:space-y-6">
				<div>
					<label for="upload" class="sr-only"> Product photo </label>

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
							<Button><i class="bi bi-upload" /> Upload logo</Button>
							<Button intent="danger">Delete</Button>
						</div>
					</div>
				</div>

				<Input
					id="businessName"
					name="businessName"
					label="Business name"
					placeholder="Enter a business name"
					floating={false}
				/>

				<Select
					id="category"
					name="category"
					label="Category"
					bind:selected={categories[1].value}
					options={categories}
				/>

				<Select
					id="tags"
					name="tags"
					label="Tags"
					bind:selected={categories[1].value}
					options={categories}
				/>

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
		</div>
	</div>
	<!-- End Card -->
</form>
