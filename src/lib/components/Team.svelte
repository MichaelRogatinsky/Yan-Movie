<script lang="ts">
	import { base } from '$app/paths';
	import { TEAM } from '$lib/data/content';
	import TeamMemberCard from './TeamMember.svelte';
</script>

<section id="team" class="team" style="background-image: url('{base}/images/teal-texture.jpeg')">
	<div class="container">
		<h2 class="section-title">Meet The Team</h2>
		<div class="members">
			<TeamMemberCard member={TEAM[0]} imagePosition="center top" />
			<TeamMemberCard member={TEAM[1]} reversed imagePosition="center top" />
		</div>
	</div>
</section>

<style>
	.team {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
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
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--color-navy);
		text-align: center;
		margin-bottom: 4rem;
	}

	.members {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}
</style>
