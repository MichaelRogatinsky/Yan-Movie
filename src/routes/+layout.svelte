<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>A Floridian's Guide to Coming Out | A Coming-of-Age Comedy</title>
	<link rel="icon" href="{base}/images/01.%20New%20Royalty%20Logos/new_royalty_logo-notext.png" type="image/png" />
	<meta property="og:title" content="A Floridian's Guide to Coming Out" />
	<meta property="og:description" content="A coming-of-age comedy about self-discovery and the absurd lengths we go to in order to avoid being honest with ourselves." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{base}/images/A%20Floridians%20Guide%20-%20Proposal.png" />
</svelte:head>

<Nav />
{@render children()}
