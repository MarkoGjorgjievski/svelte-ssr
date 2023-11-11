import { registerSchema } from '$lib/templates/forms/register/RegisterSchema';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';

export const load = async () => {
	const form = await superValidate(registerSchema);

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, registerSchema);
		console.log(form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		throw redirect(303, '/register/steps/profile');
	}
};
