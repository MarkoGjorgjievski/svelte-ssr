<script lang="ts">
	import { page } from '$app/stores';
	import type { ComponentType } from 'svelte';
	import { replaceQuery } from '$lib/helpers/replaceQuery';

	type Tab = { query: string; label: string; component: ComponentType };

	export let tabs: Tab[] = [];

	let tabsObj: Record<string, Tab> = tabs.reduce(
		(obj, item) => Object.assign(obj, { [item.query]: { ...item } }),
		{}
	);

	$: activeTab = $page.url.searchParams.get('tab');
</script>

<div class="border-b border-base-200">
	<div class="flex space-x-2" aria-label="Tabs" role="tablist">
		{#each tabs as tab}
			<a
				class:active={activeTab === tab.query}
				class="py-4 px-1 inline-flex items-center gap-2 border-b-[3px] text-sm whitespace-nowrap border-transparent text-gray-500 hover:text-primary"
				id="tabs-with-underline-item-{tab.query}"
				aria-controls="tabs-with-underline-{tab.query}"
				data-hs-tab="#tabs-with-underline-{tab.query}"
				role="tab"
				href={replaceQuery({ tab: tab.query })}
			>
				{tab.label}
			</a>
		{/each}
	</div>
</div>

<div class="py-6">
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
