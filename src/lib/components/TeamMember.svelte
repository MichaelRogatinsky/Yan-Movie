<script lang="ts">
	import { base } from '$app/paths';
	import type { TeamMember } from '$lib/data/content';

	let { member, reversed = false, imagePosition = 'top' }: { member: TeamMember; reversed?: boolean; imagePosition?: string } = $props();

	let paragraphs = $derived(member.bio.split('\n\n'));
</script>

<div class="member" class:reversed>
	<div class="photo">
		<img src="{base}{member.image}" alt={member.name} style="object-position: {imagePosition}" />
	</div>
	<div class="info">
		<h3 class="name">{member.name}</h3>
		<span class="role">{member.role}</span>
		{#each paragraphs as paragraph}
			<p>{paragraph}</p>
		{/each}
	</div>
</div>

<style>
	.member {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 3rem;
		align-items: start;
	}

	.member.reversed {
		grid-template-columns: 1.2fr 1fr;
	}

	.member.reversed .photo {
		order: 1;
	}

	.photo {
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
	}

	.photo img {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}

	.name {
		font-family: var(--font-condensed);
		font-weight: 700;
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: var(--color-navy);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.role {
		display: block;
		font-family: var(--font-script);
		font-style: italic;
		font-size: 1.1rem;
		color: var(--color-magenta);
		margin-bottom: 1.25rem;
	}

	.info p {
		font-size: clamp(0.85rem, 1.3vw, 0.95rem);
		color: var(--color-navy);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	@media (max-width: 768px) {
		.member,
		.member.reversed {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.member.reversed .photo {
			order: 0;
		}
	}
</style>
