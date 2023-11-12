<script>
	import { superForm } from 'sveltekit-superforms/client';
	import { profileSchema } from './ProfileSchema';
	import Input from '$lib/components/forms/input/Input.svelte';

	export let data;

	$: console.log(data);

	const { form, errors, enhance } = superForm(data.form, {
		validators: profileSchema
	});
</script>

<!-- Card -->
<div
	class="bg-white rounded-xl p-4 sm:p-7 border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
>
	<div class="mb-8">
		<h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Profile</h2>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Manage your name, password and account settings.
		</p>
	</div>
	<form method="POST" use:enhance id="profile">
		<div class="grid grid-cols-2 gap-4">
			<Input
				id="firstName"
				name="firstName"
				label="First name"
				bind:value={$form.firstName}
				errorMessage={$errors.firstName || ''}
				intent={$errors.firstName ? 'danger' : 'default'}
			/>
		</div>
	</form>
</div>
<!-- End Card -->
