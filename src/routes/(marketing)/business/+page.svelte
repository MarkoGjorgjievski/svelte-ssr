<script>
	import SectionNavbar from '$lib/views/business/layout/SectionNavbar.svelte';
	import CallToActionSection from '$lib/views/shared/sections/main/CallToActionSection.svelte';
	import Faq from '$lib/views/business/sections/faq/FAQ.svelte';
	import FeatureShowcaseSection from '$lib/views/business/sections/features/FeatureShowcaseSection.svelte';
	import MarketingHeroSection from '$lib/views/business/sections/hero/MarketingHeroSection.svelte';
	import IconSection from '$lib/views/business/sections/icons/IconSection.svelte';
	import ClientsLogoSection from '$lib/views/business/sections/testemonials/ClientsLogoSection.svelte';
	import ClientQuoteSection from '$lib/views/business/sections/testemonials/ClientQuoteSection.svelte';
</script>

<SectionNavbar />
<MarketingHeroSection />
<ClientsLogoSection />
<FeatureShowcaseSection />
<IconSection />
<hr />
<ClientQuoteSection />
<hr />
<Faq />
<CallToActionSection />
