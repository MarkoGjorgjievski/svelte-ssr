<script>
	import Button from '$lib/components/base/button/Button.svelte';
	import GoogleLogoIcon from '$lib/ui/icons/GoogleLogoIcon.svelte';
</script>

<div class="text-center">
	<h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Start your free trial</h1>
	<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
		Already have an account?
		<a class="anchor" href="auth/signin">Sign in here </a>
	</p>
</div>

<div class="mt-5">
	<Button width="block">
		<GoogleLogoIcon />
		Sign up with Google
	</Button>

	<div class="divider uppercase">Or</div>
</div>
