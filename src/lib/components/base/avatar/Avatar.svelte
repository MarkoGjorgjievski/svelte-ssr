<!-- <script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Size } from '../../types';

	export let size: Size | 'smallest' = 'medium';
	export let rounded: 'medium' | 'full' = 'full';
	export let active: boolean = false;

	const roundedStyle = new Map([
		['medium', 'rounded-md'],
		['full', 'rounded-full']
	]);
</script>

<img
	class={twMerge(
		'inline-block h-[2.875rem] w-[2.875rem] ring-2 ring-white dark:ring-gray-800',
		size,
		roundedStyle.get(rounded),
		active && 'active'
	)}
	src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
	alt="Description"
/>

<style lang="postcss">
	.smallest {
		@apply h-8 w-8;
	}
	.small {
		@apply h-[2.375rem] w-[2.375rem];
	}
	.medium {
		@apply h-[2.875rem] w-[2.875rem];
	}
	.large {
		@apply h-[3.875rem] w-[3.875rem];
	}
	.active {
		@apply ring-primary;
	}
</style> -->
