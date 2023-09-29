<script>
    import Social from "./Social.svelte";
</script>

<div class="row footer">
    <div
        class="col-sm-10 col-md-5 col-lg-4 col-sm-offset-1 col-lg-offset-3 col-md-offset-2"
    >
        <Social />
    </div>

    <div class="col-sm-10 col-md-3 col-lg-2 col-sm-offset-1">
        Built with Svelte, mini.css and ❤️, deployed with Vercel. All text is
        set in the Inter typeface.
    </div>
</div>

<style>
    .footer {
        margin-bottom: 4rem;
    }
</style>
