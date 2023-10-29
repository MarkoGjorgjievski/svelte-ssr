<script lang="ts">
	import Loader from '../loader/Loader.svelte';
	import './Button.css';
	import { twMerge } from 'tailwind-merge';

	import type { Size, State, Variant, Width } from '../../types';

	export let label: string = '';
	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let size: Size = 'medium';
	export let state: State | 'outline' | 'ghost' = 'solid';
	export let variant: Variant | 'transparent' = 'neutral';
	export let width: Width = '';
	export let rounded: 'full' | 'medium' = 'medium';

	const roundedStyle = new Map([
		['full', 'rounded-full'],
		['medium', 'rounded-md']
	]);
</script>

<button
	on:click
	class={twMerge(
		'btn',
		size,
		state,
		width,
		variant,
		roundedStyle.get(rounded),
		loading && 'loading'
	)}
	{disabled}
	type="button"
	{...$$restProps}
>
	{#if loading}
		<Loader />
	{/if}
	<slot name="iconStart" />
	{label}
	<slot name="iconEnd" />
</button>
