<script lang="ts">
	import { DIRECTOR_STATEMENT } from '$lib/data/content';
	import { parallax } from '$lib/actions/parallax';

	const paragraphs = DIRECTOR_STATEMENT.split('\n\n');
</script>

<section id="statement" class="statement" use:parallax>
	<div class="container">
		<h2 class="section-title">Director's Statement</h2>
		<div class="content">
			{#each paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<div class="signature">
			<span class="signature-text">Mariah Morgenstern</span>
		</div>
	</div>
</section>

<style>
	.statement {
		background:
			linear-gradient(to bottom right, rgba(180, 50, 140, 0.3) 0%, rgba(100, 30, 80, 0.15) 50%, rgba(220, 100, 180, 0.25) 100%),
			linear-gradient(to top left, rgba(160, 40, 100, 0.25) 0%, rgba(200, 80, 170, 0.15) 40%, rgba(120, 30, 90, 0.2) 100%),
			linear-gradient(140deg, #8a2670 0%, #7b1e60 15%, #9b2d7b 35%, #b848a0 55%, #a03080 75%, #c44bad 90%, #8a2670 100%);
		background-size: 100% 300%, 100% 300%, 100% 300%;
		background-position: center 50%;
		padding: var(--section-padding) var(--content-padding);
		position: relative;
		overflow: hidden;
	}

	.statement::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		text-align: center;
	}

	.section-title {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		color: var(--color-white);
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-bottom: 3rem;
	}

	.content p {
		font-size: clamp(0.95rem, 1.5vw, 1.1rem);
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.85;
		margin-bottom: 1.5rem;
	}

	.signature {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.signature-text {
		font-family: 'Playfair Display', Georgia, serif;
		font-style: italic;
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: var(--color-white);
	}
</style>
