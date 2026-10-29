<script lang="ts">
	import '../app.css';
	import Aurora from '$lib/components/Aurora.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/content';

	let { children } = $props();
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<Aurora />
<div class="grain-layer" aria-hidden="true"></div>

<Nav />

<main>
	{@render children()}
</main>

<Footer />
