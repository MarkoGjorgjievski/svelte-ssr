<script>
	import { page } from '$app/stores';
	import AccordionSidebarItem from '$lib/components/base/accordion/AccordionSidebarItem.svelte';

	const baseUrl = '/dashboard';

	const routes = [
		{ label: 'Dashboard', icon: 'house', slug: baseUrl },
		{ label: 'Calendar', icon: 'calendar-week', slug: `${baseUrl}/calendar` },
		{ label: 'Account', icon: 'person-vcard', slug: `${baseUrl}/account`, query: '?tab=general' },
		{ label: 'Staff', icon: 'people', slug: `${baseUrl}/staff` },
		{ label: 'Analytics', icon: 'bar-chart', slug: `${baseUrl}/analytics` },
		{ label: 'Clients', icon: 'stars', slug: `${baseUrl}/clients` }
	];
</script>

<div
	id="application-sidebar"
	class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
>
	<div class="px-6">
		<a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">Taman</a>
		<p class="flex-none text-sm text-gray-600 dark:text-gray-400">Alley Barber Shop</p>
	</div>

	<nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
		<ul class="space-y-1.5">
			{#each routes as { label, icon, slug, query }}
				<li>
					<AccordionSidebarItem
						{label}
						icon="bi bi-{icon}"
						{slug}
						active={$page.url.pathname === slug}
						{query}
					/>
				</li>
			{/each}
		</ul>
	</nav>
</div>
