<script lang="ts">
	/** @type {import('./$types').PageData} */

	import Stepper from '$lib/components/navigations/stepper/Stepper.svelte';
	export let data: unknown;
</script>

<Stepper {data}>
	<slot />
</Stepper>
