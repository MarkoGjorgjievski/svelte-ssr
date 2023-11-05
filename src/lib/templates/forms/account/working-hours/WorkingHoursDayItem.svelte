<script>
	export let label = 'Day';
</script>

<div
	class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700"
	id="hs-basic-always-open-heading-one"
>
	<div class="flex items-center gap-8">
		<div class="flex items-center pl-5">
			<input
				type="checkbox"
				id="hs-basic-with-description-checked"
				class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
				checked
			/>
			<label
				for="hs-basic-with-description-checked"
				class="text-sm text-gray-500 ml-3 dark:text-gray-400">{label}</label
			>
		</div>

		<button
			class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
			aria-controls="hs-basic-always-open-collapse-one"
		>
			<span>
				<ul class="text-sm font-normal text-gray-500 whitespace-nowrap">
					<li
						class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
					>
						09:00
					</li>
					<li
						class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
					>
						17:00
					</li>
				</ul>
			</span>
			<svg
				class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.5 8.85999L14.5 8.85998"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M8 15.36L8 2.35999"
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
					d="M1.5 8.85999L14.5 8.85998"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</button>
	</div>

	<div
		id="hs-basic-bordered-collapse-one"
		class="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300"
		aria-labelledby="hs-bordered-heading-one"
	>
		<div class="pb-4 px-5 flex items-center">
			<div>
				<select
					id="hs-select-label"
					class="py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
				>
					<option>09:00</option>
					<option>10:00</option>
					<option>11:00</option>
				</select>
			</div>
			<span class="block text-sm font-medium mb-2 dark:text-white px-6">to</span>
			<div>
				<select
					id="hs-select-label"
					class="py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
				>
					<option>10:00</option>
					<option>11:00</option>
					<option>12:00</option>
				</select>
			</div>
		</div>
	</div>
</div>
