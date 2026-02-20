<script lang="ts">
	import { CHARACTERS } from '$lib/data/content';
	import CharacterCard from './CharacterCard.svelte';
	import { parallax } from '$lib/actions/parallax';

	const leads = CHARACTERS.filter((c) => c.isLead);
	const supporting = CHARACTERS.filter((c) => !c.isLead);
</script>

<section id="characters" class="characters" use:parallax>
	<div class="container">
		<h2 class="section-title leads-title">Leads</h2>
		<div class="leads-grid">
			{#each leads as character}
				<CharacterCard {character} />
			{/each}
		</div>

		<h2 class="section-title supporting-title">Supporting</h2>
		<div class="supporting-grid">
			{#each supporting as character}
				<CharacterCard {character} />
			{/each}
		</div>
	</div>
</section>

<style>
	.characters {
		background:
			linear-gradient(to bottom left, rgba(26, 26, 46, 0.6) 0%, rgba(30, 50, 80, 0.3) 50%, rgba(13, 17, 23, 0.6) 100%),
			linear-gradient(to top right, rgba(40, 20, 60, 0.4) 0%, rgba(20, 40, 60, 0.2) 40%, rgba(13, 17, 23, 0.4) 100%),
			linear-gradient(170deg, #0D1117 0%, #151a2e 20%, #1a2440 45%, #1e1830 65%, #141824 85%, #0D1117 100%);
		background-size: 100% 300%, 100% 300%, 100% 300%;
		background-position: center 50%;
		padding: var(--section-padding) var(--content-padding);
	}

	.container {
		max-width: var(--content-max-width);
		margin: 0 auto;
	}

	.section-title {
		font-family: var(--font-script);
		font-style: italic;
		font-weight: 700;
		color: var(--color-white);
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.leads-title {
		font-size: clamp(2rem, 4vw, 3rem);
	}

	.supporting-title {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		margin-top: 4rem;
	}

	.leads-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.supporting-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		.leads-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
			margin: 0 auto;
		}

		.supporting-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 480px) {
		.supporting-grid {
			grid-template-columns: 1fr;
			max-width: 350px;
			margin: 0 auto;
		}
	}
</style>
