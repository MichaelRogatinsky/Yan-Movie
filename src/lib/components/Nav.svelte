<script lang="ts">
	import { base } from '$app/paths';
	import { NAV_LINKS } from '$lib/data/content';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	function handleNavClick() {
		mobileOpen = false;
	}
</script>

<nav class:scrolled>
	<div class="nav-inner">
		<button class="logo" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
			<img src="{base}/images/01.%20New%20Royalty%20Logos/new_royalty_logo-notext.png" alt="New Royalty Films" class="logo-img" />
		</button>

		<button
			class="hamburger"
			class:active={mobileOpen}
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div class="nav-links" class:open={mobileOpen}>
			{#each NAV_LINKS as link}
				<a href={link.href} onclick={handleNavClick}>{link.label}</a>
			{/each}
		</div>
	</div>
</nav>

{#if mobileOpen}
	<button class="overlay" onclick={() => (mobileOpen = false)} aria-label="Close menu"></button>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 1rem var(--content-padding);
		transition: background var(--transition-smooth), box-shadow var(--transition-smooth);
	}

	nav.scrolled {
		background: rgba(13, 17, 23, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
	}

	.nav-inner {
		max-width: var(--content-max-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		display: flex;
		align-items: center;
	}

	.logo-img {
		height: 40px;
		width: auto;
		filter: invert(1) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
		transition: opacity var(--transition-smooth);
	}

	.logo:hover .logo-img {
		opacity: 0.85;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 0.9rem;
		color: var(--color-white);
		text-transform: uppercase;
		letter-spacing: 1px;
		position: relative;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
		transition: color var(--transition-smooth);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-teal);
		transition: width var(--transition-smooth);
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		z-index: 1001;
	}

	.hamburger span {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--color-white);
		transition: transform var(--transition-smooth), opacity var(--transition-smooth);
	}

	.hamburger.active span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.active span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.active span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 998;
		border: none;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			width: 260px;
			background: rgba(13, 17, 23, 0.95);
			backdrop-filter: blur(16px);
			-webkit-backdrop-filter: blur(16px);
			flex-direction: column;
			padding: 5rem 2rem 2rem;
			gap: 1.5rem;
			transform: translateX(100%);
			transition: transform var(--transition-smooth);
			z-index: 999;
		}

		.nav-links.open {
			transform: translateX(0);
		}

		.overlay {
			display: block;
		}
	}
</style>
