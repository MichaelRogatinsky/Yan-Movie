<script lang="ts">
	import { base } from '$app/paths';
	import { SYNOPSIS, MOVIE_INFO } from '$lib/data/content';
	import { parallax } from '$lib/actions/parallax';

	const paragraphs = SYNOPSIS.split('\n\n');
</script>

<section id="about" class="about" use:parallax>
	<div class="container">
		<div class="content">
			<h2 class="section-title">About The Film</h2>
			{#each paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
			<div class="tags">
				{#each MOVIE_INFO.comparables as film}
					<span class="tag">In the spirit of {film}</span>
				{/each}
			</div>
		</div>
		<div class="visual">
			<div class="image-frame">
				<img src="{base}/images/silhouettes-water.png" alt="Two silhouettes at sunset on the water" />
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		background:
			linear-gradient(135deg, rgba(137, 204, 208, 0.7) 0%, rgba(200, 168, 208, 0.4) 50%, rgba(232, 168, 124, 0.7) 100%),
			linear-gradient(225deg, rgba(106, 188, 196, 0.6) 0%, rgba(168, 216, 220, 0.3) 40%, rgba(255, 155, 80, 0.5) 100%),
			linear-gradient(160deg, #89ccd0 0%, #b8d8e0 20%, #d4a8c8 45%, #e8a87c 70%, #f0c090 85%, #89ccd0 100%);
		background-size: 100% 300%, 100% 300%, 100% 300%;
		background-position: center 50%;
		padding: var(--section-padding) var(--content-padding);
		position: relative;
		overflow: hidden;
	}

	.about::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -20%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
		border-radius: 50%;
	}

	.container {
		max-width: var(--content-max-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.section-title {
		font-family: var(--font-script);
		font-style: italic;
		font-weight: 700;
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--color-navy);
		margin-bottom: 2rem;
	}

	.content p {
		font-size: clamp(0.95rem, 1.5vw, 1.05rem);
		color: var(--color-navy);
		margin-bottom: 1.25rem;
		line-height: 1.75;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 2rem;
	}

	.tag {
		font-family: var(--font-body);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-navy);
		background: rgba(255, 255, 255, 0.35);
		border: 1px solid rgba(255, 255, 255, 0.5);
		padding: 0.35rem 0.85rem;
		border-radius: 50px;
		letter-spacing: 0.3px;
	}

	.visual {
		display: flex;
		justify-content: center;
		position: relative;
	}

	.image-frame {
		width: 100%;
		max-width: 450px;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
	}

	.image-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.container {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.visual {
			order: -1;
		}

		.image-frame {
			max-width: 350px;
		}
	}
</style>
