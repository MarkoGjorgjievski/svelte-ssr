<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { profileSchema } from './ProfileSchema';
	import Input from '$lib/components/forms/input/Input.svelte';
	import type { ProfileSchema } from './ProfileSchema';
	import Button from '$lib/components/base/button/Button.svelte';

	export let data: { profile: SuperValidated<ProfileSchema> };

	const { form, errors, enhance } = superForm(data.profile, {
		id: 'profile',
		validators: profileSchema
	});
</script>

<!-- Card -->
<div
	class="bg-white rounded-xl p-4 sm:p-7 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
>
	<div class="mb-8">
		<h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Profile</h2>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			Manage your name, password and account settings.
		</p>
	</div>

	<form method="POST" use:enhance id="profile">
		<!-- Grid -->
		<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
			<div class="sm:col-span-3">
				<label
					for="profilePhoto"
					class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
				>
					Profile photo
				</label>
			</div>
			<!-- End Col -->

			<div class="sm:col-span-9">
				<div class="flex items-center gap-5">
					<div
						class="inline-block h-16 w-16 rounded-full ring-2 bg-gray-200 ring-white dark:ring-gray-800"
					/>
					<!-- <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="" alt="Description" /> -->

					<!-- File upload input -->
					<Button><i class="bi bi-upload" /> Upload photo</Button>
				</div>
			</div>
			<!-- End Col -->

			<div class="sm:col-span-3">
				<label for="firstName" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
					Full name
				</label>
			</div>

			<div class="sm:col-span-9">
				<div class="sm:flex rounded-lg">
					<Input
						id="firstName"
						name="firstName"
						placeholder="Maria"
						floating={false}
						class="rounded-r-none border-r-transparent"
						bind:value={$form.firstName}
						errorMessage={$errors.firstName || ''}
						intent={$errors.firstName ? 'danger' : 'default'}
					/>
					<Input
						id="lastName"
						name="lastName"
						placeholder="Sharapova"
						floating={false}
						class="rounded-l-none"
						bind:value={$form.lastName}
						errorMessage={$errors.lastName || ''}
						intent={$errors.lastName ? 'danger' : 'default'}
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
					Email
				</label>
			</div>

			<div class="sm:col-span-9">
				<div class=" rounded-lg">
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="maria@yourmail.com"
						floating={false}
						bind:value={$form.email}
						errorMessage={$errors.email || ''}
						intent={$errors.email ? 'danger' : 'default'}
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label
					for="phoneNumber"
					class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
				>
					Phone
				</label>
			</div>

			<div class="sm:col-span-9 h-full">
				<div class="flex rounded-lg h-full">
					<div class="flex flex-col">
						<div
							class="px-4 h-full flex justify-center items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
						>
							+389
						</div>
						{#if $errors.phoneNumber}<div class="text-sm mt-2 text-transparent">.</div>{/if}
					</div>

					<Input
						id="phoneNumber"
						name="phoneNumber"
						placeholder="(xx)xxxxxx"
						floating={false}
						class="rounded-l-none"
						bind:value={$form.phoneNumber}
						errorMessage={$errors.phoneNumber || ''}
						intent={$errors.phoneNumber ? 'danger' : 'default'}
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="position" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
					Position
				</label>
			</div>

			<div class="sm:col-span-9">
				<div class=" rounded-lg">
					<Input
						id="position"
						name="position"
						placeholder="Make up artist"
						floating={false}
						bind:value={$form.position}
						errorMessage={$errors.position || ''}
						intent={$errors.position ? 'danger' : 'default'}
					/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label for="facebook" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
					Social links
				</label>
			</div>

			<div class="sm:col-span-9">
				<div class="flex rounded-lg">
					<Input
						id="facebook"
						name="facebook"
						label="Facebook"
						class="rounded-r-none border-r-transparent"
						bind:value={$form.facebook}
						errorMessage={$errors.facebook || ''}
						intent={$errors.facebook ? 'danger' : 'default'}
					/>
					<Input
						id="instagram"
						name="instagram"
						label="Instagram"
						class="rounded-l-none"
						bind:value={$form.instagram}
						errorMessage={$errors.instagram || ''}
						intent={$errors.instagram ? 'danger' : 'default'}
					/>
				</div>
			</div>
		</div>
	</form>
</div>
