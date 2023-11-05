<script>
	import { browser } from '$app/environment';
	import Avatar from '$lib/components/base/avatar/Avatar.svelte';
	import SidePanel from '$lib/components/overlays/SidePanel.svelte';
	import Calendar from '$lib/templates/dashboard/calendar/Calendar.svelte';
	import EditEvent from '$lib/templates/forms/events/EditEvent.svelte';
	import { replaceQuery } from '../../../../helpers/replaceQuery';
</script>

<div class="pt-8 pb-4">
	<a class="btn primary solid rounded" href={replaceQuery({ dialog: 'edit' })}>EDIT</a>

	<SidePanel as="edit" title="Edit">
		<EditEvent />
	</SidePanel>

	<SidePanel as="add" title="Add">
		<Avatar />
		Adding
	</SidePanel>
	<Calendar />
</div>
