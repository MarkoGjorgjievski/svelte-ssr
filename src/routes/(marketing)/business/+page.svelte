<script>
	import Faq from '$lib/templates/sections/faq/FAQ.svelte';
	import FeatureShowcase from '$lib/templates/sections/features/FeatureShowcase.svelte';
	import MarketingHeroSection from '$lib/templates/sections/hero/MarketingHeroSection.svelte';
	import IconSection from '$lib/templates/sections/icons/IconSection.svelte';
	import CallToActionSection from '$lib/templates/sections/main/CallToActionSection.svelte';
	import SectionNavbar from '$lib/templates/sections/navbar/SectionNavbar.svelte';
	import PricingSection from '$lib/pages/pricing/PricingSection.svelte';
	import ClientQuotes from '$lib/templates/sections/testemonials/ClientQuotes.svelte';
	import ClientsSection from '$lib/templates/sections/testemonials/ClientsSection.svelte';
</script>

<SectionNavbar />
<MarketingHeroSection />
<ClientsSection />
<FeatureShowcase />
<IconSection />
<hr />
<ClientQuotes />
<hr />
<Faq />
<CallToActionSection />
