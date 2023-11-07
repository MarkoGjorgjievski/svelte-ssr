<script>
	import RegisterFirstForm from '$lib/templates/forms/register/RegisterFirstForm.svelte';
	import Header from '$lib/views/shared/layout/header/Header.svelte';
	import SharedHeroSection from '$lib/views/shared/sections/hero/SharedHeroSection.svelte';
</script>

<Header />
<SharedHeroSection blockquote>
	<RegisterFirstForm />
</SharedHeroSection>
