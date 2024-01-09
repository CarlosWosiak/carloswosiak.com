<script>
    import Description from "../Description.svelte";
    import Name from "./Name.svelte";
    import Presentation from "../Presentation.svelte";
</script>

<div class="initial-presentation">
    <Name />
    <div class="row" id="about">
        <Presentation />
        <Description />
    </div>
</div>

<style>
    .initial-presentation {
        margin: 3rem 0;
    }
</style>
