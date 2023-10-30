<script>
	import { goto } from '$app/navigation';
	import Tabs from '$lib/components/navigations/tabs/Tabs.svelte';
	import ProfileImageAndTitle from '$lib/templates/molecules/ProfileImageAndTitle.svelte';
	import { onMount } from 'svelte';

	export let data;
</script>

<div class="-mx-4 sm:-mx-6 md:-mx-8">
	<ProfileImageAndTitle />
</div>

<div class="pt-2">
	<Tabs tabs={data.tabs} />
</div>

<div class="py-8">
	<slot />
</div>
