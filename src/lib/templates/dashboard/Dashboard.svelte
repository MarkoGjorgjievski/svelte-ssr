<script>
	import DashboardHeader from './DashboardHeader.svelte';
	import DashboardSidebar from './DashboardSidebar.svelte';
	import DashboardSidebarToggle from './DashboardSidebarToggle.svelte';
</script>

<svelte:head>
	<title>Alley Barber Shop - Dashboard</title>
</svelte:head>

<div class="bg-gray-50 dark:bg-slate-900">
	<!-- ========== HEADER ========== -->
	<DashboardHeader />
	<!-- ========== END HEADER ========== -->

	<!-- ========== MAIN CONTENT ========== -->

	<!-- Sidebar Toggle -->
	<DashboardSidebarToggle />
	<!-- End Sidebar Toggle -->

	<!-- Sidebar -->
	<DashboardSidebar />
	<!-- End Sidebar -->

	<!-- Content -->
	<div class="w-full px-4 sm:px-6 md:px-8 lg:pl-72">
		<slot />
	</div>
	<!-- End Content -->

	<!-- ========== END MAIN CONTENT ========== -->
</div>
