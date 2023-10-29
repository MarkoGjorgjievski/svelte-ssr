<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import AccordionSidebarItem from '$lib/components/base/accordion/AccordionSidebarItem.svelte';
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
			<li><AccordionSidebarItem label="Dashboard" icon="bi bi-house" /></li>

			<li class="hs-accordion" id="users-accordion">
				<AccordionSidebarItem label="Users" icon="bi bi-people" hasChildren />

				<div
					id="users-accordion-child"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
				>
					<ul class="hs-accordion-group pl-3 pt-2" data-hs-accordion-always-open>
						<li class="hs-accordion" id="users-accordion-sub-1">
							<AccordionSidebarItem label="Sub Menu" hasChildren />

							<div
								id="users-accordion-sub-1-child"
								class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
							>
								<ul class="pt-2 pl-2">
									<li><AccordionSidebarItem label="Item 1" /></li>
									<li><AccordionSidebarItem label="Item 2" /></li>
									<li><AccordionSidebarItem label="Item 3" /></li>
								</ul>
							</div>
						</li>
						<li class="hs-accordion" id="users-accordion-sub-2">
							<AccordionSidebarItem label="Sub Menu" hasChildren />

							<div
								id="users-accordion-sub-2-child"
								class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2"
							>
								<ul class="pt-2 pl-2">
									<li><AccordionSidebarItem label="Item 1" /></li>
									<li><AccordionSidebarItem label="Item 2" /></li>
									<li><AccordionSidebarItem label="Item 3" /></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</li>

			<li class="hs-accordion" id="account-accordion">
				<AccordionSidebarItem label="Account" icon="bi bi-person-circle" hasChildren />

				<div
					id="account-accordion-child"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
				>
					<ul class="pt-2 pl-2">
						<li><AccordionSidebarItem label="Item 1" /></li>
						<li><AccordionSidebarItem label="Item 2" /></li>
						<li><AccordionSidebarItem label="Item 3" /></li>
					</ul>
				</div>
			</li>

			<li>
				<AccordionSidebarItem label="Calendar" icon="bi bi-calendar-week" />
			</li>
			<li><AccordionSidebarItem label="Analytics" icon="bi bi-bar-chart" /></li>
		</ul>
		<ThemeSwitcher />
	</nav>
</div>
