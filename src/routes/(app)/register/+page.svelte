<script>
	import RegisterForm from '$lib/templates/forms/register/RegisterForm.svelte';
	import Header from '$lib/views/shared/layout/header/Header.svelte';
	import JoinUsSection from '$lib/views/register/sections/hero/JoinUsSection.svelte';
</script>

<Header />
<JoinUsSection>
	<RegisterForm />
</JoinUsSection>
