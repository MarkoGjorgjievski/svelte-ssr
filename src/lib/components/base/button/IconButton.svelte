<script lang="ts">
	import type { Size, Variant } from '../../types';
	import Button from './Button.svelte';

	export let size: Size = 'small';
	export let variant: Variant | 'transparent' = 'transparent';
	export let rounded: 'full' | 'medium' = 'full';
</script>

<Button {size} {variant} {rounded} width="shrink">
	<span slot="iconStart">
		<slot />
	</span>
</Button>
