<script>
	import '../app.css';
	import Header from '$lib/templates/sections/header/Header.svelte';
	import Footer from '$lib/templates/sections/footer/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
