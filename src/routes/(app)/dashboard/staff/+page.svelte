<script>
	import Checkbox from '$lib/components/forms/checkbox/Checkbox.svelte';
	import Input from '$lib/components/forms/input/Input.svelte';
	import Select from '$lib/components/forms/select/Select.svelte';
	import StaffSection from '$lib/views/dashboard/sections/staff/StaffSection.svelte';

	let open = false;
	$: console.log(open);

	let options = [
		{ label: '123', value: '1233' },
		{ label: '324324', value: '3243243242' }
	];
</script>

<div class="p-4 space-y-4">
	<Input placeholder="Write something.." label="asmdlmsd" helperText="Helper text" disabled />
	<Select {options} label="Select" />
	<Checkbox label="Checkbox" bind:checked={open} id="check" />
</div>
<StaffSection />
