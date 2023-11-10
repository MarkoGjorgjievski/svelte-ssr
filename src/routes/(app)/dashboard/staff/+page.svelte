<script>
	import Input from '$lib/components/forms/input/Input.svelte';
	import StaffSection from '$lib/views/dashboard/sections/staff/StaffSection.svelte';
</script>

<div class="p-4">
	<Input
		placeholder="Write something.."
		floating
		label="asmdlmsd"
		helperText="Helper text"
		intent="danger"
	/>
</div>
<StaffSection />
