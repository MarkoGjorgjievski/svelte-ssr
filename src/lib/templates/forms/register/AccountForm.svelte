<script>
	import { superForm } from 'sveltekit-superforms/client';
	import Input from '$lib/components/forms/input/Input.svelte';
	import { accountSchema } from '$lib/templates/forms/register/AccountSchema';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;

	$: console.log('account data', data);

	const { form, errors, enhance } = superForm(data.accountForm, {
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
