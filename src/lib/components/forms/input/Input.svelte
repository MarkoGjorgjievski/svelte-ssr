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
</script>

{#if floating}
	<div class="relative">
		<input
			{type}
			{id}
			{placeholder}
			class={cn(inputVariants({ size, variant, intent, floating }))}
		/>
		<Label variant={floating ? 'floating' : 'default'} {size}>{label}</Label>
		{#if helperText}<p class="text-sm mt-2 helper-text {intent}" {id}>
				{helperText}
			</p>{/if}
	</div>
{:else}
	{#if label}<Label variant={floating ? 'floating' : 'default'} {size}>{label}</Label>{/if}
	<input {type} {id} {placeholder} class={cn(inputVariants({ size, variant, intent, floating }))} />
	{#if helperText}<p class="text-sm mt-2 helper-text {intent}" {id}>
			{helperText}
		</p>{/if}
{/if}

<style>
	.helper-text.danger {
		@apply text-red-500;
	}
	.helper-text.success {
		@apply text-teal-500;
	}
	.helper-text.default {
		@apply text-gray-500;
	}
</style>
