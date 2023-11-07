<script>
	import Table from '$lib/components/tables/Table.svelte';
	import ProfileImageAndTitle from '$lib/templates/molecules/ProfileImageAndTitle.svelte';

	import { page } from '$app/stores';

	$: console.log($page);
</script>

<div class="-mx-4 sm:-mx-6 md:-mx-8">
	<ProfileImageAndTitle />
</div>
<Table />
