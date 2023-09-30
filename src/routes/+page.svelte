<script>
  import JobEntry from "../components/JobEntry.svelte";
  import Footer from "../components/Footer.svelte";
  import { jobList } from "../data/jobs";
  import Description from "../components/Description.svelte";
  import Presentation from "../components/Presentation.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Logo from "../components/Logo.svelte";
  import Contact from "../components/Contact.svelte";
</script>

<div class="container">
  <Logo />
  <Navigation />
  <div class="row initial-presentation" id="about">
    <Presentation />
    <Description />
  </div>
  {#each jobList as job}
    <JobEntry {...job} />
  {/each}
  <Contact />
  <Footer />
</div>

<style>
  .initial-presentation {
    margin: 3rem 0;
  }
</style>
