<script lang="ts">
	export let label: string = 'Label';
	export let checked: boolean = false;
	export let id: string = '';
	export let errorMessage: string | unknown = '';
	export let helperText: string = '';
	export let name: string = '';
</script>

<div class="flex">
	<input
		bind:checked
		type="checkbox"
		{id}
		{name}
		class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
	/>

	<label for={id} class="text-sm text-gray-500 ms-3 dark:text-gray-400 gap-x-1">
		{label}
		<slot />
	</label>
</div>

<div>
	{#if errorMessage || helperText}<p class="text-sm mt-2 helper-text">
			{errorMessage || helperText}
		</p>{/if}
</div>
