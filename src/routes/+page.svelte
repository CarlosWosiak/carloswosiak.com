<script>
  import JobEntry from "../components/JobEntry.svelte";
  import Footer from "../components/Footer.svelte";
  import { jobList } from "../data/jobs";
  import Description from "../components/Description.svelte";
  import Presentation from "../components/Presentation.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Logo from "../components/Logo.svelte";
  import Contact from "../components/Contact.svelte";
  import Loader from "../components/Loader.svelte";
  import { onMount } from "svelte";
  let showLoader = true;

  onMount(() => {
    setTimeout(() => {
      showLoader = false;
    }, 1200);
  });
</script>

{#if showLoader}
  <Loader />
{:else}
  <div class="container no-show">
    <Logo />
    <Navigation />
    <div class="row initial-presentation" id="about">
      <Presentation />
      <Description />
    </div>
    {#each jobList as job, i}
      <JobEntry {...job} delayShow={i == 0} />
    {/each}
    <Contact />
    <Footer />
  </div>
{/if}

<style>
  .initial-presentation {
    margin: 3rem 0;
  }
</style>
