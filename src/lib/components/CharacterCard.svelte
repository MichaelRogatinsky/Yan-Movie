<script lang="ts">
	import type { Character } from '$lib/data/content';

	let { character }: { character: Character } = $props();

	let initials = $derived(
		character.name
			.split(' ')
			.map((n) => n[0])
			.join('')
	);
</script>

<div class="card" class:lead={character.isLead}>
	<div class="avatar" style="--accent: {character.accentColor}">
		{#if character.image}
			<img src={character.image} alt={character.name} class="avatar-img" />
		{:else}
			<span class="initials">{initials}</span>
		{/if}
	</div>
	<h3 class="name">{character.name}</h3>
	<span class="age">{character.age}</span>
	<p class="description">{character.description}</p>
</div>

<style>
	.card {
		text-align: center;
		padding: 1.5rem 1rem;
	}

	.avatar {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		margin: 0 auto 1rem;
		background: linear-gradient(
			135deg,
			rgba(137, 204, 208, 0.2),
			rgba(155, 45, 123, 0.15)
		);
		border: 3px solid var(--accent);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
		box-shadow: 0 0 0 0 var(--accent);
	}

	.card:hover .avatar {
		transform: scale(1.05);
		box-shadow: 0 0 25px color-mix(in srgb, var(--accent) 40%, transparent);
	}

	.lead .avatar {
		width: 160px;
		height: 160px;
		border-width: 4px;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		border-radius: 50%;
	}

	.initials {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: 2rem;
		color: var(--accent);
		opacity: 0.7;
	}

	.lead .initials {
		font-size: 2.5rem;
	}

	.name {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--color-white);
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-bottom: 0.25rem;
	}

	.lead .name {
		font-size: 1.3rem;
	}

	.age {
		font-family: var(--font-body);
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.5);
		display: block;
		margin-bottom: 0.75rem;
	}

	.description {
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.65;
		max-width: 300px;
		margin: 0 auto;
	}

	.lead .description {
		font-size: 0.9rem;
		max-width: 320px;
	}
</style>
