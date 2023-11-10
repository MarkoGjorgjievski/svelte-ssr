<script>
	import Input from '$lib/components/forms/input/Input.svelte';
	import Select from '$lib/components/forms/select/Select.svelte';
	import StaffSection from '$lib/views/dashboard/sections/staff/StaffSection.svelte';

	let options = [
		{ label: '123', value: '1233' },
		{ label: '324324', value: '3243243242' }
	];
</script>

<div class="p-4">
	<Input placeholder="Write something.." label="asmdlmsd" helperText="Helper text" disabled />
	<Select {options} label="Select" />
</div>
<StaffSection />
