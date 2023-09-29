<script>
    import Social from "./Social.svelte";
</script>

<div class="row footer">
    <div
        class="col-sm-10 col-md-5 col-lg-4 col-sm-offset-1 col-lg-offset-3 col-md-offset-2"
    >
        <div class="credit">
            Built with Svelte, mini.css and ❤️, deployed with Vercel. All text
            is set in the Inter typeface.
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
</style>
