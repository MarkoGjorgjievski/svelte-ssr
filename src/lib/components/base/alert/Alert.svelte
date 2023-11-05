<script lang="ts">
	import './Alert.css';
	import { twMerge } from 'tailwind-merge';
	import type { State, Variant } from '../../types';
	import type { SvelteComponent } from 'svelte';

	type actionButton = {
		onClick: () => void;
		label: string;
	};

	type actionButtonsType = {
		confirm: actionButton;
		reject: actionButton;
	};

	export let variant: Variant = 'neutral';
	export let state: State = 'solid';

	export let actionButtons: actionButtonsType | null = null;
	export let title: string = ''; // App notifications
	// export let message: string = 'Notifications may include alerts, sounds and icon badges.';
	export let icon: typeof SvelteComponent | null = null;
	export let dismissible: boolean = false;
	export let id: string = '';
	export let onDismiss: () => void = () => null;

	const alertIcons = new Map([
		['info', 'bi bi-info-circle-fill'],
		['success', 'bi bi-check-circle-fill'],
		['warning', 'bi bi-exclamation-triangle-fill'],
		['danger', 'bi bi-exclamation-octagon-fill'],
		['neutral', 'bi bi-info-circle-fill']
	]);

	let alert: HTMLElement;

	$: if (!id) {
		alert?.removeAttribute('id');
	}
</script>

<div
	class={twMerge(
		'alert',
		variant,
		state,
		'border rounded-md shadow-lg',
		dismissible && 'hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300'
	)}
	role="alert"
	{id}
	bind:this={alert}
>
	<div class="flex p-4">
		<div class="flex-shrink-0">
			<span
				class={twMerge(variant === 'neutral' ? 'text-primary' : 'text-current', 'h-4 w-4 mt-0.5')}
			>
				{#if icon}
					<svelte:component this={icon} />
				{:else}
					<i class={alertIcons.get(variant)} />
				{/if}
			</span>
		</div>
		<div class={twMerge(title ? 'ml-4' : 'ml-3')}>
			{#if title}<h3 class={twMerge('font-semibold')}>{title}</h3>{/if}
			<div class={twMerge(title && 'mt-1', 'text-sm')}>
				<slot />
			</div>
			{#if actionButtons !== null && !dismissible}<div class="mt-4">
					<div class="flex space-x-3 text-sm font-semibold">
						<button class="underline" on:click={() => actionButtons?.reject.onClick()}
							>{actionButtons.reject.label}</button
						>
						<button class="btn neutral small" on:click={() => actionButtons?.confirm.onClick()}
							>{actionButtons?.confirm.label}</button
						>
					</div>
				</div>
			{/if}
		</div>
		{#if dismissible}
			<div class="ml-auto">
				<button
					type="button"
					class={twMerge(variant === 'neutral' ? 'text-primary' : 'text-current')}
					data-hs-remove-element="#{id}"
					on:click={onDismiss}
				>
					<span class="sr-only">Close</span>
					<i class="bi bi-x-lg" />
				</button>
			</div>
		{/if}
	</div>
</div>
