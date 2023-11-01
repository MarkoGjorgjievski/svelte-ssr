<script>
	import { browser } from '$app/environment';
	import Avatar from '$lib/components/base/avatar/Avatar.svelte';
	import SidePanel from '$lib/components/overlays/SidePanel.svelte';
	import Calendar from '$lib/templates/dashboard/calendar/Calendar.svelte';
	import EditEvent from '$lib/templates/forms/events/EditEvent.svelte';
	import { openDialog } from '../../../../helpers/replaceQuery';

	let editUrl;
	let addUrl;
	if (browser) {
		editUrl = openDialog('edit');
		console.log(editUrl);
		addUrl = openDialog('add');
	}
</script>

<div class="pt-8 pb-4">
	<a class="btn primary solid rounded" href={editUrl}>EDIT</a>
	<a class="btn success solid rounded" href={addUrl}>ADD</a>

	<SidePanel as="edit" title="Edit">
		<EditEvent />
	</SidePanel>

	<SidePanel as="add" title="Add">
		<Avatar />
		Adding
	</SidePanel>
	<Calendar />
</div>
