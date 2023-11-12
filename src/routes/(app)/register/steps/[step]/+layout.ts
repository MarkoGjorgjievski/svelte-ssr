import ProfileForm from '$lib/templates/forms/register/ProfileForm.svelte';
import AccountForm from '$lib/templates/forms/register/AccountForm.svelte';

import type { ComponentType } from 'svelte';

type Step = { slug: string; label: string; component: ComponentType };

export const load = async () => {
	const steps: Step[] = [
		{ slug: 'profile', label: 'Profile', component: ProfileForm },
		{ slug: 'account', label: 'Account', component: AccountForm }
	];

	return { steps };
};
