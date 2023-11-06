<script>
	import Modal from '$lib/components/overlays/Modal.svelte';
	import CommandPalleteListItem from '$lib/templates/lists/CommandPalleteListItem.svelte';
</script>

<Modal as="search">
	<div
		class="min-w-[15rem] shadow-xl bg-white rounded-lg overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700"
	>
		<div class="block p-2 text-center text-gray-700 rounded-lg dark:text-white">
			<input
				type="text"
				class=" py-3 px-4 block w-full outline-none rounded-md text-sm dark:bg-slate-900 dark:text-gray-400"
				placeholder="This is placeholder"
				autofocus
			/>
		</div>
		<div class="divide-y divide-gray-100 dark:divide-gray-700">
			<CommandPalleteListItem />
			<CommandPalleteListItem href="/dashboard/account?tab=general" />
			<CommandPalleteListItem />
			<CommandPalleteListItem />
		</div>
	</div>
</Modal>
