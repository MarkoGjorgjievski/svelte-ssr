<script>
	import Table from '$lib/components/tables/Table.svelte';
	import Tabs from '$lib/components/navigations/tabs/Tabs.svelte';
	import DashboardHeader from './DashboardHeader.svelte';
	import DashboardSidebar from './DashboardSidebar.svelte';
	import DashboardSidebarToggle from './DashboardSidebarToggle.svelte';

	const tabs = [
		{ slug: 'first', label: 'First' },
		{ slug: 'second', label: 'Second' },
		{ slug: 'third', label: 'Third' }
	];
</script>

<body class="bg-gray-50 dark:bg-slate-900">
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
		<Tabs {tabs} />
		<!-- Table Section -->
		<Table />
		<!-- End Table Section -->
	</div>
	<!-- End Content -->

	<!-- ========== END MAIN CONTENT ========== -->
</body>
