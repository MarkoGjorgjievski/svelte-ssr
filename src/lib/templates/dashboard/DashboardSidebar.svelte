<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import AccordionSidebarItem from '$lib/components/base/accordion/AccordionSidebarItem.svelte';

	const baseUrl = '/dashboard';
</script>

<div
	id="application-sidebar"
	class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
>
	<div class="px-6">
		<a class="flex-none text-xl font-semibold dark:text-white" href="/" aria-label="Brand">Brand</a>
	</div>

	<nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
		<ul class="space-y-1.5">
			<li><AccordionSidebarItem label="Dashboard" icon="bi bi-house" slug={baseUrl} /></li>
			<li>
				<AccordionSidebarItem
					label="Calendar"
					icon="bi bi-calendar-week"
					slug="{baseUrl}/calendar"
				/>
			</li>
			<li>
				<AccordionSidebarItem label="Account" icon="bi bi-person-vcard" slug="{baseUrl}/account" />
			</li>
			<li><AccordionSidebarItem label="Staff" icon="bi bi-people" slug="{baseUrl}/staff" /></li>
			<li>
				<AccordionSidebarItem label="Analytics" icon="bi bi-bar-chart" slug="{baseUrl}/analytics" />
			</li>
			<li>
				<AccordionSidebarItem label="Clients" icon="bi bi-stars" slug="{baseUrl}/clients" />
			</li>
		</ul>
	</nav>
</div>
