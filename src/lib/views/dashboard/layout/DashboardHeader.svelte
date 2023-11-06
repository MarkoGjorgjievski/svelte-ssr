<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import IconButton from '$lib/components/base/button/IconButton.svelte';
	import ProfileDropdown from '../overlays/dropdowns/ProfileDropdown.svelte';
	import NotificationDropdown from '../overlays/dropdowns/NotificationDropdown.svelte';
</script>

<header
	class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:pl-64 dark:bg-gray-800 dark:border-gray-700"
>
	<nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
		<div class="mr-5 lg:mr-0 lg:hidden">
			<a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"
				>Taman</a
			>
		</div>

		<div
			class="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3"
		>
			<div class="sm:hidden">
				<IconButton>
					<i class="bi bi-search" />
				</IconButton>
			</div>

			<div class="hidden sm:block">
				<label for="icon" class="sr-only">Search</label>
				<div class="relative">
					<div
						class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4 text-neutral-content"
					>
						<i class="bi bi-search" />
					</div>
					<input
						type="text"
						id="icon"
						name="icon"
						class="py-2 px-4 pl-11 block w-full border-base-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border"
						placeholder="Search"
					/>
				</div>
			</div>

			<div class="flex flex-row items-center justify-end gap-2">
				<ThemeSwitcher />

				<NotificationDropdown />

				<ProfileDropdown />
			</div>
		</div>
	</nav>
</header>
