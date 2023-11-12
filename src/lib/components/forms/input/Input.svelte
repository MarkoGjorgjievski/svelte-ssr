<script lang="ts">
	import { cn } from '$lib/helpers/classValue';
	import Label from '../label/Label.svelte';
	import { inputVariants } from './InputCVA';

	export let label: string = '';
	export let placeholder: string = '';
	export let id: string = '';
	export let type: 'text' | 'email' | 'password' = 'text';
	export let variant: 'bordered' | 'underline' = 'bordered';
	export let floating: boolean = true;
	export let size: 'small' | 'default' | 'large' = 'default';
	export let helperText: string | unknown = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let value: string | unknown = '';
	export let errorMessage: string | unknown = '';
	export let intent: 'default' | 'success' | 'danger' = 'default';
	export let name: string = '';

	const alertIcons = new Map([
		['success', 'bi bi-check-circle-fill'],
		['danger', 'bi bi-exclamation-octagon-fill']
	]);

	const typeAction = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

{#if floating}
	<div class="relative w-full">
		<input
			use:typeAction
			{id}
			{name}
			{placeholder}
			{required}
			{disabled}
			bind:value
			aria-relevant="text"
			aria-disabled={disabled}
			class={cn(inputVariants({ size, variant, intent, floating, disabled }), $$props.class)}
		/>
		{#if intent !== 'default'}
			<div class="absolute h-14 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
				<i class="flex-shrink-0 {intent} {alertIcons.get(intent)}" />
			</div>
		{/if}
		<Label {label} variant={floating ? 'floating' : 'default'} {size} />
		{#if errorMessage || helperText}<p class="text-sm mt-2 helper-text {intent}">
				{errorMessage || helperText}
			</p>{/if}
	</div>
{:else}
	{#if label}<Label {label} variant={floating ? 'floating' : 'default'} {size} />{/if}
	<div class="relative w-full">
		<input
			use:typeAction
			{id}
			{name}
			{placeholder}
			{required}
			{disabled}
			bind:value
			aria-relevant="text"
			aria-disabled={disabled}
			class={cn(inputVariants({ size, variant, intent, floating, disabled }), $$props.class)}
		/>
		{#if intent !== 'default'}
			<div class="absolute h-12 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
				<i class="flex-shrink-0 {intent} {alertIcons.get(intent)}" />
			</div>
		{/if}
		{#if errorMessage || helperText}<p class="text-sm mt-2 {intent}">
				{errorMessage || helperText}
			</p>{/if}
	</div>
{/if}

<style lang="postcss">
	.danger {
		@apply text-red-500;
	}
	.success {
		@apply text-teal-500;
	}
	.default {
		@apply text-gray-500;
	}
</style>
