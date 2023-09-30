<script>
  import JobEntry from "../components/JobEntry.svelte";
  import Footer from "../components/Footer.svelte";
  import { jobList } from "../data/jobs";
  import Description from "../components/Description.svelte";
  import Presentation from "../components/Presentation.svelte";
  import Navigation from "../components/Navigation.svelte";
</script>

<div class="container">
  <Navigation />
  <div class="row initial-presentation" id="about">
    <Presentation />
    <Description />
  </div>
  {#each jobList as job}
    <JobEntry {...job} />
  {/each}
  <Footer />
</div>

<style>
  .initial-presentation {
    margin: 4rem 0;
  }
</style>
