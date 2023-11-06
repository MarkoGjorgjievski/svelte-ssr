<script>
	import ImageHeaderSection from '$lib/views/shared/sections/galleries/ImageHeaderSection.svelte';
</script>

<ImageHeaderSection />
<div class="inline-flex gap-4">
	<div
		class="overflow-hidden flex-2 ml-4 md:ml-8 -mt-8 relative z-10 h-28 w-28 mx-auto rounded-full shadow-lg ring-4 ring-white dark:ring-gray-800"
	>
		<img
			class="object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-28 min-w-28 w-28"
			src="https://images.unsplash.com/photo-1507914630432-36c25334fe9a?auto=format&fit=crop&q=80&w=2049&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="Description"
		/>
	</div>
	<div class="flex-1 space-y-1">
		<h2 class="mt-2 text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-200">
			Alley Barber Shop
		</h2>
		<span
			class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
			>Barbershop</span
		>
	</div>
</div>
