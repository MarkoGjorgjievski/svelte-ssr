<script>
	import TableFooter from './TableFooter.svelte';
	import TableHeader from './TableHeader.svelte';
</script>

<div class="max-w-[85rem] py-6 mx-auto">
	<!-- Card -->
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div
					class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
				>
					<!-- Header -->
					<TableHeader />
					<!-- End Header -->

					<!-- Table -->
					<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
						<thead class="bg-gray-50 dark:bg-slate-800">
							<tr>
								<th scope="col" class="px-6 py-3 text-left">
									<a class="group inline-flex items-center gap-x-2" href="#">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
										>
											Description
										</span>
									</a>
								</th>

								<th scope="col" class="px-6 py-3 text-left">
									<a class="group inline-flex items-center gap-x-2" href="#">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
										>
											Tag
										</span>
									</a>
								</th>

								<th scope="col" class="px-6 py-3 text-left">
									<a class="group inline-flex items-center gap-x-2" href="#">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
										>
											Duration <small>(hh:min)</small>
										</span>
									</a>
								</th>

								<th scope="col" class="px-6 py-3 text-left">
									<a class="group inline-flex items-center gap-x-2" href="#">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
										>
											Price <small>(den)</small>
										</span>
									</a>
								</th>

								<th scope="col" class="px-6 py-3 text-left">
									<a class="group inline-flex items-center gap-x-2" href="#">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
										>
											Members
										</span>
										<!-- Filter -->
									</a>
								</th>

								<th scope="col" class="px-6 py-3 text-right" />
							</tr>
						</thead>

						<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
							<tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
								<td class="h-px w-72 min-w-[18rem]">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">Clean shave</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<span
												class="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
											>
												Shaving
											</span>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">00:15</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">400</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2 flex -space-x-2">
											<div class="hs-tooltip inline-flex">
												<img
													class="hs-tooltip-toggle inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													David Harrison
												</span>
											</div>
											<div class="hs-tooltip inline-flex">
												<img
													class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													Amanda Jr.
												</span>
											</div>
											<div class="hs-tooltip inline-flex">
												<img
													class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													Asia Boone
												</span>
											</div>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<div class="px-6 py-2">
										<div class="hs-dropdown relative inline-block [--placement:bottom-right]">
											<button
												id="hs-table-dropdown-1"
												type="button"
												class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
											>
												<svg
													class="w-4 h-4"
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
													/>
												</svg>
											</button>
											<div
												class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
												aria-labelledby="hs-table-dropdown-1"
											>
												<div class="py-2 first:pt-0 last:pb-0">
													<span
														class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600"
													>
														Actions
													</span>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Rename team
													</a>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Add to favorites
													</a>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Archive team
													</a>
												</div>
												<div class="py-2 first:pt-0 last:pb-0">
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Delete
													</a>
												</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
							<tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
								<td class="h-px w-72 min-w-[18rem]">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">Men's Haircut</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<span
												class="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
											>
												Men's Haircut
											</span>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">00:30</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2">
											<p class="text-sm text-gray-500">350</p>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<a class="block relative z-10" href="#">
										<div class="px-6 py-2 flex -space-x-2">
											<div class="hs-tooltip inline-flex">
												<img
													class="hs-tooltip-toggle inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													David Harrison
												</span>
											</div>
											<div class="hs-tooltip inline-flex">
												<img
													class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													Amanda Jr.
												</span>
											</div>
											<div class="hs-tooltip inline-flex">
												<img
													class="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
													src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
													alt="Image Description"
												/>
												<span
													class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
													role="tooltip"
												>
													Asia Boone
												</span>
											</div>
										</div>
									</a>
								</td>
								<td class="h-px w-px whitespace-nowrap">
									<div class="px-6 py-2">
										<div class="hs-dropdown relative inline-block [--placement:bottom-right]">
											<button
												id="hs-table-dropdown-1"
												type="button"
												class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
											>
												<svg
													class="w-4 h-4"
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
													/>
												</svg>
											</button>
											<div
												class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
												aria-labelledby="hs-table-dropdown-1"
											>
												<div class="py-2 first:pt-0 last:pb-0">
													<span
														class="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-gray-600"
													>
														Actions
													</span>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Rename team
													</a>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Add to favorites
													</a>
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Archive team
													</a>
												</div>
												<div class="py-2 first:pt-0 last:pb-0">
													<a
														class="flex items-center gap-x-3 py-2 px-3 rounded-md text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-gray-700 dark:hover:text-gray-300"
														href="#"
													>
														Delete
													</a>
												</div>
											</div>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- End Table -->

					<!-- Footer -->
					<TableFooter />
					<!-- End Footer -->
				</div>
			</div>
		</div>
	</div>
</div>
