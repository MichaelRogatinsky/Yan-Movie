<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>A Floridian's Guide to Coming Out | A Coming-of-Age Comedy</title>
	<link rel="icon" href="/images/01.%20New%20Royalty%20Logos/new_royalty_logo-notext.png" type="image/png" />
</svelte:head>

<Nav />
{@render children()}
