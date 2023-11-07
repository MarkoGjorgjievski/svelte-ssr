<!-- <script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly, scale } from 'svelte/transition';
	import { clickOutside } from '$lib/helpers/clickOutside';
	import { goto } from '$app/navigation';

	// DOESNT WORK

	export let as = '';

	$: isOpen = $page.url.searchParams.get('modal') === as;

	const closeSidePanel: () => void = () => {
		$page.url.searchParams.delete('modal');
		goto($page.url.href);
		isOpen = false;
	};

	const handleClickOutside = () => closeSidePanel();

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === '/' && event.ctrlKey) {
			isOpen = true;
			return;
		}
		event.key === 'Escape' && closeSidePanel();
	};
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		transition:scale|global={{ duration: 300, opacity: 0, start: 0.9 }}
		use:clickOutside
		on:click_outside={handleClickOutside}
		class="modal w-full max-w-md h-full fixed top-10 left-1/2 -translate-x-1/2 z-[62] overflow-x-hidden overflow-y-auto p-2"
		tabindex="-1"
	>
		<slot />
	</div>

	<div
		transition:fade|global={{ duration: 200 }}
		class="fixed inset-0 z-[61] bg-gray-900 bg-opacity-50 dark:bg-opacity-80 pointer-events-hidden"
	/>
{/if} -->
