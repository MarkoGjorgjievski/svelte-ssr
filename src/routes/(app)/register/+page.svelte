<script>
	import RegisterForm from '$lib/templates/forms/register/RegisterForm.svelte';
	import Header from '$lib/views/shared/layout/header/Header.svelte';
	import SharedHeroSection from '$lib/views/shared/sections/hero/SharedHeroSection.svelte';

	export let data;
</script>

<Header />
<SharedHeroSection blockquote>
	<RegisterForm {data} />
</SharedHeroSection>
