<script>
	import SectionNavbar from '$lib/views/business/layout/SectionNavbar.svelte';
	import CallToActionSection from '$lib/views/shared/sections/main/CallToActionSection.svelte';
	import Faq from '$lib/views/business/sections/faq/FAQ.svelte';
	import FeatureShowcaseSection from '$lib/views/business/sections/features/FeatureShowcaseSection.svelte';
	import IconSection from '$lib/views/business/sections/icons/IconSection.svelte';
	import ClientQuoteSection from '$lib/views/business/sections/testemonials/ClientQuoteSection.svelte';
	import SharedHeroSection from '$lib/views/shared/sections/hero/SharedHeroSection.svelte';
</script>

<SectionNavbar />
<SharedHeroSection buttons>
	<img
		class="w-full rounded-md"
		src="https://images.unsplash.com/photo-1493422884938-abd42cfa0f29?auto=format&fit=crop&q=80&w=2040&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		alt="Description"
	/>
</SharedHeroSection>
<FeatureShowcaseSection />
<IconSection />
<hr />
<ClientQuoteSection />
<hr />
<Faq />
<CallToActionSection />
