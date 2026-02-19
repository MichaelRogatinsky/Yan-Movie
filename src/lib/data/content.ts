export interface Character {
	name: string;
	age: string;
	description: string;
	accentColor: string;
	isLead: boolean;
	image?: string;
}

export interface TeamMember {
	name: string;
	role: string;
	bio: string;
	image: string;
}

export const MOVIE_INFO = {
	title: "A Floridian's Guide to Coming Out",
	tagline: 'A coming-of-age comedy about self-discovery and the absurd lengths we go to in order to avoid being honest with ourselves.',
	genre: 'Coming-of-Age Comedy',
	comparables: ['Booksmart', "But I'm a Cheerleader", 'Shiva Baby', 'Pariah', 'Bottoms'],
	production: 'New Royalty Films',
	location: 'Florida',
};

export const SYNOPSIS = `A Floridian's Guide to Coming Out is a coming-of-age comedy set against the absurd, sun-bleached backdrop of suburban Florida.

The film follows Andy, a 17-year-old Chinese adoptee navigating a sudden school transfer, a hyper-queer new environment, and the growing realization that the biggest obstacle to her identity isn't her parents or her peers — it's herself.

Blending humor with sincerity, the story explores first crushes, internalized fear, and the performance of "normalcy" in a world that feels increasingly polarized.

Through escalating misadventures, Andy is forced to confront the difference between who she thinks she's supposed to be and who she actually is.

Designed for Gen-Z and LGBTQ+ audiences, A Floridian's Guide to Coming Out offers a joyful, accessible take on queer self-discovery, prioritizing comedy, warmth, and relief over trauma.`;

export const CHARACTERS: Character[] = [
	{
		name: 'Andy Salmon',
		age: '17',
		description: 'A Chinese adoptee with acute fear of rejection whose desperate, slapstick performance of heterosexuality masks a brilliant, anxious heart finally ready to embrace her queerness.',
		accentColor: 'var(--color-teal)',
		isLead: true,
	},
	{
		name: 'Quinn Ali',
		age: '17',
		description: 'A quietly confident, artistic observer with a warm smile and a patient soul, who sees Andy more clearly than Andy sees herself.',
		accentColor: 'var(--color-magenta-light)',
		isLead: true,
	},
	{
		name: 'Nate Miller',
		age: '17',
		description: "Andy's proudly queer best friend, a glitter-clad romantic with a fierce loyalty and a surprisingly strategic mind for solar panels and gossip.",
		accentColor: 'var(--color-sunset-orange)',
		isLead: true,
	},
	{
		name: 'Jessica "Jess" Sun',
		age: '17',
		description: 'A cynic in a leather jacket who weaponizes deadpan honesty as both a shield and a scalpel, secretly rooting for the rom-com ending she claims to despise.',
		accentColor: 'var(--color-teal-dark)',
		isLead: false,
		image: '/images/yanju-portrait.jpeg',
	},
	{
		name: 'Lucas Evans',
		age: '18',
		description: "The sunny, athletic boy-next-door whose easygoing charm and secret sustainability passion make him the unwitting subject of Andy's disastrous crush and Nate's genuine affection.",
		accentColor: 'var(--color-sunset-gold)',
		isLead: false,
	},
	{
		name: 'Bethany Salmon',
		age: '40s',
		description: "Andy's well-intentioned mother, a whirlwind of floral prints and catastrophic phrasing whose profound love is only matched by her stunning lack of subtlety.",
		accentColor: 'var(--color-magenta)',
		isLead: false,
	},
	{
		name: 'Sterling Salmon',
		age: '40s',
		description: "Andy's gruff-but-soft father, a man who expresses deep care through apocalyptic rants about local news and a painfully earnest desire to \"get it right.\"",
		accentColor: 'var(--color-teal)',
		isLead: false,
	},
	{
		name: 'Mr. Duran',
		age: '30s',
		description: 'The Limnology teacher, an eccentric swamp prophet in a fishing vest who views Florida\'s ecosystem and his students\' drama with the same reverent, chaotic fascination.',
		accentColor: 'var(--color-sunset-orange)',
		isLead: false,
	},
	{
		name: 'Amanda Short',
		age: '17',
		description: "A sweet-natured airhead whose blissful ignorance and entrepreneurial spirit (specializing in artisanal, non-narcotic bath salts) make her the group's unpredictable wild card.",
		accentColor: 'var(--color-magenta-light)',
		isLead: false,
	},
	{
		name: 'Tommy Pritchard',
		age: '17',
		description: "A Florida Man in training, he's a well-meaning chaos agent in a toga whose grand gestures (and flying manatee project) consistently achieve spectacularly wrong results.",
		accentColor: 'var(--color-sunset-gold)',
		isLead: false,
	},
];

export const TEAM: TeamMember[] = [
	{
		name: 'Mariah Morgenstern',
		role: 'Director / Producer',
		bio: `Mariah Morgenstern is an entrepreneur, filmmaker, and producer with over seven years of professional experience in film production, working across narrative features, television, commercials, and music-driven content in both the U.S. and internationally.

In 2020, Mariah founded New Royalty Films, a production company built on the principles of execution, discipline, strong on-set cultures, and creator-driven storytelling.

In 2023, Mariah released her award-winning short Death And, which received a Silver People's Telly Award and Best Director, Best Honesty Comedy, and Best Visual Effects at festivals across the U.S. and internationally. In 2025, she completed two feature films — Skimmer and the Gateway Crew — within the same calendar year, an achievement that places her among a small cohort of first-time female directors to release both a debut and sophomore feature at that pace.

She is a GRAMMY U member and continues to operate at the intersection of narrative storytelling and music.`,
		image: '/images/Screenshot%202026-02-19%20174956.png',
	},
	{
		name: 'Yan Ju Zeng',
		role: 'Writer',
		bio: `Yan Ju Zeng is a writer and actress based in Florida, with a background in character-driven storytelling and independent film production. She holds a Bachelor's degree from the University of Central Florida, with an academic focus in communication, legal studies, entrepreneurship, and journalism.

As an actress, Yan Ju has worked across film and digital projects, bringing a performance-forward sensibility to her writing. She has collaborated with New Royalty Films on the feature Skimmer and several short-form projects, gaining hands-on experience in independent production environments.

Her work is grounded in emotional authenticity, sharp observation, and a strong interest in stories centered on identity, relationships, and personal conflict.`,
		image: '/images/yanju-portrait.jpeg',
	},
];

export const DIRECTOR_STATEMENT = `A Floridian's Guide to Coming Out is a coming-of-age comedy about self-discovery and the absurd lengths we go to in order to avoid being honest with ourselves. Set in heightened, sun-drenched Florida, the film explores identity not as a tragedy, but as a series of misunderstandings, overcorrections, and very funny mistakes.

The story centers on Andy, a teenager who isn't battling bullies or cruel parents, but her own fear of wanting the "wrong" thing. I was drawn to telling a queer story where the conflict is internal, where comedy comes from performance, denial, and the exhausting act of trying to be normal. From my own journey of discovering my identity, I found Andy extremely relatable, which made me confident that Andy is the kind of character people will be referencing for generations to come.

Visually and tonally, the film is inspired by Bottoms: bold, playful, colorful, and unapologetically fun. Florida becomes its own character, exaggerated, strange, and slightly unhinged, mirroring the intensity of teenage emotions.

Humor is fast, self-aware, and grounded in emotional truth.

Ultimately, A Floridian's Guide to Coming Out is about relief. It's about the moment when fear loosens its grip and self-acceptance feels less like a crisis and more like freedom. I hope the film makes people laugh, cringe, and recognize themselves, and reminds them that choosing yourself doesn't always have to be solely dramatic. Sometimes, it can just be funny.`;

export const WHY_THIS_FILM = {
	title: 'WHY NOW?',
	points: [
		'This story explores the universal internalized pressure teens face about their parents and who they\'re expected to be.',
		'Through humor and heartwarming/hilarious dialogue, A Floridian\'s Guide to Coming Out seeks to bring representation and light to queer teens who need a break from the morbidity of reality.',
		'Our film draws on the universal fear of failing parental expectations and classic miscommunication tropes to fuel its absurdist, Florida-driven humor. Showing heart, growth, and community, Andy\'s journey as she realizes it\'s not her parents standing in her way, but really her own fear in the face of being different.',
		'Most LGBTQ films feature an external villain — homophobic parents, bullies, or societal oppression. Here, the primary antagonist is Andy\'s own internalized fear and performative straightness. The "villains" are revealed to be loving, albeit clueless, allies. The conflict is a comedy of self-sabotage and misunderstanding, not a tragedy of persecution.',
		'This provides a fresher perspective that can resonate with a generation facing a more nuanced internal struggle over identity.',
	],
};

export const NAV_LINKS = [
	{ label: 'About', href: '#about' },
	{ label: 'Characters', href: '#characters' },
	{ label: 'Team', href: '#team' },
	{ label: 'Statement', href: '#statement' },
	{ label: 'Why Now', href: '#why' },
	{ label: 'Contact', href: '#contact' },
];
