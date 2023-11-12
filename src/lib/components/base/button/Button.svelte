<script lang="ts">
	import Loader from '../loader/Loader.svelte';
	import { buttonVariants } from './ButtonCVA';
	import type { Intent, Size, Variant } from '../../types';
	import { cn } from '$lib/helpers/classValue';

	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let size: Size = 'default';
	export let variant: Variant = 'white';
	export let width: 'block' | 'shrink' | null = null;
	export let shape: 'pill' | 'rounded' = 'rounded';
	export let trailingDivider: boolean = false;
	export let intent: Intent = 'dark';
	export let type: 'button' | 'submit' = 'button';
</script>

<button
	on:click
	class={cn(buttonVariants({ size, variant, intent, width, shape, disabled, trailingDivider }))}
	{disabled}
	{type}
	{...$$restProps}
>
	{#if loading}
		<Loader />
	{/if}
	<slot />
</button>
