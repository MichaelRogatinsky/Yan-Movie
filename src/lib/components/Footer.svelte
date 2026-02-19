<script lang="ts">
    import { base } from "$app/paths";
    import { MOVIE_INFO } from "$lib/data/content";
</script>

<footer id="contact" class="footer">
    <div class="container">
        <div class="brand">
            <img
                src="{base}/images/01.%20New%20Royalty%20Logos/new_royalty_logo-banner%20(1).png"
                alt="New Royalty Films"
                class="brand-logo"
            />
            <h3 class="title">{MOVIE_INFO.title}</h3>
            <p class="production">A {MOVIE_INFO.production} Production</p>
        </div>

        <div class="links">
            <div class="link-group">
                <h4>Navigate</h4>
                <a href="#about">About</a>
                <a href="#characters">Characters</a>
                <a href="#team">Team</a>
                <a href="#statement">Director's Statement</a>
                <a href="#why">Why Now</a>
            </div>
            <div class="link-group">
                <h4>Connect</h4>
                <a href="mailto:20DinoStudios@gmail.com">Email Us</a>
                <p class="note">
                    Follow us on social media for updates on casting,
                    production, and release dates.
                </p>
            </div>
        </div>

        <div class="bottom">
            <p>
                &copy; {new Date().getFullYear()}
                {MOVIE_INFO.production}. All rights reserved.
            </p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: var(--color-navy);
        padding: var(--section-padding) var(--content-padding) 2rem;
        color: var(--color-white);
    }

    .container {
        max-width: var(--content-max-width);
        margin: 0 auto;
    }

    .brand {
        margin-bottom: 3rem;
    }

    .brand-logo {
        height: 45px;
        width: auto;
        filter: invert(1);
        margin-bottom: 1.25rem;
        opacity: 0.9;
    }

    .title {
        font-family: var(--font-condensed);
        font-weight: 700;
        font-size: clamp(1.5rem, 3vw, 2rem);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
    }

    .production {
        font-family: var(--font-script);
        font-style: italic;
        font-size: 1.1rem;
        color: var(--color-teal);
    }

    .links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .link-group h4 {
        font-family: var(--font-condensed);
        font-weight: 500;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 1rem;
    }

    .link-group a {
        display: block;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.75);
        margin-bottom: 0.6rem;
        transition: color var(--transition-smooth);
    }

    .link-group a:hover {
        color: var(--color-teal);
    }

    .note {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.6;
        margin-top: 0.5rem;
    }

    .bottom {
        text-align: center;
    }

    .bottom p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
    }

    @media (max-width: 768px) {
        .links {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
</style>
