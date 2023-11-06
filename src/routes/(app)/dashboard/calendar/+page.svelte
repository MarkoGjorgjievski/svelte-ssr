<script>
	import { goto } from '$app/navigation';
	import Avatar from '$lib/components/base/avatar/Avatar.svelte';
	import SidePanel from '$lib/components/overlays/SidePanel.svelte';
	import Calendar from '$lib/views/dashboard/calendar/Calendar.svelte';
	import EditEvent from '$lib/templates/forms/events/EditEvent.svelte';
	import { replaceQuery } from '../../../../helpers/replaceQuery';
</script>

<div class="pt-8 pb-4">
	<a class="btn primary solid rounded" href={replaceQuery({ dialog: 'edit' })}>EDIT</a>
	<a class="btn primary solid rounded" href={replaceQuery({ dialog: 'confirm' })}>confirm</a>

	<SidePanel as="edit" title="Edit">
		<EditEvent />
		<button on:click={() => goto(replaceQuery({ dialog: null }))}>Close</button>
	</SidePanel>

	<SidePanel as="confirm" title="Confirm">
		<EditEvent />

		<a class="btn primary solid rounded" href={replaceQuery({ event: '123123' })}>event id</a>
		CONFIRM
	</SidePanel>

	<SidePanel as="add" title="Add">
		<Avatar />
		Adding
	</SidePanel>
	<Calendar />
</div>
