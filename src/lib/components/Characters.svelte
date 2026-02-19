<script lang="ts">
	import { CHARACTERS } from '$lib/data/content';
	import CharacterCard from './CharacterCard.svelte';

	const leads = CHARACTERS.filter((c) => c.isLead);
	const supporting = CHARACTERS.filter((c) => !c.isLead);
</script>

<section id="characters" class="characters">
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
		background: linear-gradient(180deg, var(--color-navy) 0%, var(--color-navy-light) 100%);
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
