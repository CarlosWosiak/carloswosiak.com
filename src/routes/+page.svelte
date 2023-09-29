<script>
  import JobEntry from "../components/JobEntry.svelte";
  import Footer from "../components/Footer.svelte";
  import { jobList } from "../data/jobs";
  import Description from "../components/Description.svelte";
  import Presentation from "../components/Presentation.svelte";
</script>

<div class="container">
  <div class="row initial-presentation">
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
