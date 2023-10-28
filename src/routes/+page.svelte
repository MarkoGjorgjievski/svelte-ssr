<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<header
	class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800"
>
	<nav
		class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
		aria-label="Global"
	>
		<div class="flex items-center justify-between">
			<a class="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
			<div class="sm:hidden">
				<button
					type="button"
					class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
					data-hs-collapse="#navbar-with-collapse"
					aria-controls="navbar-with-collapse"
					aria-label="Toggle navigation"
				>
					<svg
						class="hs-collapse-open:hidden w-4 h-4"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
					<svg
						class="hs-collapse-open:block hidden w-4 h-4"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div id="navbar-with-collapse" class="hidden basis-full grow sm:block">
			<div
				class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
			>
				<a class="font-medium text-blue-500" href="#" aria-current="page">Landing</a>
				<a
					class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
					href="#">Account</a
				>
				<a
					class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
					href="#">Work</a
				>
				<a
					class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
					href="#">Blog</a
				>
			</div>
		</div>
	</nav>
</header>

<ThemeSwitcher />

<div class="hs-accordion-group">
	<div class="hs-accordion active" id="hs-basic-heading-one">
		<button
			class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
			aria-controls="hs-basic-collapse-one"
		>
			<svg
				class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M8.12421 13.36V2.35999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<svg
				class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			Accordion #1
		</button>
		<div
			id="hs-basic-collapse-one"
			class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
			aria-labelledby="hs-basic-heading-one"
		>
			<p class="text-gray-800 dark:text-gray-200">
				<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
				plugin adds the appropriate classes that we use to style each element. These classes control
				the overall appearance, as well as the showing and hiding via CSS transitions.
			</p>
		</div>
	</div>

	<div class="hs-accordion" id="hs-basic-heading-two">
		<button
			class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
			aria-controls="hs-basic-collapse-two"
		>
			<svg
				class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M8.12421 13.36V2.35999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<svg
				class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			Accordion #2
		</button>
		<div
			id="hs-basic-collapse-two"
			class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
			aria-labelledby="hs-basic-heading-two"
		>
			<p class="text-gray-800 dark:text-gray-200">
				<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
				plugin adds the appropriate classes that we use to style each element. These classes control
				the overall appearance, as well as the showing and hiding via CSS transitions.
			</p>
		</div>
	</div>

	<div class="hs-accordion" id="hs-basic-heading-three">
		<button
			class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
			aria-controls="hs-basic-collapse-three"
		>
			<svg
				class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M8.12421 13.36V2.35999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			<svg
				class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.62421 7.86L13.6242 7.85999"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
			Accordion #3
		</button>
		<div
			id="hs-basic-collapse-three"
			class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
			aria-labelledby="hs-basic-heading-three"
		>
			<p class="text-gray-800 dark:text-gray-200">
				<em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
				plugin adds the appropriate classes that we use to style each element. These classes control
				the overall appearance, as well as the showing and hiding via CSS transitions.
			</p>
		</div>
	</div>
</div>
