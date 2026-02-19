<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Characters from '$lib/components/Characters.svelte';
	import Team from '$lib/components/Team.svelte';
	import DirectorStatement from '$lib/components/DirectorStatement.svelte';
	import WhyThisFilm from '$lib/components/WhyThisFilm.svelte';
	import Footer from '$lib/components/Footer.svelte';

	function reveal(node: HTMLElement) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		const targets = node.querySelectorAll('.reveal, .reveal-stagger');
		targets.forEach((target) => observer.observe(target));

		if (node.classList.contains('reveal') || node.classList.contains('reveal-stagger')) {
			observer.observe(node);
		}

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<div use:reveal>
	<Hero />
	<div class="reveal">
		<About />
	</div>
	<div class="reveal">
		<Characters />
	</div>
	<div class="reveal">
		<Team />
	</div>
	<div class="reveal">
		<DirectorStatement />
	</div>
	<div class="reveal">
		<WhyThisFilm />
	</div>
	<Footer />
</div>
