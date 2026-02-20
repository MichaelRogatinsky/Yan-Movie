<script lang="ts">
	import { TEAM } from '$lib/data/content';
	import TeamMemberCard from './TeamMember.svelte';
	import { parallax } from '$lib/actions/parallax';
</script>

<section id="team" class="team" use:parallax>
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
		background:
			linear-gradient(to bottom right, rgba(155, 45, 123, 0.15) 0%, rgba(168, 216, 220, 0.3) 50%, rgba(106, 184, 189, 0.15) 100%),
			linear-gradient(to top left, rgba(196, 75, 173, 0.2) 0%, rgba(180, 200, 220, 0.3) 40%, rgba(100, 210, 180, 0.2) 100%),
			linear-gradient(200deg, #a8d8dc 0%, #8cc4d4 20%, #b0a8d8 45%, #c9a0c0 65%, #90d4c8 85%, #a8d8dc 100%);
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
