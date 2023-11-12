/** @type {import('./$types').PageLoad} */
import { accountSchema } from '$lib/templates/forms/register/AccountSchema.js';
import { profileSchema } from '$lib/templates/forms/register/ProfileSchema.js';
import { registerSchema } from '$lib/templates/forms/register/RegisterSchema';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';

export const load = async () => {
	const form = await superValidate(registerSchema);

	return { form };
};

export const actions = {
	profile: async ({ request }) => {
		const form = await superValidate(request, profileSchema);
		console.log('profile', form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		throw redirect(303, '/register/steps/account');
	},

	account: async ({ request }) => {
		const form = await superValidate(request, accountSchema);
		console.log('account', form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		throw redirect(303, '/dashboard');
	}
};
