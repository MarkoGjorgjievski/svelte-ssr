<script lang="ts">
	import { cn } from '$lib/helpers/classValue';
	import Label from '../label/Label.svelte';
	import { inputVariants } from './InputCVA';

	export let label: string = 'Label';
	export let placeholder: string = '';
	export let id: string = '';
	export let type: 'text' | 'email' | 'password' = 'text';
	export let variant: 'bordered' | 'underline' = 'bordered';
	export let floating: boolean = false;
	export let size: 'small' | 'default' | 'large' = 'default';
	export let intent: 'default' | 'success' | 'danger' = 'default';
	export let helperText: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;

	const alertIcons = new Map([
		['success', 'bi bi-check-circle-fill'],
		['danger', 'bi bi-exclamation-octagon-fill']
	]);
</script>

{#if floating}
	<div class="relative">
		<input
			{type}
			{id}
			{placeholder}
			{required}
			{disabled}
			aria-relevant="text"
			aria-disabled={disabled}
			class={cn(inputVariants({ size, variant, intent, floating, disabled }))}
		/>
		{#if intent !== 'default'}
			<div class="absolute h-14 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
				<i class="flex-shrink-0 {intent} {alertIcons.get(intent)}" />
			</div>
		{/if}
		<Label variant={floating ? 'floating' : 'default'} {size}>{label}</Label>
		{#if helperText}<p class="text-sm mt-2 helper-text {intent}" {id}>
				{helperText}
			</p>{/if}
	</div>
{:else}
	{#if label}<Label variant={floating ? 'floating' : 'default'} {size}>{label}</Label>{/if}
	<div class="relative">
		<input
			{type}
			{id}
			{placeholder}
			{disabled}
			{required}
			class={cn(inputVariants({ size, variant, intent, floating, disabled }))}
		/>
	</div>
	{#if intent !== 'default'}
		<div class="absolute h-14 inset-y-0 end-0 flex items-center pointer-events-none pe-3">
			<i class="flex-shrink-0 {intent} {alertIcons.get(intent)}" />
		</div>
	{/if}
	{#if helperText}<p class="text-sm mt-2 {intent}" {id}>
			{helperText}
		</p>{/if}
{/if}

<style>
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
