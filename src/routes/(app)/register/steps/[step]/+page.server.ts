/** @type {import('./$types').PageLoad} */
import { accountSchema } from '$lib/templates/forms/register/AccountSchema';
import { profileSchema } from '$lib/templates/forms/register/ProfileSchema';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';

export const load = async () => {
	const profileForm = await superValidate(profileSchema, { id: 'profile' });
	const accountForm = await superValidate(accountSchema, { id: 'account' });

	return {
		forms: {
			profile: profileForm,
			account: accountForm
		}
	};
};

export const actions = {
	profile: async ({ request }) => {
		const form = await superValidate(request, profileSchema);
		// console.log('profile', form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		throw redirect(303, '/register/steps/account');
	},

	account: async ({ request }) => {
		const form = await superValidate(request, accountSchema);
		// console.log('account', form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		throw redirect(303, '/dashboard');
	}
};
