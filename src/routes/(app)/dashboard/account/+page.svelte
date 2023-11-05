<script>
	import Tabs from '$lib/components/navigations/tabs/Tabs.svelte';

	export let data;
</script>

<div class="pt-2">
	<Tabs tabs={data.tabs} />
</div>
