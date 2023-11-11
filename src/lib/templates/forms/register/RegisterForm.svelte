<script lang="ts">
	import Button from '$lib/components/base/button/Button.svelte';
	import Checkbox from '$lib/components/forms/checkbox/Checkbox.svelte';
	import Input from '$lib/components/forms/input/Input.svelte';
	import RegisterFormHeader from './RegisterFormHeader.svelte';
	import { registerSchema } from './RegisterSchema';

	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data;

	const { form, errors, enhance } = superForm(data.form, {
		validators: registerSchema
	});
</script>

{#if $errors.firstName}<h1>{$errors.firstName}</h1>{/if}

<div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
	<!-- Card -->
	<div class="card">
		<RegisterFormHeader />

		<form method="POST" use:enhance>
			<div class="grid grid-cols-2 gap-4">
				<Input
					id="firstName"
					name="firstName"
					label="First name"
					bind:value={$form.firstName}
					errorMessage={$errors.firstName || ''}
					intent={$errors.firstName ? 'danger' : 'default'}
				/>
				<Input
					id="lastName"
					name="lastName"
					label="Last name"
					bind:value={$form.lastName}
					errorMessage={$errors.lastName || ''}
					intent={$errors.lastName ? 'danger' : 'default'}
				/>
				<Input
					id="email"
					name="email"
					label="Email"
					type="email"
					bind:value={$form.email}
					errorMessage={$errors.email || ''}
				/>
				<Input
					id="companyName"
					name="companyName"
					label="Company name"
					bind:value={$form.companyName}
					errorMessage={$errors.companyName || ''}
					intent={$errors.companyName ? 'danger' : 'default'}
				/>

				<div class="relative col-span-full">
					<Input
						id="password"
						name="password"
						type="password"
						label="New password"
						bind:value={$form.password}
						errorMessage={$errors.password || ''}
						intent={$errors.password ? 'danger' : 'default'}
					/>
				</div>
				<div class="relative col-span-full">
					<Input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						label="Confirm password"
						bind:value={$form.confirmPassword}
						errorMessage={$errors.confirmPassword || ''}
						intent={$errors.confirmPassword ? 'danger' : 'default'}
					/>
				</div>
			</div>

			<div class="mt-5">
				<Checkbox
					id="terms-and-conditions"
					name="terms-and-conditions"
					bind:checked={$form.termsAndConditions}
					label="I accept the"
				>
					<a class="anchor text-sm" href="/register">Terms and Conditions</a>
				</Checkbox>
			</div>

			<div class="mt-5">
				<Button width="block" intent="primary" variant="solid" type="submit">Get started</Button>
			</div>
		</form>
		<div class="mt-5">
			<SuperDebug data={$form} />
		</div>
	</div>
	<!-- End Card -->
</div>
