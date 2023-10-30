<script lang="ts">
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	class="inline-flex justify-center items-center text-slate-600 hover:text-slate-500 text-sm dark:text-slate-400 dark:hover:text-slate-300"
	on:click={handleSwitchDarkMode}
>
	{#if !darkMode}
		<i class="bi bi-moon" />
	{:else}
		<i class="bi bi-brightness-high" />
	{/if}
</button>
