<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let icon: string = '';
	export let label: string = '';
	export let slug: string = '';
	export let query: string = '';
	export let active: boolean = false;
</script>

<a
	class={twMerge(
		'flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 ',
		active && 'text-blue-600 hover:bg-transparent dark:text-white'
	)}
	href={`${slug}${query}`}
>
	<i class={icon} />
	{label}
</a>
