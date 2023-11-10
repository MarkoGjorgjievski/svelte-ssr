<script lang="ts">
	import Label from '../label/Label.svelte';

	export let options: { label: string; value: string }[] = [];
	export let id: string = '';
	export let label: string = '';
</script>

<Label {id}>{label}</Label>

<select
	{id}
	class="py-3 px-4 pe-9 block w-full border outline-blue-500 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>
