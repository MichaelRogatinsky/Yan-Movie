<script lang="ts">
	import { base } from '$app/paths';
	import { MOVIE_INFO } from '$lib/data/content';
</script>

<section class="hero">
	<div class="hero-bg" style="background-image: url('{base}/images/A%20Floridians%20Guide%20-%20Proposal.png')"></div>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		<h1 class="title">{MOVIE_INFO.title}</h1>
		<p class="tagline">{MOVIE_INFO.tagline}</p>
		<div class="meta">
			<span class="badge">{MOVIE_INFO.genre}</span>
			<span class="badge">LGBTQ+</span>
			<span class="badge">{MOVIE_INFO.location}</span>
		</div>
		<a href="#about" class="cta">Discover the Story</a>
	</div>
	<div class="scroll-indicator" aria-hidden="true">
		<span class="chevron"></span>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: 100svh;
		min-height: 600px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: scale(1.05);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(13, 17, 23, 0.3) 0%,
			rgba(13, 17, 23, 0.15) 40%,
			rgba(13, 17, 23, 0.5) 70%,
			rgba(13, 17, 23, 0.85) 100%
		);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 0 var(--content-padding);
		max-width: 900px;
		animation: fadeUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
	}

	.title {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: clamp(2.5rem, 7vw, 5rem);
		color: var(--color-white);
		text-transform: uppercase;
		line-height: 1.1;
		letter-spacing: 2px;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
		margin-bottom: 1.5rem;
	}

	.tagline {
		font-family: var(--font-body);
		font-size: clamp(1rem, 2.2vw, 1.25rem);
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.7;
		max-width: 650px;
		margin: 0 auto 2rem;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	}

	.meta {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2.5rem;
	}

	.badge {
		font-family: var(--font-body);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-white);
		background: rgba(137, 204, 208, 0.25);
		border: 1px solid rgba(137, 204, 208, 0.4);
		padding: 0.4rem 1rem;
		border-radius: 50px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
	}

	.cta {
		display: inline-block;
		font-family: var(--font-condensed);
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--color-white);
		background: linear-gradient(135deg, var(--color-magenta), var(--color-magenta-light));
		padding: 0.9rem 2.5rem;
		border-radius: 50px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
		box-shadow: 0 4px 20px rgba(155, 45, 123, 0.4);
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(155, 45, 123, 0.6);
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		animation: bounce 2s ease-in-out infinite;
	}

	.chevron {
		display: block;
		width: 24px;
		height: 24px;
		border-right: 2px solid rgba(255, 255, 255, 0.6);
		border-bottom: 2px solid rgba(255, 255, 255, 0.6);
		transform: rotate(45deg);
	}

	@keyframes fadeUp {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes bounce {
		0%, 100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(10px);
		}
	}
</style>
