<script>
    import Social from "./Social.svelte";
</script>

<div class="row footer">
    <div
        class="col-sm-10 col-md-5 col-lg-4 col-sm-offset-1 col-lg-offset-3 col-md-offset-2"
    >
        <div class="credit">
            Designed in <a
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer">Figma</a
            >, Built with
            <a
                href="https://svelte.dev/"
                target="_blank"
                rel="noopener noreferrer">Svelte</a
            >,
            <a
                href="https://minicss.us/"
                target="_blank"
                rel="noopener noreferrer">mini.css</a
            >
            and ❤️, deployed with
            <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer">Vercel</a
            >. All text is set in the Inter typeface.
        </div>
    </div>

    <div class="col-sm-10 col-md-3 col-lg-2 col-sm-offset-1">
        <Social />
    </div>
</div>

<style>
    .footer {
        margin-bottom: 4rem;
    }
    .credit {
        max-width: 20rem;
    }
    a {
        text-decoration: none;
        font-weight: 600;
        color: white;
    }
</style>
