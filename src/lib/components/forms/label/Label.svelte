<script lang="ts">
	import { labelVariants } from './LabelCVA';
	import { cn } from '$lib/helpers/classValue';

	export let label: string = 'Label';
	export let id: string = '';
	export let variant: 'default' | 'floating' = 'default';
	export let size: 'small' | 'default' | 'large' = 'default';
</script>

<label for={id} class={cn(labelVariants({ variant, size }))}>{label}</label>
