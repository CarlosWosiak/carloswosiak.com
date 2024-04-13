<script>
  import Projects from "./../components/Projects.svelte";
  import Experience from "../components/Experience.svelte";
  import Footer from "../components/Footer.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Logo from "../components/Logo.svelte";
  import Contact from "../components/Contact.svelte";
  import Loader from "../components/Loader.svelte";
  import Introduction from "../components/Introduction/Introduction.svelte";
  import Certificates from "../components/Certificates.svelte";
  import Education from "../components/Education.svelte";
  import { onMount } from "svelte";
  let showLoader = true;

  onMount(() => {
    setTimeout(() => {
      showLoader = false;
    }, 2200);
  });
</script>

{#if showLoader}
  <Loader />
{:else}
  <Logo />
  <Navigation />
  <Introduction />
  <Experience />
  <Certificates />
  <Projects />
  <Education />
  <Contact />
  <Footer />
{/if}
