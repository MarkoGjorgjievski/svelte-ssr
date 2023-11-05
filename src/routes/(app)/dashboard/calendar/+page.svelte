<script>
	import { browser } from '$app/environment';
	import Avatar from '$lib/components/base/avatar/Avatar.svelte';
	import SidePanel from '$lib/components/overlays/SidePanel.svelte';
	import Calendar from '$lib/templates/dashboard/calendar/Calendar.svelte';
	import EditEvent from '$lib/templates/forms/events/EditEvent.svelte';
	import { replaceQuery } from '../../../../helpers/replaceQuery';

	let isOpen = true;

	// Binding the prop in the parent component, allows the prop to be changed by the child component.
</script>

<div class="pt-8 pb-4">
	<a class="btn primary solid rounded" href={replaceQuery({ dialog: 'edit' })}>EDIT</a>

	<button on:click={() => (isOpen = true)}>toggle</button>

	<SidePanel as="edit" title="Edit" bind:isOpen>
		<EditEvent />
	</SidePanel>

	<SidePanel as="confirm" title="Confirm">
		<EditEvent />
	</SidePanel>

	<SidePanel as="add" title="Add">
		<Avatar />
		Adding
	</SidePanel>
	<Calendar />
</div>
