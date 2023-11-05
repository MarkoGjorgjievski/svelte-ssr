<script lang="ts">
	import { page } from '$app/stores';
	import { type SvelteComponent } from 'svelte';
	import { findQuery, replaceQuery } from '../../../../helpers/replaceQuery';

	type Tab = { slug: string; label: string; component: SvelteComponent };

	export let tabs: Tab[] = [];

	let tabsObj: Record<string, Tab> = tabs.reduce(
		(obj, item) => Object.assign(obj, { [item.slug]: { ...item } }),
		{}
	);

	$: activeTab = findQuery('tab');

	$: {
		$page.url.searchParams, (activeTab = findQuery('tab'));
	}
</script>

<div class="border-b border-base-200">
	<div class="flex space-x-2" aria-label="Tabs" role="tablist">
		{#each tabs as tab}
			<a
				class:active={$page.url.search.includes(`tab=${tab.slug}`)}
				class="py-4 px-1 inline-flex items-center gap-2 border-b-[3px] text-sm whitespace-nowrap border-transparent text-gray-500 hover:text-primary"
				id="tabs-with-underline-item-{tab.slug}"
				aria-controls="tabs-with-underline-{tab.slug}"
				data-hs-tab="#tabs-with-underline-{tab.slug}"
				role="tab"
				href={replaceQuery({ tab: tab.slug })}
			>
				{tab.label}
			</a>
		{/each}
	</div>
</div>

<div class="mt-6">
	<div
		id="tabs-with-underline-{activeTab}"
		role="tabpanel"
		aria-labelledby="tabs-with-underline-item-{activeTab}"
	>
		{#if activeTab}
			<svelte:component this={tabsObj[activeTab].component} />
		{/if}
	</div>
</div>

<style>
	.active {
		@apply font-semibold border-primary text-primary;
	}
</style>
