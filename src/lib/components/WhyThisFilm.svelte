<script lang="ts">
	import { WHY_THIS_FILM } from '$lib/data/content';
</script>

<section id="why" class="why">
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
				<img src="/images/sunset-silhouette.png" alt="Couple silhouette at sunset" />
			</div>
		</div>
	</div>
</section>

<style>
	.why {
		background: url('/images/teal-texture.jpeg') center/cover no-repeat;
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
