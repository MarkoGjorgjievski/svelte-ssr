<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { clickOutside } from '$lib/helpers/clickOutside';
	import { goto } from '$app/navigation';

	export let as = '';
	export let title = '';

	$: isOpen = $page.url.searchParams.get('dialog') === as;

	const closeSidePanel: () => void = () => {
		$page.url.searchParams.delete('dialog');
		// in case we want to delete any selected event for which the dialog was open (check notification dropdown)
		// $page.url.searchParams.delete('event');
		goto($page.url.href);
		isOpen = false;
	};

	const handleClickOutside = () => closeSidePanel();

	const handleKeydown = (event: KeyboardEvent) => {
		event.key === 'Escape' && closeSidePanel();
	};
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		transition:fly|global={{ x: 100, duration: 400 }}
		use:clickOutside
		on:click_outside={handleClickOutside}
		class="side-panel fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full z-[62] bg-white border-l dark:bg-gray-800 dark:border-gray-700"
		tabindex="-1"
	>
		<div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
			<h3 class="font-bold text-gray-800 dark:text-white">{title}</h3>
			<button
				on:click={closeSidePanel}
				type="button"
				class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
			>
				<span class="sr-only">Close modal</span>
				<svg
					class="w-3.5 h-3.5"
					width="8"
					height="8"
					viewBox="0 0 8 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
		<div class="p-4">
			<slot />
		</div>
	</div>

	<div
		transition:fade|global={{ duration: 200 }}
		class="fixed inset-0 z-[61] bg-gray-900 bg-opacity-50 dark:bg-opacity-80 pointer-events-hidden"
	/>
{/if}
