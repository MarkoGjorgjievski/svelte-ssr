<script>
	import RatingStars from '$lib/templates/molecules/to-be-decided/RatingStars.svelte';
	import ReviewContent from '$lib/views/listing/sections/reviews/ReviewContent.svelte';
	import ReviewsByCategory from '$lib/views/listing/sections/reviews/ReviewsByCategory.svelte';
	import ListingServiceItem from './ListingServiceItem.svelte';
</script>

<!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
	<div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
		<!-- Content -->
		<div class="lg:col-span-2">
			<div class="py-8 lg:pr-4 lg:pr-8">
				<div class="space-y-5 lg:space-y-8">
					<div class="space-y-1">
						<h2 class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
							Studio Mladenovski
						</h2>

						<div class="flex justify-between items-center">
							<div class="flex items-center gap-2 lg:gap-5 flex-wrap">
								<RatingStars />
								<p class="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
									Done Bozinov, 24, Kumanovo, Macedonia
								</p>
							</div>
							<div class="flex justify-end items-center gap-x-1.5">
								<!-- Button -->
								<div class="hs-tooltip inline-block">
									<button
										type="button"
										class="hs-tooltip-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500"
									>
										<i class="bi bi-telephone" />
										Call
										<span
											class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black"
											role="tooltip"
										>
											Phone
										</span>
									</button>
								</div>
								<!-- Button -->

								<div class="block h-3 border-r border-gray-300 mx-1.5 dark:border-gray-600" />

								<!-- Button -->
								<div class="hs-dropdown relative inline-flex">
									<button
										type="button"
										id="blog-article-share-dropdown"
										class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500"
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
												fill-rule="evenodd"
												d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
											/>
											<path
												fill-rule="evenodd"
												d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
											/>
										</svg>
										Share
									</button>
									<div
										class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-white shadow-2xl rounded-xl p-2 dark:bg-gray-800"
										aria-labelledby="blog-article-share-dropdown"
									>
										<a
											class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
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
													d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
												/>
												<path
													d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
												/>
											</svg>
											Copy link
										</a>
										<div class="border-t border-gray-200 my-2 dark:border-gray-700" />
										<a
											class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
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
													d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
												/>
											</svg>
											Share on Twitter
										</a>
										<a
											class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
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
													d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
												/>
											</svg>
											Share on Facebook
										</a>
										<a
											class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
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
													d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
												/>
											</svg>
											Share on LinkedIn
										</a>
									</div>
								</div>
								<!-- Button -->
							</div>
						</div>
					</div>

					<div class="space-y-2">
						<div class="text-center">
							<div class="grid lg:grid-cols-2 gap-3">
								<div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
									<figure class="relative w-full h-60">
										<img
											class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
											src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
											alt="Image Description"
										/>
									</figure>
									<figure class="relative w-full h-60">
										<img
											class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
											src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
											alt="Image Description"
										/>
									</figure>
								</div>
								<figure class="relative w-full h-72 sm:h-96 lg:h-full">
									<img
										class="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
										alt="Image Description"
									/>
								</figure>
							</div>
						</div>

						<div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
							<!-- Badges/Tags -->
							<div>
								<a
									class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
									href="#"
								>
									Plan
								</a>
								<a
									class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
									href="#"
								>
									Web development
								</a>
								<a
									class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
									href="#"
								>
									Free
								</a>
								<a
									class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"
									href="#"
								>
									Team
								</a>
							</div>
							<!-- End Badges/Tags -->
						</div>
					</div>

					<p class="text-lg text-gray-800 dark:text-gray-200">
						As we've grown, we've seen how Preline has helped companies such as Spotify, Microsoft,
						Airbnb, Facebook, and Intercom bring their designers closer together to create amazing
						things. We've also learned that when the culture of sharing is brought in earlier, the
						better teams adapt and communicate with one another.
					</p>

					<hr class="my-5" />

					<div class="space-y-5">
						<h3 class="text-2xl font-semibold dark:text-white">Our Team</h3>

						<div
							class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
						>
							<div class="text-center">
								<img
									class="rounded-full w-24 h-24 mx-auto"
									src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
									alt="Description"
								/>
								<div class="mt-2 sm:mt-4">
									<h3 class="font-medium text-gray-800 dark:text-gray-200">David Forren</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">Founder / CEO</p>
								</div>
							</div>
							<!-- End Col -->

							<div class="text-center">
								<img
									class="rounded-full w-24 h-24 mx-auto"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
									alt="Description"
								/>
								<div class="mt-2 sm:mt-4">
									<h3 class="font-medium text-gray-800 dark:text-gray-200">Amil Evara</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">UI/UX Designer</p>
								</div>
							</div>
							<!-- End Col -->

							<div class="text-center">
								<img
									class="rounded-full w-24 h-24 mx-auto"
									src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
									alt="Description"
								/>
								<div class="mt-2 sm:mt-4">
									<h3 class="font-medium text-gray-800 dark:text-gray-200">Ebele Egbuna</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">Support Consultant</p>
								</div>
							</div>
							<!-- End Col -->

							<div class="text-center">
								<img
									class="rounded-full w-24 h-24 mx-auto"
									src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
									alt="Description"
								/>
								<div class="mt-2 sm:mt-4">
									<h3 class="font-medium text-gray-800 dark:text-gray-200">Maria Powers</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">Director of sales</p>
								</div>
							</div>
							<!-- End Col -->

							<div class="text-center">
								<img
									class="rounded-full w-24 h-24 mx-auto"
									src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
									alt="Description"
								/>
								<div class="mt-2 sm:mt-4">
									<h3 class="font-medium text-gray-800 dark:text-gray-200">Delia Pawelke</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">Front-end Developer</p>
								</div>
							</div>
							<!-- End Col -->
						</div>
					</div>
					<hr />
					<ReviewsByCategory />
					<ReviewContent />
				</div>
			</div>
		</div>
		<!-- End Content -->

		<!-- Sidebar -->
		<div
			id="service-list"
			class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-100 lg:via-transparent lg:to-transparent dark:from-slate-800 scroll-mt-12"
		>
			<div class="sticky top-20 left-0 py-8 lg:pl-4 lg:pl-8">
				<h3 class="text-2xl font-semibold dark:text-white">Book a service</h3>

				<hr class="my-6" />
				<!-- End Avatar Media -->

				<div class="space-y-6">
					<ListingServiceItem />
					<ListingServiceItem />
					<ListingServiceItem />
					<ListingServiceItem />
					<ListingServiceItem />
					<ListingServiceItem />
				</div>
			</div>
		</div>
		<!-- End Sidebar -->
	</div>
</div>
<!-- End Blog Article -->

<a
	href="#service-list"
	class="sticky bottom-0 lg:hidden inset-x-0 flex items-center justify-center z-50 w-full border-t border-gray-200 text-sm py-0 bg-white/[.6] backdrop-blur-lg dark:bg-slate-900/[.6]"
>
	<div class="relative max-w-[85rem] w-full mx-auto px-4 py-2 text-center" aria-label="Global">
		See all services
		<i class="bi bi-arrow-down" />
	</div>
</a>
