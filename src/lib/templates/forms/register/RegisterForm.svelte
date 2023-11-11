<script>
	import Button from '$lib/components/base/button/Button.svelte';
	import Checkbox from '$lib/components/forms/checkbox/Checkbox.svelte';
	import Input from '$lib/components/forms/input/Input.svelte';
	import RegisterFormHeader from './RegisterFormHeader.svelte';
</script>

<div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
	<!-- Card -->
	<div class="card">
		<RegisterFormHeader />

		<form>
			<div class="grid grid-cols-2 gap-4">
				<Input id="firstName" label="First name" />
				<Input id="lastName" label="Last name" />
				<Input id="email" label="Email" type="email" />
				<Input id="companyName" label="Company name" />

				<div class="relative col-span-full">
					<Input id="password" type="password" label="New password" />
				</div>
			</div>

			<div class="mt-5 inline-flex gap-1 items-center">
				<Checkbox label="I accept the" id="terms-and-conditions" />
				<a class="anchor text-sm" href="#">Terms and Conditions</a>
			</div>

			<div class="mt-5">
				<Button width="block" intent="primary" variant="solid">Get started</Button>
			</div>
		</form>
	</div>
	<!-- End Card -->
</div>
