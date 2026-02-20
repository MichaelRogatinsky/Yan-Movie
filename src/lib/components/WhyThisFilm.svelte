<script lang="ts">
	import { base } from '$app/paths';
	import { WHY_THIS_FILM } from '$lib/data/content';
	import { parallax } from '$lib/actions/parallax';
</script>

<section id="why" class="why" use:parallax>
	<div class="container">
		<div class="content">
			<h2 class="section-title">{WHY_THIS_FILM.title}</h2>
			<div class="points">
				{#each WHY_THIS_FILM.points as point}
					<div class="point">
						<div class="point-marker"></div>
						<p>{point}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="visual">
			<div class="image-frame">
				<img src="{base}/images/sunset-silhouette.png" alt="Couple silhouette at sunset" />
			</div>
		</div>
	</div>
</section>

<style>
	.why {
		background:
			linear-gradient(to top right, rgba(232, 114, 58, 0.2) 0%, rgba(168, 216, 220, 0.3) 50%, rgba(196, 75, 173, 0.15) 100%),
			linear-gradient(315deg, rgba(255, 155, 80, 0.25) 0%, rgba(240, 192, 144, 0.2) 40%, rgba(137, 204, 208, 0.25) 100%),
			linear-gradient(150deg, #e8a87c 0%, #f0c898 18%, #d4b8a0 35%, #a8d8dc 55%, #89ccd0 75%, #c0a8d0 90%, #e8a87c 100%);
		background-size: 100% 300%, 100% 300%, 100% 300%;
		background-position: center 50%;
		padding: var(--section-padding) var(--content-padding);
		position: relative;
	}

	.container {
		max-width: var(--content-max-width);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.section-title {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: clamp(2rem, 5vw, 3.5rem);
		color: var(--color-navy);
		text-transform: uppercase;
		letter-spacing: 2px;
		margin-bottom: 2.5rem;
	}

	.points {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.point {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.point-marker {
		width: 8px;
		height: 8px;
		min-width: 8px;
		border-radius: 50%;
		background: var(--color-magenta);
		margin-top: 0.55rem;
	}

	.point p {
		font-size: clamp(0.9rem, 1.3vw, 1rem);
		color: var(--color-navy);
		line-height: 1.7;
	}

	.visual {
		display: flex;
		justify-content: center;
	}

	.image-frame {
		width: 100%;
		max-width: 400px;
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
	}

	.image-frame img {
		width: 100%;
		aspect-ratio: 2 / 1;
		object-fit: cover;
		object-position: center 15%;
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
			max-width: 320px;
		}
	}
</style>
